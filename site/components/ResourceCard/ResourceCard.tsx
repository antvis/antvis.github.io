import classNames from 'classnames';
import { useIntl } from 'dumi';
import React from 'react';
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
  const intl = useIntl();

  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage,
    });
  };
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
          {useT(detailLinkStr)}
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;
