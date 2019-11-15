import React from 'react';
import Notification from '../notification/notification';
import styles from './bannerPage.module.less';
import { useTranslation } from 'react-i18next';

const notifications = [
  {
    numImg:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ViOPRKPsVzoAAAAAAAAAAABkARQnAQ',
    type: '更新',
    title: 'L7 发布新版本，让地图动起来！',
    date: '2019.12.04',
  },
  {
    numImg:
      'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NFADS6PF0DYAAAAAAAAAAABkARQnAQ',
    type: '推荐',
    title: 'Kitchen 3.75，效率大幅提升！',
    date: '2019.12.03',
  },
];

const backLeftBottom =
  'https://gw.alipayobjects.com/zos/basement_prod/441d5eaf-e623-47cd-b9b9-2a581d9ce1e3.svg';

interface Props {
  bannerSVG: JSX.Element;
}

const BannerPage = (props: Props) => {
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
            <div className={styles.teaserimg}>{props.bannerSVG}</div>
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
        <img
          className={styles.backLeftBottom}
          src={backLeftBottom}
          alt="back"
        />
      </div>
    </section>
  );
};

export default BannerPage;
