import React, { useEffect, useRef, useMemo } from 'react';
import { Column } from '@antv/g2plot';

import styles from '../index.module.less';

export const DARK_THEME_CONFIG = {
  legend: {
    itemName: {
      style: {
        fill: '#fff',
      },
    },
    radio: false,
  },
  yAxis: {
    tickCount: 4,
    grid: {
      line: {
        style: {
          lineDash: [3, 4],
          stroke: '#fff',
          strokeOpacity: 0.2,
        },
      },
    },
    label: {
      style: {
        fill: '#fff',
        fillOpacity: 0.45,
      },
    },
  },
  xAxis: {
    line:{
      style: {
        stroke: '#A8B7C1',
      },
    },
    label: {
      style: {
        fill: '#fff',
        fillOpacity: 0.45,
      },
    },
  },
} as any;

export const LIGHT_THEME_CONFIG = {
  legend: {
    itemName: {
      style: {
        fill: '#424E66',
      },
    },
    radio: false,
  },
  yAxis: {
    tickCount: 4,
    grid: {
      line: {
        style: {
          lineDash: [3, 4],
          stroke: '#86909C',
          strokeOpacity: 0.2,
        },
      },
    },
    label: {
      style: {
        fill: '#86909C',
        fillOpacity: 0.45,
      },
    },
  },
  xAxis: {
    line:{
      style: {
        stroke: '#A4AEBA',
      },
    },
    label: {
      style: {
        fill: '#86909C',
        fillOpacity: 0.45,
      },
    },
  },
} as any;

type ColumnProps = {
  theme?: any;
};

const DATA = [
  {
    x: '10-13',
    y: 590,
    type: 'PD'
  },
  {
    x: '10-13',
    y: 500,
    type: 'FE'
  },
  {
    x: '10-13',
    y: 300,
    type: 'UX'
  },
  {
    x: '10-14',
    y: 220,
    type: 'PD'
  },
  {
    x: '10-14',
    y: 400,
    type: 'FE'
  },
  {
    x: '10-14',
    y: 580,
    type: 'UX'
  },
  {
    x: '10-15',
    y: 344,
    type: 'PD'
  },
  {
    x: '10-15',
    y: 133,
    type: 'FE'
  },
  {
    x: '10-15',
    y: 222,
    type: 'UX'
  },
  {
    x: '10-16',
    y: 455,
    type: 'PD'
  },
  {
    x: '10-16',
    y: 600,
    type: 'FE'
  },
  {
    x: '10-16',
    y: 120,
    type: 'UX'
  },
];

export function ColumnChart(props: ColumnProps) {
  const { theme = {} } = props;
  const { value, colors10 } = theme;
  const isDark = useMemo(() => value === 'dark', [value]);

  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      const themeConfig = {
        theme: {
          colors10,
        },
        ...(isDark ? DARK_THEME_CONFIG : LIGHT_THEME_CONFIG),
      };

      if (!plotRef.current) {
        plotRef.current = new Column(containerRef.current, {
          data: DATA,
          isGroup: true,
          xField: 'x',
          yField: 'y',
          seriesField: 'type',
          // 分组柱状图 组内柱子间的间距 (像素级别)
          dodgePadding: 2,
          columnStyle: {
            radius: [2, 2, 0, 0],
          },
          ...themeConfig
        });

        plotRef.current?.render();
      } else {
        plotRef.current.update(themeConfig);
      }
    }
  }, [containerRef, isDark, colors10]);

  return (
    <div className={styles.container}>
      <div ref={containerRef} />
    </div>
  )
}
