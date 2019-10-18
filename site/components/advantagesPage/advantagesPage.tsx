import React from 'react';
import { Divider } from 'antd';
import AdvantageCard from '../advantageCard/advantageCard';
import './advantagesPage.less';
import templeicon from '../../images/temple-resource-icon.jpg';

interface States {
  cardMargin: number;
  cardWidth: number;
  cardContainerMargin: number;
  cards: Array<Object>;
}

class AdvantagesPage extends React.Component<{}, States> {
  constructor(props) {
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
    const cardNumber = cards.length;
    const cardMargin = 60;
    const cardContainerMargin = 50;
    const cardWidth =
      (0.8 * window.innerWidth -
        (cardNumber - 1) * cardMargin -
        2 * cardContainerMargin) /
      cardNumber;

    this.state = {
      cardWidth,
      cardMargin,
      cardContainerMargin,
      cards,
    };
  }

  render() {
    return (
      <div className="advantages-page-container subpage-container">
        <div className="background-lefttop"></div>
        <div className="background-rightbottom">
          <div
            className="advantage-cards-container"
            style={{
              marginLeft: this.state.cardContainerMargin,
              marginRight: this.state.cardContainerMargin,
            }}
          >
            <AdvantageCard
              cardContent={this.state.cards[0]}
              cardWidth={this.state.cardWidth}
              horizontalMargin={this.state.cardMargin}
            />
            <div className="card-divider"></div>
            <AdvantageCard
              cardContent={this.state.cards[1]}
              cardWidth={this.state.cardWidth}
              horizontalMargin={this.state.cardMargin}
            />
            <div className="card-divider"></div>
            <AdvantageCard
              cardContent={this.state.cards[2]}
              cardWidth={this.state.cardWidth}
              horizontalMargin={this.state.cardMargin}
            />
          </div>
        </div>
        <p className="advantages-page-title subpage-title">我们的优势</p>
      </div>
    );
  }
}

export default AdvantagesPage;
