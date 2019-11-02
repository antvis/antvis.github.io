import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import styles from './productsPage.module.less';

const products = [
  {
    index: 0,
    title: 'G2 可视化图形语法',
    description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
    titleEn: `G2 - Grammar of Graphics for Visualization`,
    descriptionEn: 'Data driven, Data driven, Data driven, Data driven',
    demoLink: '#',
    APILink: '#',
    imgSrc:
      'https://gw.alipayobjects.com/zos/basement_prod/7f43cecb-994f-4b88-bbd0-4bb8fa50fca1.svg',
  },
  {
    index: 1,
    title: 'G6 图可视化引擎',
    description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
    titleEn: 'G6 - A Graph Visualization Engine',
    descriptionEn: 'Data driven, Data driven, Data driven, Data driven',
    demoLink: '#',
    APILink: '#',
    imgSrc:
      'https://gw.alipayobjects.com/zos/basement_prod/2033777d-5758-4d53-97a7-0983bc08d273.svg',
  },
  {
    index: 2,
    title: 'F2 移动端可视化方案',
    description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
    titleEn: 'F2 - A Visualization Solution for Mobile',
    descriptionEn: 'Data driven, Data driven, Data driven, Data driven',
    demoLink: '#',
    APILink: '#',
    imgSrc:
      'https://gw.alipayobjects.com/zos/basement_prod/08d94964-f1cd-41c0-b176-0f692e38b156.svg',
  },

  {
    index: 3,
    title: 'L7 地理空间数据可视化',
    description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
    titleEn: 'L7 - A Geospacial Data Visualization Engine',
    descriptionEn: 'Data driven, Data driven, Data driven, Data driven',
    demoLink: '#',
    APILink: '#',
    imgSrc:
      'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ImVhTaHfFVwAAAAAAAAAAABkARQnAQ',
  },
  {
    index: 4,
    title: 'G2plot',
    description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
    titleEn: 'G2plot',
    descriptionEn: 'Data driven, Data driven, Data driven, Data driven',
    demoLink: '#',
    APILink: '#',
    imgSrc:
      'https://gw.alipayobjects.com/zos/basement_prod/b775f81c-6080-4fe7-81c1-4a771daa721a.svg',
  },
  {
    index: 5,
    title: 'Graphin',
    description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
    titleEn: 'Graphin',
    descriptionEn: 'Data driven, Data driven, Data driven, Data driven',
    demoLink: '#',
    APILink: '#',
    imgSrc:
      'https://gw.alipayobjects.com/zos/basement_prod/44717864-9a86-45f2-adda-022119e9d9e7.svg',
  },
  {
    index: 6,
    title: 'ChartCube',
    description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
    titleEn: 'ChartCube',
    descriptionEn: 'Data driven, Data driven, Data driven, Data driven',
    demoLink: '#',
    APILink: '#',
    imgSrc:
      'https://gw.alipayobjects.com/zos/basement_prod/dbc7970d-3c1b-4245-9e8f-60703593a95d.svg',
  },
];
interface Props {
  lang: string;
}

const ProductsPage = (props: Props) => {
  const getProcucts = (beginIndex: number, length: number) => {
    let children: Array<Object> = [];
    let exampleLinkStr = '图表实例';
    let apiLinkStr = 'API 文档';
    if (props.lang === 'en') {
      exampleLinkStr = 'Examples';
      apiLinkStr = 'API Documents';
    }
    for (let i = beginIndex; i < beginIndex + length; i++) {
      const product = products[i];
      children.push(
        <Col key={i} className={styles.col} md={1} sm={1} xs={1}>
          <div className={styles.product} key="product">
            <p key="product-title" className={styles.ptitle}>
              {props.lang === 'en' ? product.titleEn : product.title}
            </p>
            <p key="product-description" className={styles.pdescription}>
              {props.lang === 'en'
                ? product.descriptionEn
                : product.description}
            </p>
            <div key="product-bottom" className={styles.pbottom}>
              <div className={styles.plinks}>
                <a className={styles.plink} href={product.demoLink}>
                  {exampleLinkStr}
                </a>
                <a
                  className={classNames(styles.plink, styles.apilink)}
                  href={product.APILink}
                >
                  {apiLinkStr}
                </a>
              </div>
              <img
                key="product"
                className={styles.productimg}
                src={product.imgSrc}
                alt={`${product.index}`}
              />
            </div>
          </div>
        </Col>,
      );
    }
    return children;
  };

  const getDots = () => {
    let dots: Array<Object> = [];
    const length = products.length;
    const cols = 3;
    const rows = Math.ceil(length / 2) + 1;
    const startLeftPercent = 0.079;
    let startTop = 80;
    const circleRadius = 1.5;
    const cardHeight = 185;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const top = `${startTop + cardHeight * i - circleRadius}px`;
        const left = `${(startLeftPercent + 0.4165 * j) * 100}%`;
        dots.push(
          <div
            key={`dot-${i}-${j}`}
            className={classNames(styles.dot, styles.largeDot)}
            style={{ marginLeft: left, marginTop: top }}
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
    const sRigthColLeft = `${(smallStartLeftPercent + 0.9) * 100}%`;
    for (let i = 0; i < srows; i++) {
      let top;
      if (i === srows / 2) {
        top = `${sStartTop + sCardHeight * i - sCircleRadius}px`;
        dots.push(
          <div
            key={`dot-${i}-0-0-small`}
            className={classNames(styles.dot, styles.smallDot)}
            style={{ marginLeft: sLeftColLeft, marginTop: top }}
          />,
        );
        dots.push(
          <div
            key={`dot-${i}-1-1-small`}
            className={classNames(styles.dot, styles.smallDot)}
            style={{ marginLeft: sRigthColLeft, marginTop: top }}
          />,
        );
        sStartTop *= 2;
      }
      top = `${sStartTop + sCardHeight * i - sCircleRadius}px`;
      dots.push(
        <div
          key={`dot-${i}-0-small`}
          className={classNames(styles.dot, styles.smallDot)}
          style={{ marginLeft: sLeftColLeft, marginTop: top }}
        />,
      );
      dots.push(
        <div
          key={`dot-${i}-1-small`}
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
  if (props.lang === 'en') {
    titleStr = 'Our Products';
    subTitleStr1 = 'Basic Products';
    subTitleStr2 = 'Extensions';
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.lefttop}>
        <div className={styles.ltblock1} />
        <div className={styles.ltblock2} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{titleStr}</p>
        <div className={styles.rightbottom}>
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
            <div className={styles.subTitleText}>{subTitleStr1}</div>
          </div>
          <div
            className={classNames(
              styles.subTitleContainer,
              styles.extensionSubTitle,
            )}
          >
            <div className={styles.subTitleBar} />
            <div className={styles.subTitleText}>{subTitleStr2}</div>
          </div>
          <div className={styles.products}>
            <div
              className={classNames(styles.subProducts, styles.basicsWrapper)}
            >
              <Row key="products-basic" className={styles.basics}>
                {getProcucts(0, 4)}
              </Row>
            </div>
            <div
              className={classNames(
                styles.subProducts,
                styles.extensionsWrapper,
              )}
            >
              <Row key="products-extension" className={styles.extensions}>
                {getProcucts(4, 3)}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;
