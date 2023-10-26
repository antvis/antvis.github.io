import React, { useEffect, useRef } from 'react';
import { Column } from '@antv/g2plot';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (!plotRef.current) {
        plotRef.current = new Column(containerRef.current, {
          data: DATA,
          isStack: true,
          xField: 'x',
          yField: 'y',
          seriesField: 'type',
          yAxis: {
            grid: {
              line: {
                style: {
                  lineDash: [3, 4],
                },
              },
            },
          },
        });

        plotRef.current?.render();
      } else {
        plotRef.current.update();
      }
    }
  }, [containerRef]);

  return (
    <div className={styles.container}>
      <div ref={containerRef} />
    </div>
  )
}
