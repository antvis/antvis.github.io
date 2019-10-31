import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './productsPage.less';

interface States {
  products: Array<product>;
}
interface product {
  index: number;
  title: string;
  description: string;
  demoLink: string;
  APILink: string;
  imgSrc: string;
}

class ProductsPage extends React.Component<{}, States> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      products: [
        {
          index: 0,
          title: 'G2 可视化图形语法',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc:
            'https://gw.alipayobjects.com/zos/basement_prod/7f43cecb-994f-4b88-bbd0-4bb8fa50fca1.svg',
        },
        {
          index: 1,
          title: 'G6 图可视化引擎',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc:
            'https://gw.alipayobjects.com/zos/basement_prod/2033777d-5758-4d53-97a7-0983bc08d273.svg',
        },
        {
          index: 2,
          title: 'F2 移动端可视化方案',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc:
            'https://gw.alipayobjects.com/zos/basement_prod/08d94964-f1cd-41c0-b176-0f692e38b156.svg',
        },

        {
          index: 3,
          title: 'L7 地理空间数据可视化',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ImVhTaHfFVwAAAAAAAAAAABkARQnAQ',
        },
        {
          index: 4,
          title: 'G2plot',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc:
            'https://gw.alipayobjects.com/zos/basement_prod/b775f81c-6080-4fe7-81c1-4a771daa721a.svg',
        },
        {
          index: 5,
          title: 'Graphin',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc:
            'https://gw.alipayobjects.com/zos/basement_prod/44717864-9a86-45f2-adda-022119e9d9e7.svg',
        },
        {
          index: 6,
          title: 'ChartCube',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc:
            'https://gw.alipayobjects.com/zos/basement_prod/dbc7970d-3c1b-4245-9e8f-60703593a95d.svg',
        },
      ],
    };
  }

  getProcucts(beginIndex: number, length: number) {
    let children: Array<Object> = [];
    const products = this.state.products;
    const windowWidth = window.innerWidth;
    for (let i = beginIndex; i < beginIndex + length; i++) {
      const product = products[i];
      children.push(
        <Col key={i} className="gutter-row" md={1} sm={1} xs={1}>
          <div className="product" key="product">
            <p key="product-title" className="product-title">
              {product.title}
            </p>
            <p key="product-description" className="product-description">
              {product.description}
            </p>
            <div className="product-bottom-container" key="product-bottom">
              <div className="links-container">
                <a className="product-link" href={product.demoLink}>
                  图表实例
                </a>
                <a className="product-link api-link" href={product.APILink}>
                  API 文档
                </a>
              </div>
              <img
                key="product"
                className="product-img"
                src={product.imgSrc}
                alt={`${product.index}`}
              />
            </div>
          </div>
        </Col>,
      );
    }
    return children;
  }

  getDots() {
    let dots: Array<Object> = [];
    const length = this.state.products.length;
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
            className={`product-dot product-large-screen-dot`}
            style={{ marginLeft: left, marginTop: top }}
          ></div>,
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
            className="product-dot product-small-screen-dot"
            style={{ marginLeft: sLeftColLeft, marginTop: top }}
          ></div>,
        );
        dots.push(
          <div
            key={`dot-${i}-1-1-small`}
            className="product-dot product-small-screen-dot"
            style={{ marginLeft: sRigthColLeft, marginTop: top }}
          ></div>,
        );
        sStartTop *= 2;
      }
      top = `${sStartTop + sCardHeight * i - sCircleRadius}px`;
      dots.push(
        <div
          key={`dot-${i}-0-small`}
          className="product-dot product-small-screen-dot"
          style={{ marginLeft: sLeftColLeft, marginTop: top }}
        ></div>,
      );
      dots.push(
        <div
          key={`dot-${i}-1-small`}
          className="product-dot product-small-screen-dot"
          style={{ marginLeft: sRigthColLeft, marginTop: top }}
        ></div>,
      );
    }

    return dots;
  }

  render() {
    return (
      <div className="products-page-container subpage-container">
        <div className="background-lefttop">
          <div className="block1 lefttop-block"></div>
          <div className="block2 lefttop-block"></div>
        </div>
        <div
          className="subpage-content-container"
          id="products-subpage-content-container"
        >
          <p
            className="product-page-title subpage-title"
            id="product-page-title"
          >
            我们的产品
          </p>
          <div className="background-rightbottom">
            <div className="slicer-bar slicer-bar-h slicer-bar-h1"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h2"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h3"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h4"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h5"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h6"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h7"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h8"></div>
            <div className="slicer-bar slicer-bar-h slicer-bar-h9"></div>
            <div className="slicer-bar slicer-bar-v slicer-bar-v1"></div>
            <div className="slicer-bar slicer-bar-v slicer-bar-v2"></div>
            <div className="slicer-bar slicer-bar-v slicer-bar-v3"></div>
            {this.getDots()}
            <div className="products-sub-title-container basic-sub-title">
              <div className="sub-title-bar"></div>
              <div className="sub-title">基础产品</div>
            </div>
            <div className="products-sub-title-container extension-sub-title">
              <div className="sub-title-bar"></div>
              <div className="sub-title">扩展产品</div>
            </div>
            <div className="products-container">
              <div className="sub-container basic-products-container">
                <Row key="products-basic" className="products-basic">
                  {this.getProcucts(0, 4)}
                </Row>
              </div>
              <div className="sub-container extension-products-container">
                <Row key="products-extension" className="products-extension">
                  {this.getProcucts(4, 3)}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsPage;
