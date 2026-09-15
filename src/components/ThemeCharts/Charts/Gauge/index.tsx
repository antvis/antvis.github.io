import { Gauge } from '@antv/g2plot';
import { useTranslation } from '../../../../lib/i18n';
import get from 'lodash/get.js';
import React, { useEffect, useRef } from 'react';

type GaugeProps = {
  theme?: any;
};

// 仪表盘
export function GaugeChart(props: GaugeProps) {
  const { theme = {} } = props;
  const { value, sequential } = theme;
  const colors10 = get(sequential, ['colors', '0'], []);
  const isDark = value === 'dark';

  const { t: useT } = useTranslation();

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
            offsetY: -80,
            customHtml: () => {
              return `
                <div>
                  <img alt="icon" style="width: 36px; height: 36px;margin-bottom: 12px;" src="${
                    isDark
                      ? 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*hINPQYnKaIAAAAAAAAAAAAAADmJ7AQ/original'
                      : 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*BjKVTp2kKSQAAAAAAAAAAAAADmJ7AQ/original'
                  }" />
                  <div style="font-size: 12px;color: ${
                    isDark ? 'rgba(255,255,255,0.65)' : '#424E66'
                  };" >${useT('用户总量')}</div>
                  <div style="font-size: 32px;color: ${
                    isDark ? '#fff' : '#1D2129'
                  }; line-height: 45px;font-family: Alibaba PuHuiTi 2.0;" >1,320</div>
                </div>
              `;
            },
          },
        },
      };

      if (!plotRef.current) {
        plotRef.current = new Gauge(containerRef.current, {
          percent: 0,
          appendPadding: [0, 0, 10, 0],
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

  useEffect(
    () => () => {
      plotRef.current?.destroy();
      plotRef.current = null;
    },
    [],
  );

  return (
    <div className="h-full w-full [&>div]:h-full [&>div]:w-full">
      <div ref={containerRef} />
    </div>
  );
}
