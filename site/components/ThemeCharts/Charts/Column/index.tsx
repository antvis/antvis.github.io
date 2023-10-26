import React, { useEffect, useRef } from 'react';
import { Column } from '@antv/g2plot';

import styles from '../index.module.less';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (!plotRef.current) {
        plotRef.current = new Column(containerRef.current, {
          data: DATA,
          isGroup: true,
          xField: 'x',
          yField: 'y',
          seriesField: 'type',
          // 分组柱状图 组内柱子间的间距 (像素级别)
          dodgePadding: 2,
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
