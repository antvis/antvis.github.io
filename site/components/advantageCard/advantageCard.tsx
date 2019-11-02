import React from 'react';
import styles from './advantageCard.module.less';

interface Props {
  cardContent: {
    index: number;
    icon: string;
    title: string;
    description: string;
    titleEn: string;
    descriptionEn: string;
  };
  lang: string;
}

const AdvantageCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          className={styles.icon}
          src={props.cardContent.icon}
          alt="advantage"
        />
        <p className={styles.title}>
          {props.lang === 'en'
            ? props.cardContent.titleEn
            : props.cardContent.title}
        </p>
        <p className={styles.description}>
          {props.lang === 'en'
            ? props.cardContent.descriptionEn
            : props.cardContent.description}
        </p>
      </div>
    </div>
  );
};

export default AdvantageCard;
