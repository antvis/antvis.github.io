import { useIntl, useLocale } from 'dumi';
import React, { useEffect, useState } from 'react';
import { ANCHORNAME } from '../ProjectCard';
import { getBaseSiteDataUrl } from '@antv/dumi-theme-antv/dist/utils/env';

import styles from './Banner.module.less';
import { HomeDialog } from '@antv/dumi-theme-antv/dist/components/AI/HomeDialog';

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
    fetch(`${getBaseSiteDataUrl()}/antv/banner-messages.json`)
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
            {useT('·让AGI栩栩如生')}
          </div>
          <div className={styles.subTitle}>
            {useT(
              '蚂蚁企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力',
            )}
          </div>
        </div>
        <HomeDialog className={styles.top}
                    promptTextareaStyle={{margin: "0 auto", width: "40vw", minWidth: "300px"}}
                    recommendCaseClassName={styles.listContainer}
                    style={{margin: "270px auto", width: "unset"}}/>
        <div className={styles.bottom}>
          {message.map(({ title, subTitle, img, link }) => {
            return (
              <a
                className={styles.message}
                key={`${link}_${title[language]}_${subTitle[language]}`}
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
