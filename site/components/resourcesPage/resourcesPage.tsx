import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import ResourceCard from '../resourceCard/resourceCard';
import { Col, Row } from 'antd';
import './resourcesPage.less';

const templeicon =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*9f3LQZfdpfMAAAAAAAAAAABkARQnAQ';

interface States {
  cardMarginPercent: number;
  cardWidthPercent: number;
  cards: Array<Card>;
}

interface Card {
  index: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

class ResourcesPage extends React.Component<{}, States> {
  constructor(props: Readonly<{}>) {
    super(props);
    const cards = [
      {
        index: 0,
        icon: templeicon,
        title: '图表用法',
        description:
          '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
        link: '#',
      },
      {
        index: 1,
        icon: templeicon,
        title: '设计原则',
        description:
          '对数据图形进行拆解、提炼，抽象出一套数据图形可视化交互视觉规范。',
        link: '#',
      },
      {
        index: 2,
        icon: templeicon,
        title: '工具资源',
        description:
          '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
        link: '#',
      },
    ];
    const cardNumber = cards.length;
    const cardMarginPercent = 0.013;
    const cardWidthPercent = 1 / cardNumber;
    // (window.innerWidth - (cardNumber - 1) * 2 * cardMargin) / cardNumber;

    this.state = {
      cardWidthPercent,
      cardMarginPercent,
      cards,
    };
  }

  getCards() {
    const length = this.state.cards.length;
    const children: Array<Object> = [];
    for (let i = 0; i < length; i++) {
      let marginLeftPercent = this.state.cardMarginPercent;
      let marginRightPercent = this.state.cardMarginPercent;
      if (i === 0) {
        marginLeftPercent = 0;
      } else if (i === length - 1) {
        marginRightPercent = 0;
      }
      children.push(
        <Col className="card-wrapper" key={i} md={8} xs={24}>
          <ResourceCard
            key={i}
            cardContent={this.state.cards[i]}
            // cardWidth={this.state.cardWidthPercent}
            marginLeftPercent={marginLeftPercent}
            marginRightPercent={marginRightPercent}
          />
        </Col>,
      );
    }
    return children;
  }

  render() {
    return (
      <OverPack
        playScale={0.3}
        component="section"
        className="resources-page-container subpage-container"
      >
        <QueueAnim
          component={Row}
          type="bottom"
          leaveReverse
          key="page"
          className="subpage-content-container"
        >
          <p key="title" className="resources-page-title subpage-title">
            工具和资源
          </p>
          <div
            key="slicer"
            className="subpage-small-slicer resources-small-slicer"
          ></div>
          <Row key="cards" className="resources-card-container">
            {this.getCards()}
          </Row>
        </QueueAnim>
      </OverPack>
    );
  }
}
export default ResourcesPage;
