import { useIntl, useLocale } from 'dumi';
import React, { useEffect, useState } from 'react';
import { ActiveIcon } from '../common';
import { ANCHORNAME } from '../ProjectCard';

import styles from './Banner.module.less';

export default () => {
  const [message, setMessage] = useState([]);
  const locale = useLocale();

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  const intl = useIntl();
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage,
    });
  };

  useEffect(() => {
    fetch('https://site-data-pre.alipay.com/antv/banner-messages.json')
      .then((res) => res.json())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  // 跳转到 丰富图表，选用自如
  const scrollToAnchor = () => {
    const anchorElement = document.getElementById(ANCHORNAME);
    if (anchorElement) {
      anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.leftBackground}>
        <img
          className={styles.waffle}
          src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*9jnzSaebJHsAAAAAAAAAAAAADmJ7AQ/original"
          alt="waffle"
        />
        <img
          className={styles.bug}
          src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*JwKAR5SZ7V4AAAAAAAAAAAAADmJ7AQ/original"
          alt="bug"
        />
      </div>
      <div className={styles.rightBackground}>
        <img
          className={styles.chips}
          src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ZJscTJdtQqgAAAAAAAAAAAAADmJ7AQ/original"
          alt="chips"
        />
        <img
          className={styles.cookie}
          src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Qua4RZ6djCcAAAAAAAAAAAAADmJ7AQ/original"
          alt="cookie"
        />
      </div>
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.mainTitle}>
            <span>AntV</span>
            {useT('·让数据栩栩如生')}
          </div>
          <div className={styles.subTitle}>
            {useT(
              '蚂蚁企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力',
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.start} onClick={scrollToAnchor}>
            <div className={styles.startIcon} />
            {useT('开始使用')}
          </div>
          <ActiveIcon
            href="/specification/principles/basic"
            className={styles.design}
            img="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_xFsQbWE_AYAAAAAAAAAAAAADmJ7AQ/original"
            activeImg="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*A9VnTpferioAAAAAAAAAAAAADmJ7AQ/original"
            text={useT('设计语言')}
          />
        </div>
        <div className={styles.bottom}>
          {message.map(({ title, subTitle, img, link }) => {
            return (
              <a
                className={styles.message}
                key={title}
                target="_blank"
                href={link}
              >
                <div className={styles.messageTitle}>
                  <img src={img} alt="message_title" /> {title[language]}
                </div>
                <div className={styles.messageSubTitle}>
                  {subTitle[language]}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.test} />
    </div>
  );
};
