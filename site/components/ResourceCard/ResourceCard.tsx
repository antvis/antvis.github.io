import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './ResourceCard.module.less';

interface Props {
  cardContent: {
    icon: string;
    title: string;
    description: string;
    index: number;
    link: string;
  };
}

const ResourceCard = (props: Props) => {
  const { t } = useTranslation();
  let detailLinkStr = '查看详情';
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          className={styles.icon}
          src={props.cardContent.icon}
          alt="resource"
        />
        <p className={styles.title}>{props.cardContent.title}</p>
        <p className={styles.description}>{props.cardContent.description}</p>
        <a
          className={classNames(styles.detail, 'detail')}
          href={props.cardContent.link}
          target="newtab"
        >
          {t(detailLinkStr)}
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
