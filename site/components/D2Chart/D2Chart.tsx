import React, {
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { get, lowerCase } from '@antv/util';
import {
  DAWN_DAILY_SCHEDULE,
  MIDNIGHT_DAILY_SCHEDULE,
  MORNING_DAILY_SCHEDULE,
  AFTERNOON_DAILY_SCHEDULE,
  NIGHT_DAILY_SCHEDULE,
} from './datas/dailySchedule';
import { CLASSIC, METAL, ELECTRONIC, POP } from './datas/music';
import styles from './D2Chart.module.less';

// 资源
const FONT_FAMILY = `"Avenir Next Condensed", "-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,
  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "Noto Color Emoji"`;

/** 前端框架的一些渲染配置：vis-waterdrop（4种💧，角度随机） */
const Framework = {
  data: [
    { x: 'React', y: 11 },
    { x: 'Bymyself', y: 10 },
    { x: 'Vue', y: 8 },
    { x: 'Angular', y: 7 },
  ],
  color: ({ x }: any) => {
    const colorMap: any = {
      React: 'rgba(94,211,243,0.25)',
      Bymyself: 'rgba(194,200,213,0.25)',
      Vue: 'rgba(63,179,127,0.19)',
      Angular: 'rgba(215,2,47,0.25)',
    };
    return colorMap[x];
  },
};

const getViews = (props: Props, box: DOMRect | undefined) => {
  const {
    theme,
    favoriteFramework,
    efficientWorktime,
    music,
    favoriteIDE,
    themeMode,
  } = props;

  let worktimeData: any[] = [];
  switch (efficientWorktime) {
    case 'morning':
      worktimeData = MORNING_DAILY_SCHEDULE;
      break;
    case 'afternoon':
      worktimeData = AFTERNOON_DAILY_SCHEDULE;
      break;
    case 'dawn':
      worktimeData = DAWN_DAILY_SCHEDULE;
      break;
    case 'night':
      worktimeData = NIGHT_DAILY_SCHEDULE;
      break;
    case 'midnight':
      worktimeData = MIDNIGHT_DAILY_SCHEDULE;
      break;
    default:
      worktimeData = NIGHT_DAILY_SCHEDULE;
      break;
  }

  const yMax = Math.max(...worktimeData.map((d) => d.y));
  const width280 = box && Math.min(box?.height, box?.width) < 280;

  let musicData: any[] = [];
  switch (music) {
    case 'classic':
      musicData = CLASSIC;
      break;
    case 'metal':
      musicData = METAL;
      break;
    case 'electronic':
      musicData = ELECTRONIC;
      break;
    case 'pop':
      musicData = POP;
    default:
      musicData = METAL;
      break;
  }

  // 控制水滴的角度, 用来控制随机角度
  const waterdropStartAngle =
    (Math.PI / 2) * Math.random() * (Math.random() > 0.5 ? -0.5 : 1);
  const waterdropEndAngle = Math.PI * 2 + (Math.PI / 6) * Math.random();

  return [
    {
      // 条形图
      // 处理数据，让数据超过内环的 0.6
      data: worktimeData.map((d) => ({
        ...d,
        y: d.y / yMax < 0.46 ? d.y + yMax * 0.46 * 0.6 : d.y,
      })),
      coordinate: {
        type: 'polar',
        cfg: { radius: 1, innerRadius: 0.65 /** 内环半径 */ },
      },
      axes: {
        x: false,
        y: { label: null, line: null, grid: null, min: 0 },
      },
      geometries: [
        {
          type: 'interval',
          xField: 'x',
          yField: 'y',
          meta: { x: { type: 'cat' } },
          colorField: 'type',
          mapping: {
            color: ['#5B8FF9', '#FE84B2'],
            style: { fillOpacity: 0.45 },
          },
          adjust: {
            type: 'dodge',
            marginRatio: 0.3,
          },
        },
      ],
    },
    {
      // 同步环图, 环图外的光圈
      data: [{ value: 1 }],
      coordinate: { type: 'theta', cfg: { radius: 0.75 } },
      geometries: [
        {
          type: 'interval',
          yField: 'value',
          mapping: {
            style: () => {
              if (favoriteIDE === 'vim') {
                return {
                  // DONE 🎉
                  shadowColor: '#4AD8EA',
                  shadowBlur: 80,
                };
              }
              return {
                shadowColor: 'rgba(255,255,255,0.98)',
                shadowBlur: 140,
                fillOpacity: 0.06,
              };
            },
          },
        },
      ],
    },
    {
      // 时间周期，vis-donut
      region: {
        start: { x: 0.125, y: 0.125 },
        end: { x: 0.875, y: 0.875 },
      },
      data: theme.dailySchedule.data,
      coordinate: {
        type: 'theta',
        cfg: {
          startAngle: (-Math.PI * 5) / 12,
          endAngle: (Math.PI * 3) / 2 + (Math.PI * 1) / 12,
          radius: 1,
          innerRadius: 0.92,
        },
      },
      axes: false,
      geometries: [
        {
          type: 'interval',
          xField: '1',
          yField: 'y',
          colorField: 'x',
          adjust: { type: 'stack' },
          label: {
            fields: ['x'],
            callback: (x: any) => {
              const cfg: any = {
                labelLine: false,
                style: {
                  fontFamily: FONT_FAMILY,
                  fill: theme.dailySchedule.customStyle.fontFill,
                },
              };
              if (x === get(theme.dailySchedule, ['data', 0, 'x'])) {
                // todo 确定计算规则
                cfg.offsetY = width280 ? -16 : -32;
                cfg.offsetX = width280 ? -29 : -58;
              }
              return cfg;
            },
          },
          mapping: {
            color: theme.dailySchedule.color,
            style: theme.dailySchedule.style,
          },
        },
      ],
      annotations: [
        {
          type: 'text',
          position: ['50%', '50%'],
          content: theme.dailySchedule.annotations[0].content,
          // fixme 不知道为啥不居中
          offsetY:
            (theme.dailySchedule.annotations[0].fontSize / 9) *
            (width280 ? 0.6 : 1),
          style: {
            textAlign: 'center',
            textBaseline: 'middle',
            fontSize:
              theme.dailySchedule.annotations[0].fontSize *
              (width280 ? 0.6 : 1),
            lineHeight:
              theme.dailySchedule.annotations[0].fontSize *
              (width280 ? 0.6 : 1),
            fill: theme.dailySchedule.customStyle.fontFill,
            fontFamily: FONT_FAMILY,
          },
        },
        {
          type: 'text',
          position: ['0%', 0],
          offsetY: width280 ? -15 : -30,
          offsetX: width280 ? 18 : -20,
          content: 'Daily\nSchedule',
          style: {
            fill: theme.dailySchedule.customStyle.fontFill,
            fontSize: 18,
            textAlign: 'left',
            fontFamily: FONT_FAMILY,
          },
        },
      ],
    },
    {
      // 内光圈-0，半径 279px = 372px * 0.75（高斯模糊-内环）
      data: [{ value: 1 }],
      coordinate: {
        type: 'theta',
        cfg: {
          radius: 0.75,
        },
      },
      geometries: [
        {
          type: 'interval',
          yField: 'value',
          mapping: {
            color: 'transparent',
            style: {
              shadowColor: 'rgba(255,255,255,0.51)',
              shadowBlur: 400,
            },
          },
        },
      ],
    },
    {
      // 同步环图(环图内圈)
      data: [{ value: 1 }],
      coordinate: { type: 'theta', cfg: { radius: 0.75 * 0.92 } },
      geometries: [
        {
          type: 'interval',
          yField: 'value',
          mapping: {
            color: theme.backgroundColor,
            style: {
              fillOpacity: 1,
              stroke: '#fff',
              strokeOpacity: 0.15,
              lineWidth: 0.8,
            },
          },
        },
      ],
    },
    {
      // 音乐：vis-line
      region: {
        start: { x: 0.125, y: 0.125 },
        end: { x: 0.875, y: 0.875 },
      },
      data: musicData,
      coordinate: {
        type: 'polar',
        cfg: {
          radius: 0.9,
          innerRadius: 0.5 / 0.75,
        },
      },
      axes: false,
      geometries: [
        {
          type: 'line',
          xField: 'x',
          yField: 'y',
          colorField: 'type',
          shapeField: 'type',
          mapping: {
            color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
            style: { lineWidth: 0.8 },
            shape: ({ type }: any) => {
              if (
                ['Lead_guitar', 'Electri_bass', 'Rhythm_guitar'].indexOf(
                  type,
                ) !== -1
              ) {
                return 'smooth';
              }
              return music === 'classic' || music === 'pop' ? 'smooth' : '';
            },
          },
        },
        {
          type: 'point',
          xField: 'x',
          yField: 'y',
          colorField: 'type',
          mapping: {
            color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16'],
            style: (datum: any) => {
              const musicDataIdx = musicData.findIndex(
                (d) =>
                  d.type === datum.type && d.x === datum.x && d.y === datum.y,
              );
              if (music === 'metal') {
                return { r: musicDataIdx % 6 === 0 ? 0 : 2, lineWidth: 0 };
              }
              if (music === 'classic') {
                return { r: 2, lineWidth: 0 };
              }
              return { r: 0, lineWidth: 0 };
            },
            // note: 重金属(metal) 使用三角形, 古典音乐（classic）使用菱形
            shape:
              music === 'metal'
                ? 'triangle'
                : music === 'classic'
                ? 'diamond'
                : '',
          },
        },
      ],
    },
    {
      // vis-time: 0、6、12、18 的时间刻度 (同步 vis-donut)
      data: [
        { x: '0:00', y: 1 },
        { x: '6:00', y: 1 },
        { x: '12:00', y: 1 },
        { x: '18:00', y: 1 },
      ],
      region: {
        start: { x: 0.125, y: 0.125 },
        end: { x: 0.875, y: 0.875 },
      },
      coordinate: {
        type: 'polar',
        cfg: { radius: 1 },
      },
      geometries: [
        {
          type: 'interval',
          xField: 'x',
          yField: 'y',
          label: {
            autoRotate: false,
            fields: ['x'],
            callback: (x: string) => {
              const cfg: any = {
                style: {
                  fill: theme.textColor,
                  fontSize: 10,
                  fontFamily: FONT_FAMILY,
                },
                content: x,
                offset: 4,
                labelLine: { style: { stroke: theme.textColor, lineWidth: 1 } },
              };

              if (x === '0:00') {
                cfg.style.textBaseline = 'bottom';
              }
              if (x === '6:00') {
                cfg.style.textAlign = 'left';
                cfg.offsetX = 4;
              }
              if (x === '12:00') {
                cfg.style.textBaseline = 'top';
                cfg.offsetY = 4;
              }
              if (x === '18:00') {
                cfg.style.textAlign = 'right';
                cfg.offsetX = -4;
              }
              return cfg;
            },
          },
          // adjust: 'stack',
          mapping: { color: 'transparent', style: { fill: 'transparent' } },
        },
      ],
    },
    {
      // vis-annotation-of-"Music" (同步 vis-line)
      data: [
        { x: 'Music', y: 2 },
        { x: ' ', y: 4 },
        { x: ' ', y: 2 },
        { x: ' ', y: 1 },
      ],
      region: {
        start: { x: 0.125, y: 0.125 },
        end: { x: 0.875, y: 0.875 },
      },
      coordinate: {
        type: 'theta',
        cfg: {
          radius: 0.625 / 0.75,
        },
      },
      geometries: [
        {
          type: 'interval',
          xField: '1',
          yField: 'y',
          colorField: 'x',
          label: {
            autoRotate: false,
            style: {
              fill: theme.textColor,
              fontSize: 18,
              fontFamily: FONT_FAMILY,
            },
            layout: { type: 'pie-spider' },
            fields: ['x', 'y'],
            callback: (x: string) => {
              const cfg: any = {};
              if (x === 'Music') {
                cfg.offset = 60;
                cfg.offsetX = -24;
                cfg.offsetY = -9 /** fontSize * 0.5 */;
              }
              return {
                ...cfg,
                style: {
                  fill: x !== ' ' ? theme.textColor : 'transparent',
                },
                labelLine:
                  x === 'Music'
                    ? {
                        style: {
                          lineWidth: 0.8,
                          stroke: 'rgba(0,0,0,0.15)',
                        },
                      }
                    : false,
              };
            },
          },
          adjust: 'stack',
          mapping: { color: 'transparent', style: { fill: 'transparent' } },
        },
      ],
    },
    {
      // 内光圈-2，半径 108px = 372px * 0.29 (最里边的圆形⭕️光圈)
      data: [{ value: 1 }],
      coordinate: { type: 'theta', cfg: { radius: 0.29 } },
      geometries: [
        {
          type: 'interval',
          yField: 'value',
          mapping: {
            // TODO 模拟高斯模糊
            // radial-gradient(48% 94%, #FFFFFF 48%, rgba(255,255,255,0.18) 94%);
            color: () => {
              if (favoriteIDE === 'vim' && themeMode === 'dark') {
                // DONE 🎉
                return `r(0.5,0.5,0.94) 0:rgba(255,255,255, 1) 0.85:rgba(255,255,255,0.04) 1:#002C37`;
              }
              // todo 其他编辑器
              return `r(0.5,0.5,0.94) 0:rgba(255,255,255, 1) 0.85:rgba(255,255,255,0.04) 1:#002C37`;
            },
            style: {
              fillOpacity: 0.48,
            },
          },
        },
      ],
    },
    {
      data: Framework.data,
      coordinate: {
        type: 'polar',
        cfg: {
          radius: 0.48 /** 比 0.46 大一点 */,
          startAngle: waterdropStartAngle,
          endAngle: waterdropEndAngle,
        },
      },
      axes: false,
      geometries: [
        {
          type: 'interval',
          xField: 'x',
          yField: 'y',
          colorField: 'x',
          mapping: {
            color: Framework.color,
            shape: 'waterdrop',
            size: () => {
              if (width280) {
                return 22;
              }
              return 35;
            },
            style: ({ x }: any) => {
              // 根据高亮设置
              const strokeMap: any = {
                React: 'rgba(15,114,139,0.31)',
                Angular: 'rgba(215,2,47,0.51)',
                Vue: 'rgba(52,71,90,0.42)',
                Bymyself: 'rgba(100,119,155,0.61)',
              };
              return {
                lineWidth:
                  favoriteFramework === lowerCase(x) ||
                  (favoriteFramework === '我自己写的' && x === 'Bymyself')
                    ? 1.2
                    : 0,
                stroke: strokeMap[x],
              };
            },
          },
        },
      ],
    },
  ];
};

type Props = {
  theme: {
    backgroundColor: string;
    textColor: string;
    /** 环图 */
    dailySchedule: {
      data: Array<{ x: string; y: number | string }>;
      color: string[];
      customStyle: {
        fontFill: string;
      };
      style: {
        stroke?: string;
        strokeWidth?: number;
      };
      annotations: Array<{ content: string; fontSize: number }>;
    };
  };
  /** 最喜欢的 ide */
  favoriteIDE: 'vim' | 'webstorm' | 'vscode' | 'atom';
  /** 最喜欢的前端框架 */
  favoriteFramework: string | 'react' | 'vue' | 'angular' | '我自己写';
  /** 工作效率 高效时间段 */
  efficientWorktime: 'morning' | 'afternoon' | 'dawn' | 'night' | 'midnight';
  /** 喜欢听的音乐 🎵 */
  music: 'classic' | 'metal' | 'electronic' | 'pop';
  themeMode: 'dark' | 'light';
  /**  */
  afterChartRender: () => void;
};

export const VisCanvas = forwardRef((props: Props, ref: any) => {
  const { theme } = props;

  /**
   * 同步 forward ref
   * @param source
   * @param target
   */
  function syncRef(source: any, target: any) {
    if (typeof target === 'function') {
      target(source.current);
    } else if (target) {
      target.current = source.current;
    }
  }

  const plotRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (plotRef.current) {
      plotRef.current.destroy();
    }

    const { Lab } = require('@antv/g2plot/dist/g2plot.min.js');
    require('./shapes/waterdrop');

    if (containerRef?.current) {
      const container = containerRef.current;
      const box = container.getBoundingClientRect();
      const canvasBox = document
        .querySelector(`.${styles.canvas}`)
        ?.getBoundingClientRect();

      const mvPlot = new Lab.MultiView(container, {
        height: box.height || canvasBox?.height, // 441 /* 372 + 40 */,
        autoFit: true,
        padding: 0,
        appendPadding: [40, 20, 20, 20],
        tooltip: false,
        views: getViews(props, box.height !== 0 ? box : canvasBox),
        syncViewPadding: true,
        theme: {
          background: theme.backgroundColor,
        },
      });

      mvPlot.render();
      // fix hack 下主题设置
      mvPlot.chart.views[0].theme({ roseWidthRatio: 1 });
      mvPlot.chart.render(true);
      plotRef.current = mvPlot;
      syncRef(plotRef, ref);
      // 触发 afterRender 操作
      props.afterChartRender();
    }
  }, [containerRef, props]);

  return (
    <div className={styles.canvas}>
      <div ref={containerRef} />
    </div>
  );
});
