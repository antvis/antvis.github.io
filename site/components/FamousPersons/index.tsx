import React from 'react';
import classNames from 'classnames';
import { useIntl, useLocale } from 'dumi';
import { ModuleTitle as Title, OverflowedText } from '../common';
import FAMOUS_PERSONS_DATAS from '../../data/famous-persons.json';

import styles from './index.module.less';

// 专家之声
export function FamousPersons() {
  const locale = useLocale();

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  const intl = useIntl();
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage,
    });
  };

  return (
    <div className={classNames(styles.famousPersons,{
      [styles.en]: language === 'en',
    }) }>
      <Title title={useT("专家之声")} subTitle={useT("经历了海量数据场景下的严苛考验，蚂蚁集团自研了数据库、云原生、隐私计算、图计算为代表的数字化“根技术”")} />
      <div className={styles.famousAuctions} >
        {
          FAMOUS_PERSONS_DATAS.map((data) => {
            const filter = `drop-shadow(${data.color} 80px 0)`;
            return <div className={styles.famousAuction}>
              <div className={styles.image}>
                <img src={data.image} alt='image' />
                <img
                  src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*XGF5T7Atc7kAAAAAAAAAAAAADmJ7AQ/original'
                  className={styles.icon}
                  style={{ filter }}
                  alt='icon'
                />
              </div>
              <div className={styles.name}>{useT(data.name)}</div>
              <div className={styles.text}>
                <OverflowedText text={useT(data.text)} maxHeight={56} maxWidth={237} style={{ fontSize: 14, lineHeight: 1.9 }}  />
                </div>
              <div className={styles.hr} />
              <div className={styles.msg}>
                <OverflowedText text={useT(data.msg)} maxHeight={143} maxWidth={237} style={{ fontSize: 14, lineHeight: 1.9 }}  />
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
}
