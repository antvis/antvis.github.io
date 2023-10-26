import React, { useEffect, useRef } from 'react';
import { Pie } from '@antv/g2plot';

import styles from '../index.module.less';

type PieProps = {
  theme?: any;
};

const DATA = [
  { type: 'PD: 1600', value: 1600 },
  { type: 'FE: 1000', value: 1000 },
  { type: 'UX: 400', value: 600 },
];

export function PieChart(props: PieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (!plotRef.current) {
        plotRef.current = new Pie(containerRef.current, {
          data: DATA,
          angleField: 'value',
          colorField: 'type',
          innerRadius: 0.8,
          label: false,
          appendPadding: 10,
          statistic: {
            title: {
              offsetY: -10,
              content: '用户总量',
              style: {
                fontSize: '10px',
              },
            },
            content: {
              offsetY: -2,
              content: '3,200',
              style: {
                fontSize: '20px',
              },
            },
          },
          legend: {
            position: 'bottom',
          },
          // 添加 中心统计文本 交互
          interactions: [
            { type: 'element-selected' },
            { type: 'element-active' },
            {
              type: 'pie-statistic-active',
              cfg: {
                start: [
                  { trigger: 'element:mouseenter', action: 'pie-statistic:change' },
                  { trigger: 'legend-item:mouseenter', action: 'pie-statistic:change' },
                ],
                end: [
                  { trigger: 'element:mouseleave', action: 'pie-statistic:reset' },
                  { trigger: 'legend-item:mouseleave', action: 'pie-statistic:reset' },
                ],
              },
            },
          ],
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
