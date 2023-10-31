import React, { useEffect, useMemo, useRef } from 'react';
import { Gauge } from '@antv/g2plot';

import styles from '../index.module.less';

type GaugeProps = {
  theme?: any;
}

export function GaugeChart(props: GaugeProps) {
  const { theme } = props;
  const { value, colors10 } = theme;
  const isDark = useMemo(() => value === 'dark', [value]);

  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      const themeConfig = {
        range: {
          ticks: [0, 1 / 3, 3 / 5, 4 / 5, 1],
          color: colors10,
        },
        statistic: {
          content: {
            offsetY: -30,
            customHtml: () => {
              return `
                <div>
                  <div style="font-size: 12px;color: ${isDark ? 'rgba(255,255,255,0.65)' : '#424E66'};" >Total</div>
                  <div style="font-size: 32px;color: ${isDark ? '#fff' : '#1D2129'}; line-height: 45px;" >1,320</div>
                </div>
              `;
            },
          },
        },
      }

      if (!plotRef.current) {
        plotRef.current = new Gauge(containerRef.current, {
          percent: 0,
          startAngle: -Math.PI,
          endAngle: 0,
          indicator: false,
          animation: {},
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
