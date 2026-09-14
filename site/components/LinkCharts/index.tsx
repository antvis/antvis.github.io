import classNames from 'classnames';
import { useTranslation } from 'site/lib/i18n';
import { useCallback, useEffect, useRef, useState } from 'react';
import CHARTS_DATAS from '../../data/link-charts.json';
import { transformUrl } from '../../lib/urls';
import { OverflowedText, ModuleTitle as Title } from '../common';

import styles from './index.module.less';

// 丰富图表，选用自如
export function LinkCharts() {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  const [position, setPosition] = useState('center');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(CHARTS_DATAS);


  const { locale: language, t: useT } = useTranslation();

  // 滑动
  const onClick = useCallback(
    (position: 'left' | 'right') => {
      if (loading) return;
      setPosition(position);
      setLoading(true);
      const length = data.length;
      timer.current = setTimeout(() => {
        setData((data) => {
          return position === 'left'
            ? [...data.slice(length - 3), ...data.slice(0, length - 3)]
            : [...data.slice(3), ...data.slice(0, 3)];
        });
        setPosition('center');
        setLoading(false);
      }, 1000);
    },
    [loading, data.length],
  );

  return (
    <div className={styles.linkCharts}>
      <Title
        title={useT('丰富图表，选用自如')}
        subTitle={useT(
          '柱形图、饼图、关系图、地图、多维表格等260+丰富图表随心选用',
        )}
      />
      <div className={styles.charts}>
        <div
          className={classNames(styles.box, {
            [styles.left]: position === 'left',
            [styles.right]: position === 'right',
            [styles.center]: position === 'center',
          })}
          style={{ width: data.length * 409 + 'px' }}
        >
          {data.map((data) => {
            return (
              <a
                key={data.link}
                className={styles.chart}
                href={transformUrl({
                  url: data.link,
                  language,
                })}
                target="_blank"
              >
                <div className={styles.title}>{useT(data.title)}</div>
                <div className={styles.subTitle}>
                  <OverflowedText text={useT(data.subTitle)} maxWidth={341} />
                </div>
                <div className={styles.antv} style={{ background: data.color }}>
                  {data.antv}
                </div>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${data.image})` }}
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          disabled={loading}
          aria-label={language === 'zh' ? '上一组图表' : 'Previous charts'}
          className={styles.left}
          onClick={() => onClick('left')}
        >
          <img
            alt="left_icon"
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Q4WbQ5DCXEAAAAAAAAAAAAAADmJ7AQ/original"
          />
        </button>
        <button
          type="button"
          disabled={loading}
          aria-label={language === 'zh' ? '下一组图表' : 'Next charts'}
          className={styles.right}
          onClick={() => onClick('right')}
        >
          <img
            alt="right_icon"
            src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Q4WbQ5DCXEAAAAAAAAAAAAAADmJ7AQ/original"
          />
        </button>
      </div>
    </div>
  );
}
