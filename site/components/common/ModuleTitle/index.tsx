import React from 'react';

import styles from './index.module.less';

type ModuleTitleProps = {
  title: string;
  subTitle?: string;
}

export default function ModuleTitle(props: ModuleTitleProps) {
  const { title, subTitle } = props;
  return (
    <div className={styles.msg}>
      <div className={styles.title}>{title}</div>
      {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
    </div>
  )
}
