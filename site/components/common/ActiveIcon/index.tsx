import React from 'react';
import classNames from 'classnames';
import styles from './index.module.less';

type ActiveIconProps = {
  img: string;
  activeImg: string;
  className: string;
  text: string;
  href?: string;
  target?: string;
};

// 公共跳转按钮
export default function ActiveIcon(props: ActiveIconProps) {
  const { img, activeImg, className, text, href, target } = props;

  return (
    <a className={classNames(className, styles.activeIcon)} href={href} target={target} >
      <img className={styles.inactive} src={img} />
      <img className={styles.active} src={activeImg} />
      {text}
    </a>
  )
}
