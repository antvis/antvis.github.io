import React, { useEffect, useRef } from 'react';
import { Gauge } from '@antv/g2plot';

import styles from '../index.module.less';

type GaugeProps = {
  theme?: any;
}

export function GaugeChart(props: GaugeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (!plotRef.current) {
        plotRef.current = new Gauge(containerRef.current, {
          percent: 0,
          gaugeStyle: {
            stroke: '#fff',
            lineWidth: 2,
          },
          range: {
            ticks: [0, 1 / 3, 3 / 5, 4 / 5, 1],
            color: ['#F4664A', '#FAAD14', '#30BF78', '#000'],
          },
          startAngle: -Math.PI,
          endAngle: 0,
          indicator: false,
          statistic: {
            content: {
              offsetY: -30,
              customHtml: () => {
                return `
                  <div>
                    <div style="font-size: 12px;color: #424E66;" >用户总量</div>
                    <div style="font-size: 32px;color: #1D2129; line-height: 45px;" >1,320</div>
                  </div>
                `;
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
