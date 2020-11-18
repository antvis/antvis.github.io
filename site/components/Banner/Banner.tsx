import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Banner.module.less';
import { useTranslation } from 'react-i18next';
import { getProducts } from '@antv/gatsby-theme-antv/site/components/getProducts';
import Demos from '../Demos/Demos';
import bannerInfo from '../../data/banner-info.json';

interface NotificationProps {
  index?: number;
  type: string;
  title: string;
  date: string;
  link: string;
}

export default () => {
  const { t, i18n } = useTranslation();
  const products = getProducts({
    t,
    language: i18n.language,
    rootDomain: '',
  });

  const lang = i18n.language.includes('zh') ? 'zh' : 'en';
  const notificationsUrl = `https://my-json-server.typicode.com/antvis/antvis-sites-data/notifications?lang=${lang}`;

  const [remoteNews, setRemoteNews] = useState<NotificationProps>();

  useEffect(() => {
    fetch(notificationsUrl)
      .then((res) => res.json())
      .then((data) => {
        // 根据设计，目前只取最新的一条，两条放不下
        setRemoteNews(data[0]);
      });
  }, [notificationsUrl]);

  const { about, products_tabs, extra_tabs } = bannerInfo;
  const [active, setActive] = useState(0);

  return (
    <div className={styles.banner}>
      <video
        className={styles.bgVideo}
        src="https://gw.alipayobjects.com/mdn/rms_a8a5bf/afts/file/A*mnpLT77ldiIAAAAAAAAAAAAAARQnAQ"
        autoPlay
        loop
        muted
      />
      <div className={styles.header}>
        <div className={styles.top}>
          <div className={styles.mainTitle}>{t('让数据栩栩如生')}</div>
          <div className={styles.subTitle}>
            {t('蚂蚁集团全新一代数据可视化解决方案')}
          </div>
        </div>

        <div className={styles.backgound} />
        <div className={styles.extraTabs}>
          {extra_tabs.map((item: { url: string; name: string }) => (
            <a href={item.url} key={item.name} target="_blank">
              <div>{item.name}</div>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.productList}>
          <div
            className={classNames(
              styles.productItem,
              active === 0 ? styles.productItemActive : null,
            )}
            key={0}
            onMouseEnter={() => setActive(0)}
          >
            {about.name}
          </div>
          {products_tabs.map((item: any, key: number) => {
            const index = key + 1;
            return (
              <div
                className={classNames(
                  styles.productItem,
                  active === index ? styles.productItemActive : null,
                )}
                key={index}
                onMouseEnter={() => setActive(index)}
              >
                {item.name}
              </div>
            );
          })}
        </div>

        <div className={styles.introduce}>
          <div
            className={styles.introduceDetail}
            style={{ display: active === 0 ? '' : 'none' }}
          >
            <div className={styles.guide}>
              <div className={styles.name}>{t(about.title)}</div>
              <div className={styles.info}>{t(about.info)}</div>
              <div className={styles.urlList}>
                <a href={`${i18n.language}/about`}>
                  <div className={styles.home} />
                  <div className={styles.text}>{t('关于我们')}</div>
                </a>
              </div>
              {remoteNews && (
                <div className={styles.news}>
                  <div className={styles.newsTitle}>
                    {t('最新资讯')} ｜ {remoteNews.type}
                  </div>
                  <div className={styles.time}>{remoteNews.date}</div>
                  <div className={styles.urlList}>
                    <a href={remoteNews.link} target="_blank">
                      <div className={styles.promo}>{remoteNews.title}</div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.productShow} id="productShow">
              <div className={styles.bgCover} />
              <a href={`${i18n.language}${about.banner_url}`}>
                <img
                  className={styles.banner}
                  src={about.banner_img}
                  alt="AntV Structure"
                />
              </a>
            </div>
          </div>

          {products_tabs.map((item: any, key: number) => {
            const index = key + 1;
            return (
              <div
                className={styles.introduceDetail}
                style={{ display: active === index ? '' : 'none' }}
                key={item.name}
              >
                <div className={styles.guide}>
                  {item.products.map((record: string) => {
                    const product = products.find(
                      (element: any) => element.title === record,
                    );
                    if (product)
                      return (
                        <div className={styles.guideItem} key={record}>
                          <div className={styles.name}>{product.title}</div>
                          <div className={styles.info}>
                            {product.description}
                          </div>
                          {product?.links && product?.links.length > 0 && (
                            <div className={styles.urlList}>
                              <a href={product.links[0].url} target="_blank">
                                <div className={styles.home} />
                                <div className={styles.text}>
                                  {product.links[0].title}
                                </div>
                              </a>
                              <a href={product.links[1].url} target="_blank">
                                <div className={styles.example} />
                                <div className={styles.text}>
                                  {product.links[1].title}
                                </div>
                              </a>
                              <a href={product.links[3].url} target="_blank">
                                <div className={styles.api} />
                                <div className={styles.text}>
                                  {product.links[3].title}
                                </div>
                              </a>
                            </div>
                          )}
                        </div>
                      );
                  })}
                </div>
                <div className={styles.productShow}>
                  <div className={styles.bgCover} />
                  {item.banner_url ? (
                    <a
                      href={`${item.banner_url}/${i18n.language}`}
                      target="_blank"
                    >
                      <img
                        className={styles.banner}
                        src={item.banner_img}
                        alt={item.title}
                      />
                    </a>
                  ) : (
                    <Demos list={item.demos} active={active} />
                    // <DemoTwo />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
