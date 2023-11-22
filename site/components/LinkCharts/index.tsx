import classNames from 'classnames';
import { useLocale, useIntl } from 'dumi';
import React, { useCallback, useState } from 'react';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { transformUrl } from '../Products/getProducts';
import { ModuleTitle as Title, OverflowedText } from '../common';
import CHARTS_DATAS from '../../data/link-charts.json';

import styles from './index.module.less';

// 丰富图表，选用自如
export function LinkCharts() {
  const [position, setPosition] = useState('center');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(CHARTS_DATAS);

  const locale = useLocale();
  const [isChinaMirrorHost] = useChinaMirrorHost();

  const intl = useIntl()
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  // 滑动
  const onClick = useCallback((position) => {
    if (loading) return;
    setPosition(position);
    setLoading(true);
    const length = data.length;
    setTimeout(() => {
      setData((data) => {
        return position === 'left' ?
          [...data.slice(length - 3), ...data.slice(0, length - 3)] :
          [...data.slice(3), ...data.slice(0, 3)];
      });
      setPosition('center');
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <div className={styles.linkCharts}>
      <Title title={useT('丰富图表，选用自如')} subTitle={useT('柱形图、饼图、关系图、地图、多维表格等260+丰富图表随心选用')} />
      <div className={styles.charts}>
        <div
          className={classNames(styles.box, {
            [styles.left]: position === 'left',
            [styles.right]: position === 'right',
            [styles.center]: position === 'center'
          })}
          style={{ width: data.length * 409 + 'px' }}
        >
          {
            data.map((data) => {
              return <a className={styles.chart} href={transformUrl({ url: data.link, language, isChinaMirrorHost })} target='_black' >
                <div className={styles.title}>{useT(data.title)}</div>
                <div className={styles.subTitle}>
                  <OverflowedText text={useT(data.subTitle)} maxWidth={341} />
                </div>
                <div className={styles.antv} style={{ background: data.color }} >{data.antv}</div>
                <div className={styles.image} style={{ backgroundImage: `url(${data.image})` }} />
              </a>
            })
          }
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.left} onClick={() => onClick('left')} ><img alt='left_icon' src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Q4WbQ5DCXEAAAAAAAAAAAAAADmJ7AQ/original' /></div>
        <div className={styles.right} onClick={() => onClick('right')}><img alt='right_icon' src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Q4WbQ5DCXEAAAAAAAAAAAAAADmJ7AQ/original' /></div>
      </div>
    </div>
  );
}
