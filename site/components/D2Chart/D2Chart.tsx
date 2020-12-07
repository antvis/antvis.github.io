import React, {
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Lab } from '@antv/g2plot';
import * as _ from 'lodash';
// todo 暴露 MultiViewOptions
import { MultiViewOptions } from '@antv/g2plot/lib/plots/multi-view';
import { DataView } from '@antv/data-set';
import './shapes/waterdrop';
import styles from './D2Chart.module.less';

// 资源
const FONT_FAMILY = `"Avenir Next Condensed", "-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,
  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "Noto Color Emoji"`;

/** 前端框架的一些渲染配置：vis-waterdrop（4种💧，角度随机） */
const Framework = {
  data: [
    { x: 'React', y: 11 },
    { x: 'Other', y: 10 },
    { x: 'Vue', y: 8 },
    { x: 'Angular', y: 7 },
  ],
  color: ({ x }: any) => {
    const colorMap: any = {
      React: 'rgba(94,211,243,0.25)',
      Other: 'rgba(194,200,213,0.25)',
      Vuew: 'rgba(63,179,127,0.19)',
      Angular: 'rgba(215,2,47,0.25)',
    };
    return colorMap[x];
  },
  size: 35,
  style: ({ x }: any) => {
    // 根据高亮设置
    const strokeMap: any = {
      React: 'rgba(15,114,139,0.31)',
      Angular: 'rgba(215,2,47,0.51)',
      Vue: 'rgba(52,71,90,0.42)',
      Other: 'rgba(100,119,155,0.61)',
    };
    return { strokeWidth: 2, stroke: strokeMap[x] };
  },
};

type Props = {
  theme: {
    backgroundColor: string;
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
  /** 每个 view 对应的数据 */
  const [datas, setDatas] = useState({ column: [], line1: [] });

  useLayoutEffect(() => {
    const fetchRoseData = fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/35b18d39-d015-4504-8c2f-09ed82cd7368.csv' /* 凌晨 */,
    ).then((data) => data.text());
    const fetchLineData = fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/800b7c41-b82e-4e26-910f-6822754b37cd.json' /* 古典 */,
    ).then((data) => data.json());

    Promise.all([fetchRoseData, fetchLineData]).then(([data1, data2]) => {
      const dv1 = new DataView().source(data1, { type: 'csv' });
      const dv2 = new DataView().source(data2);
      setDatas({ column: dv1.rows, line1: dv2.rows });
    });
  }, []);

  const views = useMemo((): MultiViewOptions['views'] => {
    // todo 数据迁移至数据源外部处理
    const view0data: Array<{ x: string; y: number; type: string }> = [];
    datas.column.forEach((d: { x: string; y: number; type: string }) =>
      view0data.push({ ...d, y: Number(d.y) * 0.8 }),
    );
    const yMax = Math.max(...view0data.map((d) => d.y));

    return [
      {
        // 条形图
        // 处理数据，让数据超过内环的 0.6
        data: view0data.map((d) => ({
          ...d,
          y: d.y / yMax < 0.46 ? d.y + yMax * 0.46 * 0.6 : d.y,
        })),
        coordinate: {
          type: 'polar',
          cfg: { radius: 1, innerRadius: 0.46 /** 内环半径 */ },
        },
        axes: {
          x: false,
          y: { label: null, line: null, grid: null, min: 0 },
        },
        // todo 添加主题
        // theme: { roseWidthRatio: 0.4 },
        geometries: [
          {
            type: 'interval',
            xField: 'x',
            yField: 'y',
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
        // 外光圈  不能放在柱状图前，否则无法使用大小
        region: {
          start: { x: 0, y: 0 },
          end: { x: 1, y: 1 },
        },
        coordinate: { type: 'theta', cfg: { radius: 1, innerRadius: 0 } },
        data: [{ value: 1 }],
        geometries: [
          {
            type: 'interval',
            yField: 'value',
            mapping: {
              // color: 'r(0.5,0.5,1): 0:#fff 0.5:rgba(255,255,255,0.7) 1:rgba(255,255,255,0.4)',
              color: '#fff',
              style: { fillOpacity: 0.06 },
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
            radius: 0.751,
          },
        },
        geometries: [
          {
            type: 'interval',
            yField: 'value',
            mapping: {
              // todo 添加高斯模糊
              color:
                'r(0.5,0.5,1) 0:rgba(255,255,255,0.45) 1:rgba(255,255,255,0.05)',
              style: {
                shadowColor: 'rgba(255,255,255,0.45)',
                shadowBlur: 1000,
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
            startAngle: (-Math.PI * 23) / 48,
            endAngle: (Math.PI * 3) / 2 + (Math.PI * 1) / 48,
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
              callback: (x) => {
                const cfg: any = {
                  labelLine: false,
                  style: {
                    fontFamily: FONT_FAMILY,
                    fill: theme.dailySchedule.customStyle.fontFill,
                  },
                };
                if (x === _.get(theme.dailySchedule, ['data', 0, 'x'])) {
                  // todo 确定计算规则
                  cfg.offsetY = -72;
                  cfg.offsetX = -118;
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
            offsetY: theme.dailySchedule.annotations[0].fontSize / 9,
            style: {
              textAlign: 'center',
              textBaseline: 'middle',
              fontSize: theme.dailySchedule.annotations[0].fontSize,
              lineHeight: theme.dailySchedule.annotations[0].fontSize,
              fill: theme.dailySchedule.customStyle.fontFill,
              fontFamily: FONT_FAMILY,
            },
          },
          {
            type: 'text',
            position: ['0%', 0],
            offsetY: -40,
            offsetX: -20,
            content: 'daily\nschedule',
            style: {
              fill: theme.dailySchedule.customStyle.fontFill,
              fontSize: 25,
              textAlign: 'left',
              fontFamily: FONT_FAMILY,
            },
          },
          {
            type: 'text',
            position: ['100%', 0],
            offsetY: 20,
            offsetX: 0,
            content: 'music',
            style: {
              fill: theme.dailySchedule.customStyle.fontFill,
              fontSize: 25,
              textAlign: 'left',
              fontFamily: FONT_FAMILY,
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
        data: datas.line1,
        coordinate: {
          type: 'polar',
          cfg: {
            radius: 0.9,
            innerRadius: 0.625 / 0.75,
            startAngle: -Math.PI * 0.5 - Math.PI / 96,
            endAngle: Math.PI * 1.5 - Math.PI / 96,
          },
        },
        axes: false,
        geometries: [
          {
            type: 'line',
            xField: 'x',
            yField: 'y',
            colorField: 'type',
            mapping: {
              color: ['#6D5EFF', '#F5BE15'],
              style: { lineWidth: 0.8 },
            },
          },
        ],
      },
      {
        // 内光圈-1，半径 172px = 372px * 0.46
        data: [{ value: 1 }],
        coordinate: { type: 'theta', cfg: { radius: 0.46 } },
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
        // 内光圈-2，半径 108px = 372px * 0.29
        data: [{ value: 1 }],
        coordinate: { type: 'theta', cfg: { radius: 0.29 } },
        geometries: [
          {
            type: 'interval',
            yField: 'value',
            mapping: {
              // TODO 模拟高斯模糊
              color: `r(0.5,0.5,1) 0:rgb(255,255,255) 0.5:rgba(255,255,255,0.55) 0.67:rgba(255,255,255,0.37) 1:rgba(255,255,255,0.18)`,
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
            // TODO 用来控制随机角度
            startAngle: -Math.PI * 0.25,
            endAngle: Math.PI * 2,
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
              size: Framework.size,
              style: Framework.style,
            },
          },
        ],
      },
    ];
  }, [theme, datas]);

  useLayoutEffect(() => {
    if (plotRef.current) {
      plotRef.current.destroy();
    }
    if (containerRef?.current) {
      const container = containerRef.current;
      const mvPlot = new Lab.MultiView(container, {
        height: 441 /* 372 + 40 */,
        autoFit: true,
        padding: 0,
        appendPadding: [40, 20, 20, 20],
        tooltip: false,
        views,
        syncViewPadding: true,
        theme: {
          background: theme.backgroundColor,
        },
      });

      mvPlot.render();
      // todo hack 下主题设置
      mvPlot.chart.views[0].theme({ roseWidthRatio: 0.6 });
      mvPlot.chart.render(true);
      plotRef.current = mvPlot;
      syncRef(plotRef, ref);
    }
  }, [containerRef, views, theme]);

  return (
    <div className={styles.canvas}>
      <div ref={containerRef} />
    </div>
  );
});
