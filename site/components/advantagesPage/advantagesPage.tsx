import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import AdvantageCard from '../advantageCard/advantageCard';
import './advantagesPage.less';
import { StringifyOptions } from 'querystring';

const templeicon =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*9f3LQZfdpfMAAAAAAAAAAABkARQnAQ';

interface States {
  // cardMargin: number;
  // cardWidth: number;
  // cardContainerMargin: number;
  cards: Array<Card>;
}
interface Card {
  index: number;
  icon: string;
  title: string;
  description: string;
}

class AdvantagesPage extends React.Component<{}, States> {
  constructor(props: Readonly<{}>) {
    super(props);
    const cards = [
      {
        index: 0,
        icon:
          'https://gw.alipayobjects.com/zos/basement_prod/5dbaf094-c064-4a0d-9968-76020b9f1510.svg',
        title: '简单方便',
        description: '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      },
      {
        index: 1,
        icon:
          'https://gw.alipayobjects.com/zos/basement_prod/0a0371ab-6bed-41ad-a99b-87a5044ba11b.svg',
        title: '方便可靠',
        description:
          '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
      },
      {
        index: 2,
        icon:
          'https://gw.alipayobjects.com/zos/basement_prod/716d0bc0-e311-4b28-b79f-afdd16e8148e.svg',
        title: '无限可能',
        description: '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
      },
    ];
    // const cardNumber = cards.length;
    // const cardMargin = 60;
    // const cardContainerMargin = 50;
    // const cardWidth =
    //   (0.8 * window.innerWidth -
    //     (cardNumber - 1) * cardMargin -
    //     2 * cardContainerMargin) /
    //   cardNumber;

    this.state = {
      // cardWidth,
      // cardMargin,
      // cardContainerMargin,
      cards,
    };
  }

  getCards() {
    const children: Array<Object> = [];
    const length = this.state.cards.length;
    for (let i = 0; i < length; i++) {
      const card = this.state.cards[i];
      children.push(
        <Col className="card-wrapper" key={i} md={8} xs={24}>
          <AdvantageCard cardContent={card} />
        </Col>,
      );
    }
    return children;
  }

  getSlicers() {
    const slicers = [];
    const slicerNum = this.state.cards.length - 1;
    // const leftStart = 0.3;
    for (let i = 0; i < slicerNum; i++) {
      const left = `${(0.864 * 0.3333 * (i + 1) + 0.03) * 100}%`;
      slicers.push(
        <div className="card-divider" style={{ marginLeft: left }}></div>,
      );
    }
    return slicers;
  }

  getDots() {
    let dots: Array<Object> = [];
    const length = this.state.cards.length;
    const startTop = 101;
    const cardHeight = 800;
    // for median screen
    const mediumStartLeftPercent = 0.027;
    const mrows = length + 1;
    for (let i = 0; i < mrows; i++) {
      let yOffset = 3;
      let top = `${startTop + cardHeight * i - yOffset}px`;
      let leftColLeft = `${mediumStartLeftPercent * 100}%`;
      let rigthColLeft = `${(mediumStartLeftPercent + 0.836) * 100}%`;
      dots.push(
        <div
          key={`dot-${i}-0-medium`}
          className="advantage-dot advantage-medium-screen-dot"
          style={{ marginLeft: leftColLeft, marginTop: top }}
        ></div>,
      );
      dots.push(
        <div
          key={`dot-${i}-1-medium`}
          className="advantage-dot advantage-medium-screen-dot"
          style={{ marginLeft: rigthColLeft, marginTop: top }}
        ></div>,
      );
      // for median screen
      yOffset = 2;
      top = `${startTop + cardHeight * i - yOffset}px`;
      leftColLeft = `${mediumStartLeftPercent * 100}%`;
      rigthColLeft = `${(mediumStartLeftPercent + 0.892) * 100}%`;
      dots.push(
        <div
          key={`dot-${i}-0-small`}
          className="advantage-dot advantage-small-screen-dot"
          style={{ marginLeft: leftColLeft, marginTop: top }}
        ></div>,
      );
      dots.push(
        <div
          key={`dot-${i}-1-small`}
          className="advantage-dot advantage-small-screen-dot"
          style={{ marginLeft: rigthColLeft, marginTop: top }}
        ></div>,
      );
    }

    return dots;
  }

  render() {
    return (
      <div className="advantages-page-container subpage-container">
        <div className="background-lefttop"></div>
        <OverPack
          playScale={0.3}
          component="section"
          className="subpage-content-container"
          id="advantage-subpage-content-container"
        >
          <QueueAnim type="bottom" key="content">
            <p
              key="title"
              className="advantages-page-title subpage-title"
              id="advantages-page-title"
            >
              我们的优势
            </p>
            <div key="block" className="background-rightbottom">
              <div className="slicer-bar adv-slicer-bar-v adv-slicer-bar-v1"></div>
              <div className="slicer-bar adv-slicer-bar-v adv-slicer-bar-v2"></div>
              <div className="slicer-bar adv-slicer-bar-h adv-slicer-bar-h1"></div>
              <div className="slicer-bar adv-slicer-bar-h adv-slicer-bar-h2"></div>
              <div className="slicer-bar adv-slicer-bar-h adv-slicer-bar-h3"></div>
              <div className="slicer-bar adv-slicer-bar-h adv-slicer-bar-h4"></div>
              {this.getSlicers()}
              {this.getDots()}
              <Row
                key="cards"
                className="advantage-cards-container"
                style={
                  {
                    // marginLeft: this.state.cardContainerMargin,
                    // marginRight: this.state.cardContainerMargin * 2,
                  }
                }
              >
                {this.getCards()}
              </Row>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default AdvantagesPage;
