import React from 'react';
import Notification from '../notification/notification';
import styles from './bannerPage.module.less';

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

interface Props {
  lang: string;
}

const BannerPage = (props: Props) => {
  let title = '让数据栩栩如生';
  let description =
    'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单';
  let subDescription = '方便、专业可靠、无限可能的数据可视化最佳实践。';
  let more = '继续了解';
  if (props.lang === 'en') {
    title = 'Make the Data Vivid';
    description =
      'AntV is a new generation of data visualization solution of Ant Financial.';
    subDescription =
      'We provide a best practice of data visualization with simplicity and convenience, profession and reliability, and infinite possibilities.';
    more = 'More';
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <p className={styles.description}>
            {description}
            <br />
            {subDescription}
          </p>

          <div className={styles.teaser}>
            <img
              className={styles.teaserimg}
              src={holderimg}
              alt="astronaut"
              height="200"
            />
          </div>

          <a href="#__products" className={styles.amore}>
            <button className={styles.more}>{more}</button>
          </a>
        </div>
        <div className={styles.notifications}>
          <Notification
            className={styles.noti0}
            notificationContent={notifications[0]}
            lang={props.lang}
          />
          <Notification
            className={styles.noti1}
            notificationContent={notifications[1]}
            lang={props.lang}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
