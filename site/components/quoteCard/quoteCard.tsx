import React from 'react';
import { Avatar } from 'antd';
import styles from './quoteCard.module.less';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const leftpad =
  'https://gw.alipayobjects.com/zos/basement_prod/50fbdc16-bac3-4ecd-8210-f4ed2c116fdb.svg';
const rightpad =
  'https://gw.alipayobjects.com/zos/basement_prod/194a96ef-be8c-4e51-85e1-69b34aa2a697.svg';

interface Props {
  cardContent: {
    avatar: string | undefined;
    quote: string;
    from: string;
    name: string;
    index: number;
    nameEn: string;
    fromEn: string;
    quoteEn: string;
  };
  hasBorder: boolean;
}

const QuoteCard = (props: Props) => {
  const { t } = useTranslation();
  const borderSlicer: Array<object> = [];
  if (props.hasBorder) {
    borderSlicer.push(
      <div key={1} className={classNames(styles.border, styles.lborder)} />,
    );
    borderSlicer.push(
      <div key={2} className={classNames(styles.border, styles.rborder)} />,
    );
  }
  return (
    <div className={styles.card}>
      {borderSlicer}
      <div className={styles.content}>
        <Avatar src={props.cardContent.avatar} className={styles.avatar} />
        <p className={styles.name}>
          {t(props.cardContent.name)}
          {/* {props.lang === 'en'
            ? props.cardContent.nameEn
            : props.cardContent.name} */}
        </p>
        <p className={styles.from}>
          {t(props.cardContent.from)}
          {/* {props.lang === 'en'
            ? props.cardContent.fromEn
            : props.cardContent.from} */}
        </p>
        <div className={styles.qslicer} />
        <div className={styles.quoteWrapper}>
          <img
            className={classNames(styles.pad, styles.leftpad)}
            src={leftpad}
            alt="leftpad"
          />
          <p className={styles.quote}>
            {t(props.cardContent.quote)}
            {/* {props.lang === 'en'
              ? props.cardContent.quoteEn
              : props.cardContent.quote} */}
          </p>
          <img
            className={classNames(styles.pad, styles.rightpad)}
            src={rightpad}
            alt="rightpad"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
