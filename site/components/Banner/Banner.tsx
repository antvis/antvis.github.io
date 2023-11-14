import React, { useEffect, useState } from 'react';
import { useLocale, useIntl } from 'dumi';
import { ActiveIcon } from '../common';
import { ANCHORNAME } from '../ProjectCard';

import styles from './Banner.module.less';

export default () => {
  const [message, setMessage] = useState([]);
  const locale = useLocale();

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  const intl = useIntl()
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/antv/banner-messages.json')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  // 跳转到 丰富图表，选用自如
  const scrollToAnchor = () => {
    const anchorElement = document.getElementById(ANCHORNAME);
    if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'auto' }); }
  }

  return (
    <div className={styles.banner}>
      <div className={styles.leftBackground} />
      <div className={styles.rightBackground} />
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.mainTitle}><span>AntV</span>{useT("·让数据栩栩如生")}</div>
          <div className={styles.subTitle}>{useT("让普通应用低成本享受 Serverless 体验，帮助企业降本增效！")}</div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.start} onClick={scrollToAnchor} >
            <img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*lo_5RYdqKLsAAAAAAAAAAAAADmJ7AQ/original' alt='start' />
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
            message.map(({ title, subTitle, img }) => {
              return (
                <div className={styles.message} key={title}>
                  <div className={styles.messageTitle}><img src={img} alt='message_title' /> {title[language]}</div>
                  <div className={styles.messageSubTitle}>{subTitle[language]}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};
