import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './advantageCard.module.less';

interface Props {
  cardContent: {
    index: number;
    icon: string;
    title: string;
    description: string;
  };
}

const AdvantageCard = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img
          className={styles.icon}
          src={props.cardContent.icon}
          alt="advantage"
        />
        <p className={styles.title}>{t(props.cardContent.title)}</p>
        <p className={styles.description}>{t(props.cardContent.description)}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
