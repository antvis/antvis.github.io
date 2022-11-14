import React, { useState } from 'react';
import classNames from 'classnames';
import { isEmpty } from 'lodash';
import styles from './Banner.module.less';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { getProducts, ProductType } from '../Products/getProducts';
import Demos from '../Demos/Demos';
import { getActualUrl, getBannerInfo, getBannerLink } from './helper';
import {useIntl, useLocale } from 'dumi';

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
  const locale = useLocale()
  const intl = useIntl()

  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    })
  }
  const [isChinaMirrorHost] = useChinaMirrorHost();
  const [products, setProducts] = React.useState<ProductType[]>([]);

  const { remoteNews } = props;

  const lang: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';
  React.useEffect(() => {
    getProducts({ language: lang, isChinaMirrorHost }).then((data) => {
      setProducts(data);
    });
  }, [lang, isChinaMirrorHost]);

  const { about, products_tabs, extra_tabs } = getBannerInfo(isChinaMirrorHost);
  const [active, setActive] = useState(0);
  const bannerLinks = getBannerLink(isChinaMirrorHost);

  const renderBannerNodes = (bannerList: any[]) => {
    return bannerList.map((item, index) => {
      const { title_zh, title_en, className, gridArea } = item;

      const url = getActualUrl(item.url, isChinaMirrorHost);

      return (
        <div
          className={classNames(styles.node, styles[`${className}Node`])}
          key={`${item.title_zh}${index}`}
          style={{ gridArea }}
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
          <div className={styles.mainTitle}>{useT('让数据栩栩如生')}</div>
          <div className={styles.subTitle}>
            {useT('蚂蚁集团全新一代数据可视化解决方案')}
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
              <div className={styles.name}>{useT(about.title)}</div>
              <div className={styles.info}>{useT(about.info)}{ }</div>
              <div className={styles.urlList}>
                <a href={`${locale.id}/about`}>
                  <div className={styles.home} />
                  <div className={styles.text}>{useT('关于我们')}</div>
                </a>
              </div>

              <div className={styles.news}>
                <div className={styles.newsTitle}>{useT('最新资讯')}</div>
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
                {renderBannerNodes(bannerLinks)}
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
                            {product.description || ''}
                          </div>
                          {!isEmpty(product.links) && (
                            <div className={styles.urlList}>
                              {product.links?.home && (
                                <a
                                  href={product.links.home?.url}
                                  target="_blank"
                                >
                                  <div className={styles.home} />
                                  <div className={styles.text}>
                                    {product.links.home.title ?? useT('产品首页')}
                                  </div>
                                </a>
                              )}
                              {product.links?.example && (
                                <a
                                  href={product.links?.example.url}
                                  target="_blank"
                                >
                                  <div className={styles.example} />
                                  <div className={styles.text}>
                                    {product.links.example.title ??
                                      useT('图表示例')}
                                  </div>
                                </a>
                              )}
                              {product.links?.api && (
                                <a
                                  href={product.links?.api.url}
                                  target="_blank"
                                >
                                  <div className={styles.api} />
                                  <div className={styles.text}>
                                    {product.links.api.title ?? useT('使用文档')}
                                  </div>
                                </a>
                              )}
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
                      href={`${item.banner_url}/${locale.id}`}
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
