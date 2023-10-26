import React from 'react';
import { useLocale, useIntl } from 'dumi';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { ActiveIcon } from '../common';
import { ANCHORNAME } from '../ProjectCard';
import {  transformUrl } from '../Products/getProducts';

import styles from './Banner.module.less';

const MESSAGES = [
  {
    title: '外滩大会·开源盛世',
    sunTitle: '9月30日黄浦江畔开源大会资讯先睹为快',
  },
  {
    title: '编程老师冷笑话分享',
    sunTitle: '资深海龟程序员教你如何开会不冷场',
  },
  {
    title: 'AntV 芒种日 图新物',
    sunTitle: '资源直达：「隐私计算线上幕课」专辑',
  },
];

export default () => {
  const locale = useLocale()
  const [isChinaMirrorHost] = useChinaMirrorHost();

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  const intl = useIntl()
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  // 跳转
  const scrollToAnchor = () => {
    const anchorElement = document.getElementById(ANCHORNAME);
    if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'auto' }); }
  }

  return (
    <div className={styles.banner}>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.mainTitle}><span>AntV</span>{useT("·让数据栩栩如生")}</div>
          <div className={styles.subTitle}>{useT("让普通应用低成本享受 Serverless 体验，帮助企业降本增效！")}</div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.start} onClick={scrollToAnchor} >
            <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*lo_5RYdqKLsAAAAAAAAAAAAADmJ7AQ/original' />
            {useT("开始使用")}
          </div>
          <ActiveIcon
            href='specification'
            className={styles.design}
            img='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_xFsQbWE_AYAAAAAAAAAAAAADmJ7AQ/original'
            activeImg='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*A9VnTpferioAAAAAAAAAAAAADmJ7AQ/original'
            text={useT('设计语言')}
          />
        </div>
        <div className={styles.bottom}>
          {
            MESSAGES.map(({ title, sunTitle }) => {
              return (
                <div className={styles.message} key={title}>
                  <div className={styles.messageTitle}>{title}</div>
                  <div className={styles.messageSunTitle}>{sunTitle}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};
