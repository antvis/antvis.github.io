import { Pie } from '@antv/g2plot';
import React, { useEffect, useRef, useMemo } from 'react';
import { DARK_THEME_CONFIG, LIGHT_THEME_CONFIG } from '../Column';

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
  const { theme = {} } = props;
  const { value, colors10 } = theme;
  const isDark = useMemo(() => value === 'dark', [value]);

  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      const themeConfig = {
        theme:{
          colors10,
        },
        legend: {
          ...(isDark ? DARK_THEME_CONFIG : LIGHT_THEME_CONFIG)['legend'],
          position: 'bottom',
        },
        statistic: {
          title: {
            offsetY: -10,
            content: '用户总量',
            style: {
              fontSize: '10px',
              color: isDark ? 'rgba(255,255,255,0.45)' : '#424E66',
            },
          },
          content: {
            offsetY: -2,
            content: '3,200',
            style: {
              fontFamily: 'PingFangSC',
              fontSize: '20px',
              color: isDark ? '#fff' : '#1D2129'
            },
          },
        },
      } as any;
      if (!plotRef.current) {
        plotRef.current = new Pie(containerRef.current, {
          data: DATA,
          angleField: 'value',
          colorField: 'type',
          innerRadius: 0.8,
          label: false,
          appendPadding: 10,
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
