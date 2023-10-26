import React from 'react';
import { useIntl } from 'dumi';
import { ModuleTitle as Title } from '../common';
import FAMOUS_PERSONS_DATAS from '../../data/famous-persons.json';

import styles from './index.module.less';

export function FamousPersons() {
  const intl = useIntl()
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  return (
    <div className={styles.famousPersons}>
      <Title title={useT("专家之声")} subTitle={useT("经历了海量数据场景下的严苛考验，蚂蚁集团自研了数据库、云原生、隐私计算、图计算为代表的数字化“根技术”")} />
      <div className={styles.famousAuctions} >
        {
          FAMOUS_PERSONS_DATAS.map((data) => {
            const filter = `drop-shadow(${data.color} 80px 0)`;
            return <div className={styles.famousAuction}>
              <div className={styles.image}>
                <img src={data.image} />
                <img
                  src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*XGF5T7Atc7kAAAAAAAAAAAAADmJ7AQ/original'
                  className={styles.icon}
                  style={{ filter }}
                />
              </div>
              <div className={styles.name}>{useT(data.name)}</div>
              <div className={styles.text}>{useT(data.text)}</div>
              <div className={styles.msg}>{useT(data.msg)}</div>
            </div>
          })
        }
      </div>
    </div>
  );
}
