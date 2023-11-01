import classNames from 'classnames';
import React, { useState } from 'react';
import { useLocale, useIntl } from 'dumi';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { transformUrl } from '../Products/getProducts';

import styles from './index.module.less';

const COMPLEX_DATAS = [
  {
    text: '3D大图',
    video: 'https://mass-office.alipay.com/huamei_koqzbu/afts/file/IgDSQ5xe5X0AAAAAAAAAABAADnV5AQBr',
    link: 'https://g6-next.antv.antgroup.com/examples/feature/features#webgl3d',
    message: '3D 可视化图',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*RFK7R4TWuWQAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*NYQ-SLUYDpMAAAAAAAAAAAAADmJ7AQ/original',
  },
  {
    text: '超强性能',
    message: '渲染器运行时切换',
    video: 'https://mass-office.alipay.com/huamei_koqzbu/afts/file/7EDaQJcdqCEAAAAAAAAAABAADnV5AQBr',
    link: 'https://g6-next.antv.antgroup.com/zh/examples/feature/features/#rendererSwitch',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*EZ7OTLICg8MAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*2_soSbk9R-gAAAAAAAAAAAAADmJ7AQ/original',
  },
  {
    text: '叙事动画',
    message: '数据摘要3',
    video: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_dJSQ63PzJEAAAAAAAAAAAAADmJ7AQ/original',
    link: '',
    img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*yrlSTZeONjUAAAAAAAAAAAAADmJ7AQ/original',
    activeImg: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*HG6pSovStWgAAAAAAAAAAAAADmJ7AQ/original',
  },
];

export function ComplexCharts() {
  
  const locale = useLocale();
  const [isChinaMirrorHost] = useChinaMirrorHost();

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  const intl = useIntl()
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
      <div className={styles.content}>
        <div className={styles.message}>{select.message}</div>
        <a
          className={styles.chart}
          href={transformUrl({ url: select.link, language, isChinaMirrorHost })}
          target='_black'
        >
          <video
            muted={true}
            src={select.video}
            autoPlay
            loop
            style={{ objectFit: 'fill' }}
          />
        </a>
      </div>
    </div>
  );
}
