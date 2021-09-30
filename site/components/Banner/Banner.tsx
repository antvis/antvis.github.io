import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './Banner.module.less';
import { useTranslation } from 'react-i18next';
import { getProducts } from '@antv/gatsby-theme-antv/site/components/getProducts';
import Demos from '../Demos/Demos';
import bannerInfo from '../../data/banner-info.json';
import bannerLink from '../../data/banner-link.json';

interface NotificationProps {
  index?: number;
  type: string;
  title: string;
  date: string;
  link: string;
}
interface BannerProps {
  remoteNews: NotificationProps[];
}

export default (props: BannerProps) => {
  const { t, i18n } = useTranslation();
  const products = getProducts({
    t,
    language: i18n.language,
    rootDomain: '',
  });

  const { remoteNews } = props;

  const lang = i18n.language.includes('zh') ? 'zh' : 'en';

  const { about, products_tabs, extra_tabs } = bannerInfo;
  const [active, setActive] = useState(0);

  const renderBannerNodes = (bannerList: any[]) => {
    return bannerList.map((item, index) => {
      const { url, title_zh, title_en, className, row, col } = item;
      return (
        <div
          className={styles.node}
          key={`${item.title_zh}${index}`}
          style={{ gridRow: `${row}`, gridColumn: `${col}` }}
        >
          {url ? (
            <a className={styles[className]} href={`${url}`} target="_blank">
              {lang === 'zh' ? title_zh : title_en}
            </a>
          ) : (
            <span className={styles[className]}>
              {lang === 'zh' ? title_zh : title_en}
            </span>
          )}
        </div>
      );
    });
  };

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

      {/* 用于百度搜索引擎爬虫获取作为快照图片，在页面上会被覆盖不影响其它内容 */}
      <h1 style={{ position: 'absolute' }}>
        <img
          width="121"
          height="75"
          src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*j-DwT4geW5kAAAAAAAAAAAAAARQnAQ"
          alt="antv"
        />
      </h1>

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

              <div className={styles.news}>
                <div className={styles.newsTitle}>{t('最新资讯')}</div>
                {remoteNews.map((item: any, index: number) => (
                  <div key={`${item.title}${index}`}>
                    <div className={styles.time}>{item.date}</div>
                    <div className={styles.urlList}>
                      <a href={item.link} target="_blank">
                        <div className={styles.promo}>{item.title}</div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.productShow} id="productShow">
              <div className={styles.bgCover} />
              <div className={styles.aboutLink}>
                {renderBannerNodes(bannerLink)}
              </div>
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
                    <Demos type={item.name} list={item.demos} active={active} />
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
