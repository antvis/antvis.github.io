import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { useIntl, useLocale } from 'dumi';
import React from 'react';
import { CATEGORIES, ProductType, getProducts } from './getProducts';
import styles from './Products.module.less';

const Products = () => {
  const locale = useLocale();
  const intl = useIntl();

  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage,
    });
  };
  const [isChinaMirrorHost] = useChinaMirrorHost();
  const [products, setProducts] = React.useState<ProductType[]>([]);

  const lang: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';
  React.useEffect(() => {
    getProducts({ language: lang, isChinaMirrorHost }).then((data) => {
      setProducts(data.slice(0, 10));
    });
  }, [lang, isChinaMirrorHost]);

  const filterProducts = (type: string) =>
    products.filter((item) => item.category === type);
  const getProductCols = (type: string) => {
    const renderData = filterProducts(type);
    const cols = [];
    renderData.forEach((product: any) => {
      cols.push(
        <Col key={product.title} className={styles.col} span={24}>
          <a href={product.links[Object.keys(product.links)[0]].url}>
            <div className={styles.product} key="product">
              <p key="product-title" className={styles.ptitle}>
                {`${product.title} ${product.slogan || ''}`}
              </p>
              <p key="product-description" className={styles.pdescription}>
                {product.description}
              </p>
              <div key="product-bottom" className={styles.pbottom}>
                <div className={styles.plinks}>
                  <object>
                    {product.links.home && (
                      <a className={styles.plink} href={product.links.home.url}>
                        {product.links.home.title
                          ? product.links.home.title
                          : useT('产品首页')}
                      </a>
                    )}
                  </object>
                  <object>
                    {product.links.example && (
                      <a
                        className={classNames(styles.plink, styles.apilink)}
                        href={product.links.example.url}
                      >
                        {product.links.example.title
                          ? product.links.example.title
                          : useT('图表示例')}
                      </a>
                    )}
                  </object>
                </div>
                <img
                  key="product"
                  className={styles.productimg}
                  src={product.icon}
                  alt={`${product.title}`}
                />
              </div>
            </div>
          </a>
        </Col>,
      );
    });
    if (
      type === 'extension' &&
      filterProducts('extension').length < filterProducts('basic').length
    ) {
      cols.push(
        <Col
          key="imgholder"
          className={classNames(styles.imgHolderWrapper, styles.col)}
          span={24}
        >
          <img
            src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*_trNQ5C2pHIAAAAAAAAAAABkARQnAQ"
            alt="holderback1"
            className={classNames(styles.imgHolder1, styles.imgHolder)}
          />
          <img
            src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*frvoQat_YsUAAAAAAAAAAABkARQnAQ"
            alt="holderback2"
            className={classNames(styles.imgHolder2, styles.imgHolder)}
          />
        </Col>,
      );
    }
    return cols;
  };

  const getDots = () => {
    let dots: Array<React.ReactNode> = [];
    const length = products.length;
    const cols = 3;
    const rows = Math.ceil(length / 2) + 1;
    const lefts = [0.0398, 0.4983, 0.9591];
    let startTop = 81;
    const circleRadius = 1.5;
    let cardHeight = 192;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const top = `${startTop + cardHeight * i - circleRadius}px`;
        const left = `${lefts[j] * 100}%`;
        dots.push(
          <div
            key={`dot-${i}-${j}`}
            className={classNames(styles.dot, styles.largeDot)}
            style={{ marginLeft: left, marginTop: top }}
          />,
        );
      }
    }

    // for medium screen
    cardHeight = 239.5;
    const mlefts = [0.0398, 0.4978, 0.958];
    const mtops = [79, 318, 558, 798, 1038];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const top = `${mtops[i]}px`;
        const left = `${mlefts[j] * 100}%`;
        dots.push(
          <div
            key={`dot-${i}-${j}-medium`}
            className={classNames(styles.dot, styles.mediumDot)}
            style={{ left: left, top: top }}
          />,
        );
      }
    }

    // for small screen
    const smallStartLeftPercent = 0.028;
    const srows = length + 1;
    let sStartTop = 79.5;
    const sCardHeight = 210;
    const sCircleRadius = 1.5;
    const sLeftColLeft = `${smallStartLeftPercent * 100}%`;
    const sRigthColLeft = `${(smallStartLeftPercent + 0.891) * 100}%`;
    for (let i = 0; i < srows; i++) {
      let top;
      if (i === Math.ceil(srows / 2)) {
        top = `${sStartTop + sCardHeight * i - sCircleRadius}px`;
        dots.push(
          <div
            key={`${i}-0`}
            className={classNames(styles.dot, styles.smallDot)}
            style={{ marginLeft: sLeftColLeft, marginTop: top }}
          />,
        );
        dots.push(
          <div
            key={`${i}-1`}
            className={classNames(styles.dot, styles.smallDot)}
            style={{ marginLeft: sRigthColLeft, marginTop: top }}
          />,
        );
        sStartTop = sStartTop * 2 + 0.5;
      }
      top = `${sStartTop + sCardHeight * i - sCircleRadius}px`;
      dots.push(
        <div
          key={`${i}-2`}
          className={classNames(styles.dot, styles.smallDot)}
          style={{ marginLeft: sLeftColLeft, marginTop: top }}
        />,
      );
      dots.push(
        <div
          key={`${i}-3`}
          className={classNames(styles.dot, styles.smallDot)}
          style={{ marginLeft: sRigthColLeft, marginTop: top }}
        />,
      );
    }

    return dots;
  };

  let titleStr = '我们的产品';
  let subTitleStr1 = '基础产品';
  let subTitleStr2 = '扩展产品';

  return (
    <div id="products" className={styles.wrapper}>
      <div className={styles.lefttop}>
        <div className={styles.ltblock1} />
      </div>
      <div className={styles.rightbottom} />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh1,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh2,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh3,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh4,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh5,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh6,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh7,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh8,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh9,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh10,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh11,
        )}
      />
      <div
        className={classNames(
          styles.slicerbar,
          styles.slicerbarh,
          styles.slicerbarh12,
        )}
      />
      <div className={styles.content}>
        <p className={styles.title}>{useT(titleStr)}</p>
        <div className={styles.productsContainer}>
          <div
            className={classNames(
              styles.slicerbar,
              styles.slicerbarv,
              styles.slicerbarv1,
            )}
          />
          <div
            className={classNames(
              styles.slicerbar,
              styles.slicerbarv,
              styles.slicerbarv2,
            )}
          />
          <div
            className={classNames(
              styles.slicerbar,
              styles.slicerbarv,
              styles.slicerbarv3,
            )}
          />
          {getDots()}
          {CATEGORIES.map(({ name }) => {
            return (
              <div
                className={classNames(
                  styles.subTitleContainer,
                  styles.basicSubTitle,
                )}
              >
                <div className={styles.subTitleBar} />
                <div className={styles.subTitleText}>{useT(name)}</div>
              </div>
            );
          })}
          <div className={styles.products}>
            {CATEGORIES.map(({ type }) => {
              return (
                <Row key="products-basic" className={styles.basics}>
                  {getProductCols(type)}
                </Row>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
