import { Line } from '@antv/g2plot';
import React, { useEffect, useRef, useMemo } from 'react';
import { DARK_THEME_CONFIG, LIGHT_THEME_CONFIG } from '../Column';

import styles from '../index.module.less';

type LineProps = {
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
    x: '10-16',
    y: 455,
    type: 'PD'
  },
  {
    x: '10-16',
    y: 600,
    type: 'FE'
  },
];

export function LineChart(props: LineProps) {
  const { theme = {} } = props;
  const { value, categorical } = theme;
  const colors10 = categorical.colors;
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
        plotRef.current = new Line(containerRef.current, {
          data: DATA,
          xField: 'x',
          yField: 'y',
          seriesField: 'type',
          smooth: true,
          point: {},
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
