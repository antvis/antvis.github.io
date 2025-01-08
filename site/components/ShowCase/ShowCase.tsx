// 场景案例模版
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Article from '@antv/dumi-theme-antv/dist/slots/Article';
import { Layout as AntLayout, BackTop } from 'antd';
import { useLocale } from 'dumi';
import React, { useEffect, useState } from 'react';

import styles from '@antv/dumi-theme-antv/dist/slots/ManualContent/index.module.less';

interface ShowCaseProps {
  type: string;
  title: string;
  href: string;
  link: string;
  screenshot: string;
}

export default () => {
  const locale = useLocale();
  const lang = locale.id.includes('zh') ? 'zh' : 'en';
  const showCaseUrl = `https://assets.antv.antgroup.com/antv/show-cases-${lang}.json`;

  const [demos, setDemos] = useState<ShowCaseProps[]>([]);

  useEffect(() => {
    fetch(showCaseUrl)
      .then((res) => res.json())
      .then((data) => {
        // 根据设计，目前只取最新的两条
        setDemos(data);
      });
  }, [demos]);

  const galleryPageContent = (
    <div className={styles.gallery}>
      <div className={styles.galleryContent}>
        <h2></h2>
        <ul className={styles.galleryList}>
          {demos.map((demo) => {
            return (
              <li
                className={styles.galleryCard}
                key={demo.href + demo.title}
                title={demo.title}
              >
                <a
                  className={styles.galleryCardLink}
                  href={demo.href}
                  target="_blank"
                >
                  <div
                    style={{
                      height: `180px`,
                    }}
                  >
                    <img
                      src={
                        demo.screenshot ||
                        'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/screenshot-placeholder-b8e70.png'
                      }
                      alt={demo.title}
                    />
                  </div>
                  <h4
                    style={{
                      display: `inline-block`,
                    }}
                  >
                    {demo.title}
                  </h4>
                  <span
                    style={{
                      position: `absolute`,
                      display: `inline-block`,
                      marginLeft: `16px`,
                      bottom: `6px`,
                      right: `0px`,
                    }}
                  >
                    {demo.type}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <AntLayout
        style={{ background: '#fff' }}
        hasSider
        className={styles.layout}
      >
        <Article className={styles.markdown}>
          <div className={styles.main} style={{ width: '100%' }}>
            {galleryPageContent}
            <BackTop style={{ right: 32 }}>
              <div className={styles.backTop}>
                <VerticalAlignTopOutlined />
              </div>
            </BackTop>
          </div>
        </Article>
      </AntLayout>
    </>
  );
};
