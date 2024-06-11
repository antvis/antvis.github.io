import classNames from 'classnames';
import React, { useState } from 'react';
import { useLocale, useIntl } from 'dumi';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { transformUrl } from '../Products/getProducts';
import COMPLEX_DATAS from '../../data/complex-charts.json';

import styles from './index.module.less';

// 性能飞跃，专业优雅
export function ComplexCharts() {
  const locale = useLocale();
  const [isChinaMirrorHost] = useChinaMirrorHost();

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  const intl = useIntl();
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  const [select, setSelect] = useState(COMPLEX_DATAS[0]);

  return (
    <div className={styles.complexCharts}>
      <div className={styles.title}>{useT("性能飞跃，专业优雅")}</div>
      <div className={styles.complexButtons}>
        {
          COMPLEX_DATAS.map((data) => {
            const isSelect = select.text === data.text;
            return <div
              className={classNames(styles.button, {
                [styles.isSelect]: isSelect,
              })}
              onClick={() => setSelect(data)}
            >
              <img src={isSelect ? data.activeImg : data.img} alt={data.text} /> {useT(data.text)}
            </div>
          })
        }
      </div>
      <a
        className={styles.content}
        href={transformUrl({ url: select.link, language, isChinaMirrorHost })}
        target='_black'
      >
        <video
          muted={true}
          src={select.video}
          autoPlay
          loop
          // @ts-ignore
          style={{ objectFit: select.objectFit || 'fill' }}
        />
      </a>
    </div>
  );
}
