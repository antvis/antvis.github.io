import React from 'react';
import classNames from 'classnames';
import styles from './notification.module.less';
import { useTranslation } from 'react-i18next';

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
    date: string;
  };
}

const Notification = (props: Props) => {
  const { t } = useTranslation();
  const { numImg, type, title, date } = props.notificationContent;
  let description = `${t(type)} ‧ ${t(title)}`;
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
