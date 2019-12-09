import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Feedback.module.less';

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div key="content">
          <p key="title" className={styles.title}>
            {t('问题与反馈')}
          </p>
          <div key="slicer" className={styles.slicer} />
          <div key="description1" className={styles.description}>
            {t('任何问题，欢迎到我们的仓库提交相关的 issues。')}
          </div>
          <a href="https://github.com/antvis" className={styles.join}>
            <button className={styles.more}>{t('立即反馈')}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
