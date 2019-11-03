import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './resourceCard.module.less';

interface Props {
  cardContent: {
    icon: string;
    title: string;
    description: string;
    // titleEn: string;
    // descriptionEn: string;
    index: number;
    link: string;
  };
}

const ResourceCard = (props: Props) => {
  const { t } = useTranslation();
  let detailLinkStr = '查看详情';
  // if (props.lang === 'en') {
  //   detailLinkStr = 'Details';
  // }
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          className={styles.icon}
          src={props.cardContent.icon}
          alt="resource"
        />
        <p className={styles.title}>
          {t(props.cardContent.title)}
          {/* {props.lang === 'en'
            ? props.cardContent.titleEn
            : props.cardContent.title} */}
        </p>
        <p className={styles.description}>
          {t(props.cardContent.description)}
          {/* {props.lang === 'en'
            ? props.cardContent.descriptionEn
            : props.cardContent.description} */}
        </p>
        <a className={styles.detail} href={props.cardContent.link}>
          {t(detailLinkStr)}
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
