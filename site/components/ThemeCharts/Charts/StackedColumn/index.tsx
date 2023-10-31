import { Column } from '@antv/g2plot';
import React, { useEffect, useRef, useMemo } from 'react';
import { DARK_THEME_CONFIG, LIGHT_THEME_CONFIG } from '../Column';

import styles from '../index.module.less';

type StackedColumnProps = {
  theme?: any;
};

const DATA = [
  {
    x: '10-13',
    y: 300,
    type: 'PD'
  },
  {
    x: '10-13',
    y: 100,
    type: 'FE'
  },
  {
    x: '10-13',
    y: 100,
    type: 'UX'
  },
  {
    x: '10-13',
    y: 100,
    type: 'UE'
  },
  {
    x: '10-14',
    y: 220,
    type: 'PD'
  },
  {
    x: '10-14',
    y: 80,
    type: 'FE'
  },
  {
    x: '10-14',
    y: 50,
    type: 'UX'
  },
  {
    x: '10-14',
    y: 250,
    type: 'UE'
  },
  {
    x: '10-15',
    y: 120,
    type: 'PD'
  },
  {
    x: '10-15',
    y: 180,
    type: 'FE'
  },
  {
    x: '10-15',
    y: 200,
    type: 'UX'
  },
  {
    x: '10-15',
    y: 100,
    type: 'UE'
  },
  {
    x: '10-16',
    y: 250,
    type: 'PD'
  },
  {
    x: '10-16',
    y: 50,
    type: 'FE'
  },
  {
    x: '10-16',
    y: 120,
    type: 'UX'
  },
  {
    x: '10-16',
    y: 180,
    type: 'UE'
  },
];

export function StackedColumnChart(props: StackedColumnProps) {
  const { theme } = props;
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
          isStack: true,
          xField: 'x',
          yField: 'y',
          seriesField: 'type',
          ...themeConfig,
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
