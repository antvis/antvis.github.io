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
  cardMargin: number;
  // cardWidth: number;
  cardContainerMargin: number;
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
        icon: templeicon,
        title: '简单方便',
        description: '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      },
      {
        index: 1,
        icon: templeicon,
        title: '方便可靠',
        description: '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      },
      {
        index: 2,
        icon: templeicon,
        title: '无限可能',
        description: '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      },
    ];
    // const cardNumber = cards.length;
    const cardMargin = 60;
    const cardContainerMargin = 50;
    // const cardWidth =
    //   (0.8 * window.innerWidth -
    //     (cardNumber - 1) * cardMargin -
    //     2 * cardContainerMargin) /
    //   cardNumber;

    this.state = {
      // cardWidth,
      cardMargin,
      cardContainerMargin,
      cards,
    };
  }

  getCards() {
    const children: Array<Object> = [];
    const length = this.state.cards.length;
    for (let i = 0; i < length; i++) {
      const card = this.state.cards[0];
      children.push(
        <Col className="card-wrapper" key={i} md={8} xs={24}>
          <AdvantageCard
            cardContent={card}
            // cardWidth={this.state.cardWidth}
            horizontalMargin={this.state.cardMargin}
          />
        </Col>,
      );
      // if (i < length - 1) {
      //   children.push(<div className="card-divider"></div>);
      // };
    }
    return children;
  }

  render() {
    return (
      <div className="advantages-page-container subpage-container">
        <div className="background-lefttop"></div>
        <OverPack
          playScale={0.3}
          component="section"
          className="subpage-content-container"
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
              <Row
                key="cards"
                className="advantage-cards-container"
                style={{
                  marginLeft: this.state.cardContainerMargin,
                  marginRight: this.state.cardContainerMargin * 2,
                }}
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
