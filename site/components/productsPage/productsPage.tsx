import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import templecompany from '../../images/logo-temple.png';
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
          imgSrc: templecompany,
        },
        {
          index: 1,
          title: 'G2plot',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc: templecompany,
        },
        {
          index: 2,
          title: 'G6 图可视化引擎',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc: templecompany,
        },
        {
          index: 3,
          title: 'Graphin',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc: templecompany,
        },
        {
          index: 4,
          title: 'F2 移动端可视化方案',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc: templecompany,
        },
        {
          index: 5,
          title: 'ChartCube',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc: templecompany,
        },
        {
          index: 6,
          title: 'L7 地理空间数据可视化',
          description: '以数据驱动，以数据驱动以数据驱动以数据驱动以数据驱动',
          demoLink: '#',
          APILink: '#',
          imgSrc: templecompany,
        },
      ],
    };
  }

  getProcucts() {
    let children: Array<Object> = [];
    const length = this.state.products.length;
    for (let i = 0; i < length; i++) {
      const product = this.state.products[i];
      children.push(
        <Col key={i} className="gutter-row" md={6} sm={8} xs={12}>
          <div className="cro_left_top"></div>
          <div className="cro_right_top"></div>
          <div className="cro_left_bottom"></div>
          <div className="cro_right_bottom"></div>
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
                width={150}
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

  render() {
    return (
      <div className="products-page-container subpage-container">
        <div className="background-lefttop">
          <div className="block1 lefttop-block"></div>
          <div className="block2 lefttop-block"></div>
        </div>
        <div className="subpage-content-container">
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
            <div className="slicer-bar slicer-bar-v slicer-bar-v1"></div>
            <div className="slicer-bar slicer-bar-v slicer-bar-v2"></div>
            <div className="slicer-bar slicer-bar-v slicer-bar-v3"></div>
            <div className="products-container">
              <Row key="products">{this.getProcucts()}</Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsPage;
