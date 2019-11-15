import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { getProducts } from '@antv/gatsby-theme-antv/site/components/getProducts';
import styles from './productsPage.module.less';

const ProductsPage = () => {
  const { t, i18n } = useTranslation();
  const data = getProducts({
    t,
    language: i18n.language,
    rootDomain: '',
  }).slice(0, 7);

  const basicProducts = data.filter((item: any) => item.category === 'basic');
  const extensionProducts = data.filter(
    (item: any) => item.category === 'extension',
  );
  const getProductCols = (type: string) => {
    const renderData = type === 'basic' ? basicProducts : extensionProducts;
    const cols = [];
    renderData.forEach((product: any) => {
      cols.push(
        <Col key={product.title} className={styles.col} md={1} sm={1} xs={1}>
          <a href={product.links[0].url}>
            <div className={styles.product} key="product">
              <p key="product-title" className={styles.ptitle}>
                {`${product.title} ${product.slogan || ''}`}
              </p>
              <p key="product-description" className={styles.pdescription}>
                {t(product.description)}
              </p>
              <div key="product-bottom" className={styles.pbottom}>
                <div className={styles.plinks}>
                  <object>
                    <a
                      className={styles.plink}
                      href={
                        product.links[2]
                          ? product.links[1].url
                          : product.links[0].url
                      }
                    >
                      {product.links[2]
                        ? product.links[1].title
                        : product.links[0].title}
                    </a>
                  </object>
                  <object>
                    <a
                      className={classNames(styles.plink, styles.apilink)}
                      href={
                        product.links[2]
                          ? product.links[2].url
                          : product.links[1].url
                      }
                    >
                      {product.links[2]
                        ? product.links[2].title
                        : product.links[1].title}
                    </a>
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
      extensionProducts.length < basicProducts.length
    ) {
      cols.push(
        <Col
          key="imgholder"
          className={classNames(styles.imgHolderWrapper, styles.col)}
          md={1}
          sm={1}
          xs={1}
        >
          <img
            src="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*thsKRLuQCv0AAAAAAAAAAABkARQnAQ"
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
    let dots: Array<Object> = [];
    const length = data.length;
    const cols = 3;
    const rows = Math.ceil(length / 2) + 1;
    const lefts = [0.0398, 0.4983, 0.959];
    let startTop = 81;
    const circleRadius = 1.5;
    let cardHeight = 185;
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
    let sStartTop = 80;
    const sCardHeight = 210;
    const sCircleRadius = 1.5;
    const sLeftColLeft = `${smallStartLeftPercent * 100}%`;
    const sRigthColLeft = `${(smallStartLeftPercent + 0.893) * 100}%`;
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
        sStartTop *= 2;
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
    <div className={styles.wrapper}>
      <a id="products"></a>
      <div className={styles.lefttop}>
        <div className={styles.ltblock1} />
      </div>
      <div className={styles.rightbottom}></div>
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
      <div className={styles.content}>
        <p className={styles.title}>{t(titleStr)}</p>
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
          <div
            className={classNames(
              styles.subTitleContainer,
              styles.basicSubTitle,
            )}
          >
            <div className={styles.subTitleBar} />
            <div className={styles.subTitleText}>{t(subTitleStr1)}</div>
          </div>
          <div
            className={classNames(
              styles.subTitleContainer,
              styles.extensionSubTitle,
            )}
          >
            <div className={styles.subTitleBar} />
            <div className={styles.subTitleText}>{t(subTitleStr2)}</div>
          </div>
          <div className={styles.products}>
            <div className={styles.basicsWrapper}>
              <Row key="products-basic" className={styles.basics}>
                {getProductCols('basic')}
              </Row>
            </div>
            <div className={styles.extensionsWrapper}>
              <Row key="products-extension" className={styles.extensions}>
                {getProductCols('extension')}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
