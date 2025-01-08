import classNames from 'classnames';
import { useIntl, useLocale } from 'dumi';
import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import FAMOUS_PERSONS_DATAS from '../../data/famous-persons.json';
import { OverflowedText, ModuleTitle as Title } from '../common';

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

  const textRef = useRef<any>(null);
  const msgRef = useRef<any>(null);

  const [textSize, setTextSize] = useState({ maxWidth: 237, maxHeight: 53 });
  const [msgSize, setMsgSize] = useState({ maxWidth: 237, maxHeight: 143 });

  useEffect(() => {
    const changeSize = debounce(() => {
      if (textRef?.current) {
        setTextSize({
          maxWidth: textRef?.current.clientWidth,
          maxHeight: textRef?.current.clientHeight,
        });
      }
      if (msgRef?.current) {
        setMsgSize({
          maxWidth: msgRef?.current.clientWidth,
          maxHeight: msgRef?.current.clientHeight,
        });
      }
    }, 200);

    window.addEventListener('resize', changeSize);

    return () => {
      window.removeEventListener('resize', changeSize);
    };
  }, []);

  return (
    <div
      className={classNames(styles.famousPersons, {
        [styles.en]: language === 'en',
      })}
    >
      <Title
        title={useT('专家之声')}
        subTitle={useT('来自数据可视化专家的专业认可与推荐')}
      />
      <div className={styles.famousAuctions}>
        {FAMOUS_PERSONS_DATAS.map((data) => {
          const filter = `drop-shadow(${data.color} 80px 0)`;
          return (
            <div className={styles.famousAuction}>
              <div className={styles.image}>
                <img src={data.image} alt="image" />
                <img
                  src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*XGF5T7Atc7kAAAAAAAAAAAAADmJ7AQ/original"
                  className={styles.icon}
                  style={{ filter }}
                  alt="icon"
                />
              </div>
              <div className={styles.name}>{useT(data.name)}</div>
              <div className={styles.text} ref={textRef}>
                <OverflowedText
                  text={useT(data.text)}
                  {...textSize}
                  style={{ fontSize: 14, lineHeight: 2 }}
                />
              </div>
              <div className={styles.hr} />
              <div className={styles.msg} ref={msgRef}>
                <OverflowedText
                  text={useT(data.msg)}
                  {...msgSize}
                  style={{ fontSize: 14, lineHeight: 2 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
