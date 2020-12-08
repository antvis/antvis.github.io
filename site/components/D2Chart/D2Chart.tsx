import React, { forwardRef, useLayoutEffect, useRef } from 'react';
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
const FONT_FAMILY = `Avenir, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`;

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
      React: 'rgba(94,211,243,0.45)',
      Bymyself: 'rgba(194,200,213,0.45)',
      Vue: 'rgba(63,179,127,0.49)',
      Angular: 'rgba(215,2,47,0.45)',
    };
    return colorMap[x];
  },
};

const DAILY_SCHEDULE_TEXT = 'Daily\nSchedule';
const MUSIC_TEXT = 'Music';

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
      MORNING_DAILY_SCHEDULE.forEach((d) => {
        worktimeData.push(
          { ...d, type: 'male' },
          { ...d, type: 'female', y: d.y * 0.8 },
        );
      });
      break;
    case 'afternoon':
      AFTERNOON_DAILY_SCHEDULE.forEach((d) => {
        worktimeData.push(
          { ...d, type: 'male' },
          { ...d, type: 'female', y: d.y * 0.8 },
        );
      });
      break;
    case 'dawn':
      DAWN_DAILY_SCHEDULE.forEach((d) => {
        worktimeData.push(
          { ...d, type: 'male' },
          { ...d, type: 'female', y: d.y * 0.8 },
        );
      });
      break;
    case 'night':
      NIGHT_DAILY_SCHEDULE.forEach((d) => {
        worktimeData.push(
          { ...d, type: 'male' },
          { ...d, type: 'female', y: d.y * 0.8 },
        );
      });
      break;
    case 'midnight':
      MIDNIGHT_DAILY_SCHEDULE.forEach((d) => {
        worktimeData.push(
          { ...d, type: 'male' },
          { ...d, type: 'female', y: d.y * 0.8 },
        );
      });
      break;
    default:
      NIGHT_DAILY_SCHEDULE.forEach((d) => {
        worktimeData.push(
          { ...d, type: 'male' },
          { ...d, type: 'female', y: d.y * 0.8 },
        );
      });
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
      break;
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
        // TODO 调试
        y: d.y / yMax < 0.46 ? d.y + yMax * 0.46 * 0.2 : d.y,
      })),
      coordinate: {
        type: 'polar',
        cfg: { radius: 1, innerRadius: 0.6 /** 内环半径 */ },
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
          meta: { x: { type: 'cat' }, y: { min: 0 } },
          colorField: 'type',
          mapping: {
            color: ['#5B8FF9', '#FE84B2'],
            style: { fillOpacity: 0.45 },
          },
          adjust: {
            type: 'dodge',
            marginRatio: 1,
          },
        },
      ],
    },
    {
      // 同步环图, 环图外的光圈
      data: [{ value: 1 }],
      coordinate: { type: 'theta', cfg: { radius: 0.6 } },
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
                  shadowBlur: 30,
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
        start: { x: 0.18, y: 0.18 },
        end: { x: 0.82, y: 0.82 },
      },
      data: theme.dailySchedule.data,
      coordinate: {
        type: 'theta',
        cfg: {
          startAngle: (-Math.PI * 5) / 12,
          endAngle: (Math.PI * 3) / 2 + (Math.PI * 1) / 12,
          radius: 1,
          innerRadius: 0.95,
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
                // todo 不生效
                autoRotate: true,
                labelEmit: true,
                style: {
                  fontFamily: FONT_FAMILY,
                  fill: theme.dailySchedule.customStyle.fontFill,
                  fillOpacity: 0.5,
                },
              };
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
            fontWeight: 700,
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
      // 同步环图(环图内圈 vis-donut)
      data: [{ value: 1 }],
      coordinate: { type: 'theta', cfg: { radius: 0.65 * 0.95 } },
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
          radius: 0.8,
          innerRadius: 0.4,
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
            color: [
              '#6D5EFF',
              '#F5BE15',
              '#5B8FF9',
              '#EE8CB7',
              '#60DCAB',
              '#76D4F9',
            ],
            style: ({ type }: any) => {
              const cfg: any = { lineWidth: 0.8, strokeOpacity: 0.3 };
              // 倒数第一条 0.3 透明度，倒数第二条 0.5 透明度, 依次 0.8, 0.9
              if (
                [
                  'Soprano',
                  'Alto',
                  'Drum',
                  'Lead_guitar',
                  'Amplifier_1',
                ].indexOf(type) !== -1
              ) {
                cfg.strokeOpacity = 1;
              }
              if (
                ['Drum', 'Electri_bass', 'Amplifier_2'].indexOf(type) !== -1
              ) {
                cfg.strokeOpacity = 0.9;
              }
              if (['Electri_bass', 'Keyboard'].indexOf(type) !== -1) {
                cfg.strokeOpacity = 0.8;
              }
              if (['Tenor', 'Keyboard', 'Amplifier'].indexOf(type) !== -1) {
                cfg.strokeOpacity = 0.5;
              }
              if (music === 'pop') {
                if (type === 'Keyboard') {
                  cfg.strokeOpacity = 0.5;
                }
                if (type === 'Drum') {
                  cfg.strokeOpacity = 0.3;
                }
              }
              return cfg;
            },
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
            color: [
              '#6D5EFF',
              '#F5BE15',
              '#5B8FF9',
              '#EE8CB7',
              '#60DCAB',
              '#76D4F9',
            ],
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
        start: { x: 0.145, y: 0.145 },
        end: { x: 0.855, y: 0.855 },
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
                  fontSize: 12,
                  fontFamily: FONT_FAMILY,
                },
                content: x,
                offset: 4,
                labelLine: {
                  style: {
                    stroke: theme.textColor,
                    strokeOpacity: 0.65,
                    lineWidth: 0.8,
                  },
                },
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
    // {
    //   // 内光圈-2，半径 108px = 372px * 0.29 (最里边的圆形⭕️光圈)
    //   data: [{ value: 1 }],
    //   coordinate: { type: 'theta', cfg: { radius: 0.29 } },
    //   geometries: [
    //     {
    //       type: 'interval',
    //       yField: 'value',
    //       mapping: {
    //         // TODO 模拟高斯模糊
    //         // radial-gradient(48% 94%, #FFFFFF 48%, rgba(255,255,255,0.18) 94%);
    //         color: () => {
    //           if (favoriteIDE === 'vim' && themeMode === 'dark') {
    //             // DONE 🎉
    //             return `r(0.5,0.5,0.94) 0:rgba(255,255,255, 1) 0.85:rgba(255,255,255,0.04) 1:#002C37`;
    //           }
    //           // todo 其他编辑器
    //           return `r(0.5,0.5,0.94) 0:rgba(255,255,255, 1) 0.85:rgba(255,255,255,0.04) 1:#002C37`;
    //         },
    //         style: {
    //           fillOpacity: 0.48,
    //         },
    //       },
    //     },
    //   ],
    // },
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
    {
      region: {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
      },
      data: [
        { x: '1', y: 38 },
        { x: '2', y: 33.7 },
        { x: '3', y: 25.8 },
        { x: '4', y: 31.7 },
        { x: '6', y: 33 },
        { x: '7', y: 46 },
        { x: '8', y: 38.3 },
        { x: '9', y: 28 },
        { x: '10', y: 42.5 },
        { x: '11', population: 42.5 },
        { x: '12', population: 42.5 },
        { x: DAILY_SCHEDULE_TEXT, y: 41.8 },
        { x: '13', population: 42.5 },
        { x: '14', population: 42.5 },
        { x: '15', population: 42.5 },
        { x: '17', y: 30.3 },
      ],
      coordinate: {
        type: 'polar',
        cfg: { radius: 1, innerRadius: 0.65 },
      },
      geometries: [
        {
          type: 'interval',
          xField: 'x',
          yField: '1',
          label: {
            fields: ['x'],
            callback: (x: string) => {
              return {
                autoRotate: false,
                content: [DAILY_SCHEDULE_TEXT].indexOf(x) !== -1 ? x : ' ',
                offset: 25,
                offsetX: -8,
                style: {
                  fill: theme.subTextColor,
                  fontSize: 12,
                  fontFamily: FONT_FAMILY,
                  fontWeight: 700,
                  textAlign: 'left',
                },
              };
            },
          },
          mapping: {
            color: 'transparent',
          },
        },
      ],
    },
    {
      region: {
        start: { x: 0.125, y: 0.125 },
        end: { x: 0.875, y: 0.875 },
      },
      data: [
        { x: '1', y: 38 },
        { x: '2', y: 33.7 },
        { x: '3', y: 25.8 },
        { x: MUSIC_TEXT, y: 30.7 },
        { x: '4', y: 31.7 },
        { x: '6', y: 33 },
        { x: '7', y: 46 },
        { x: '8', y: 38.3 },
        { x: '9', y: 28 },
        { x: '10', y: 42.5 },
        { x: '11', population: 42.5 },
        { x: '12', population: 42.5 },
        { x: '13', population: 42.5 },
        { x: '14', population: 42.5 },
        { x: '15', population: 42.5 },
        { x: '17', y: 30.3 },
      ],
      coordinate: {
        type: 'polar',
        cfg: { radius: 0.7, innerRadius: 0.65 },
      },
      geometries: [
        {
          type: 'interval',
          xField: 'x',
          yField: '1',
          label: {
            fields: ['x'],
            callback: (x: string) => {
              return {
                autoRotate: false,
                content: [MUSIC_TEXT].indexOf(x) !== -1 ? x : ' ',
                offset: 20,
                style: {
                  fill: theme.subTextColor,
                  fontSize: 12,
                  fontFamily: FONT_FAMILY,
                  fontWeight: 700,
                },
              };
            },
          },
          mapping: {
            color: 'transparent',
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
    subTextColor: string;
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
        appendPadding: [0, 0, 0, 0],
        tooltip: false,
        views: getViews(props, box.height !== 0 ? box : canvasBox),
        syncViewPadding: true,
        theme: {
          background: theme.backgroundColor,
        },
      });

      mvPlot.render();
      // fix hack 下主题设置
      mvPlot.chart.views[0].theme({ roseWidthRatio: 0.6 });
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
