import React from 'react';
import classNames from 'classnames';
import styles from './notification.module.less';

interface Notification {
  className: string;
  numImg: string;
  type: string;
  title: string;
  typeEn: string;
  titleEn: string;
  date: string;
}
interface Props {
  className: string;
  notificationContent: {
    numImg: string;
    type: string;
    title: string;
    typeEn: string;
    titleEn: string;
    date: string;
  };
  lang: string;
}

const Notification = (props: Props) => {
  const {
    numImg,
    type,
    title,
    typeEn,
    titleEn,
    date,
  } = props.notificationContent;
  let description = `${type} ‧ ${title}`;
  if (props.lang === 'en') {
    description = `${typeEn} ‧ ${titleEn}`;
  }
  return (
    <div className={classNames(styles.notification, props.className)}>
      <div className={styles.container}>
        <img className={styles.number} src={numImg} alt="numberimg"></img>
        <div className={styles.content}>
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
