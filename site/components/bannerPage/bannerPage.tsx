import React from 'react';
import Notification from '../notification/notification';
import styles from './bannerPage.module.less';
import { useTranslation } from 'react-i18next';

const holderimg =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*z0P2QpIbsS4AAAAAAAAAAABkARQnAQ';

const notifications = [
  {
    numImg:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ViOPRKPsVzoAAAAAAAAAAABkARQnAQ',
    type: '更新',
    title: 'L7 发布新版本，让地图动起来！',
    typeEn: 'Update',
    titleEn: 'L7 has published the new viewsion!',
    date: '2019.12.04',
  },
  {
    numImg:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NFADS6PF0DYAAAAAAAAAAABkARQnAQ',
    type: '推荐',
    title: 'Kitchen 3.75 ，效率大幅提升！',
    typeEn: 'Recommand',
    titleEn: 'Kitchen 3.75, lift your efficient!',
    date: '2019.12.03',
  },
];

const BannerPage = () => {
  const { t } = useTranslation();
  let title = '让数据栩栩如生';
  let description =
    'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。';
  let more = '继续了解';
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{t(title)}</div>
          <p className={styles.description}>{t(description)}</p>

          <div className={styles.teaser}>
            <img
              className={styles.teaserimg}
              src={holderimg}
              alt="astronaut"
              height="200"
            />
          </div>

          <a href="#__products" className={styles.amore}>
            <button className={styles.more}>{t(more)}</button>
          </a>
        </div>
        <div className={styles.notifications}>
          <Notification
            className={styles.noti0}
            notificationContent={notifications[0]}
          />
          <Notification
            className={styles.noti1}
            notificationContent={notifications[1]}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
