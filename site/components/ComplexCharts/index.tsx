import classNames from 'classnames';
import { useTranslation } from 'site/lib/i18n';
import { useState } from 'react';
import COMPLEX_DATAS from '../../data/complex-charts.json';
import { transformUrl } from '../../lib/urls';

import styles from './index.module.less';

// 性能飞跃，专业优雅
export function ComplexCharts() {

  const { locale: language, t: useT } = useTranslation();

  const [select, setSelect] = useState(COMPLEX_DATAS[0]);

  return (
    <div className={styles.complexCharts}>
      <h2 className={styles.title}>{useT('性能飞跃，专业优雅')}</h2>
      <div className={styles.complexButtons}>
        {COMPLEX_DATAS.map((data) => {
          const isSelect = select.text === data.text;
          return (
            <button
              key={data.text}
              type="button"
              aria-pressed={isSelect}
              className={classNames(styles.button, {
                [styles.isSelect]: isSelect,
              })}
              onClick={() => setSelect(data)}
            >
              <img src={isSelect ? data.activeImg : data.img} alt={data.text} />{' '}
              {useT(data.text)}
            </button>
          );
        })}
      </div>
      <a
        className={styles.content}
        href={transformUrl({ url: select.link, language })}
        target="_blank"
      >
        <video
          playsInline
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
