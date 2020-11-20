// 场景案例模版
import React, { useState, useEffect } from 'react';
import { Layout as AntLayout, BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import Article from '@antv/gatsby-theme-antv/site/components/Article';
import { useTranslation } from 'react-i18next';
//@ts-ignore
import styles from '@antv/gatsby-theme-antv/site/templates/markdown.module.less';

interface ShowCaseProps {
  type: string;
  title: string;
  href: string;
  link: string;
  screenshot: string;
}

export default () => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language.includes('zh') ? 'zh' : 'en';
  const showCaseUrl = `https://my-json-server.typicode.com/antvis/antvis-sites-data/showCases?lang=${lang}`;

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
                key={demo.href}
                title={demo.title}
              >
                <a
                  className={styles.galleryCardLink}
                  href={demo.href}
                  target="_blank"
                >
                  <div>
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
