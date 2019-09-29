import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './search.module.less';

export default () => {
  const { t } = useTranslation();
  return <input className={styles.input} placeholder={t('搜索…')} />;
};
