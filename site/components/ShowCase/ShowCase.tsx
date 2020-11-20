// 场景案例模版
import React, { useState } from 'react';
import { Layout as AntLayout, Anchor, Affix, BackTop, Menu } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { groupBy } from 'lodash-es';
import Article from '@antv/gatsby-theme-antv/site/components/Article';
//@ts-ignore
import styles from '@antv/gatsby-theme-antv/site/templates/markdown.module.less';

export default () => {
  const demos = [
    {
      type: 'p1',
      title: '图标1',
      href: 'https://www.baidu.com',
      screenshot: '',
    },
    {
      type: 'p1',
      title: '图标2',
      href: 'https://www.baidu.com1',
      screenshot: '',
    },
    {
      type: 'p2',
      title: '图标3',
      href: 'https://www.baidu.com2',
      screenshot: '',
    },
  ];
  const allDemo = groupBy(demos || [], (demo) => demo.type);

  const galleryPageContent = (
    <div className={styles.gallery}>
      <div className={styles.galleryContent}>
        {Object.keys(allDemo).map((type: string, i) => (
          <div key={i}>
            <h2 id={`category-${type.replace(/\s/g, '')}`}>{type}</h2>
            <ul className={styles.galleryList}>
              {allDemo[type].map((demo) => {
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
                      <h4>{demo.title}</h4>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
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
