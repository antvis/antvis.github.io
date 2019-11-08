import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './feedbackPage.module.less';

const FeedbackPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <QueueAnim type="bottom" key="content">
          <p key="title" className={styles.title}>
            {t('问题与反馈')}
          </p>
          <div key="slicer" className={styles.slicer} />
          <div key="description1" className={styles.description}>
            {t('任何问题，欢迎到我们的仓库提交相关的 issues。')}
          </div>
          <a href="#" className={styles.join}>
            <button className={styles.more}>{t('立即反馈')}</button>
          </a>
        </QueueAnim>
      </div>
    </div>
  );
};

export default FeedbackPage;
