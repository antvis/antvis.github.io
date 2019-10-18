import React from 'react';
import './resourcesPage.less';
import ResourceCard from '../resourceCard/resourceCard';
import templeicon from '../../images/temple-resource-icon.jpg';

interface States {
  cardMargin: number;
  cardWidth: number;
  cardContainerMargin: number;
  cards: Array<Object>;
}

class ResourcesPage extends React.Component<{}, States> {
  constructor(props) {
    super(props);
    const cards = [
      {
        index: 0,
        icon: templeicon,
        title: '图表用法',
        description:
          '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
      },
      {
        index: 1,
        icon: templeicon,
        title: '设计原则',
        description:
          '对数据图形进行拆解、提炼，抽象出一套数据图形可视化交互视觉规范。',
      },
      {
        index: 2,
        icon: templeicon,
        title: '工具资源',
        description:
          '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
      },
    ];
    const cardNumber = cards.length;
    const cardMarginPercent = 0.013;
    const cardMargin = cardMarginPercent * window.innerWidth;
    const cardContainerMarginPercent = 0.055;
    const cardContainerMargin =
      cardContainerMarginPercent * window.innerWidth - cardMargin;
    const cardWidth =
      (window.innerWidth -
        cardNumber * 2 * cardMargin -
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
    console.log('dddd', this.state.cardContainerMargin);
    return (
      <div className="resources-page-container subpage-container">
        <p className="resources-page-title subpage-title">工具和资源</p>
        <div className="subpage-small-slicer resources-small-slicer"></div>
        <div
          className="resources-card-container"
          style={{
            marginLeft: this.state.cardContainerMargin,
            marginRight: this.state.cardContainerMargin,
          }}
        >
          <ResourceCard
            cardContent={this.state.cards[0]}
            cardWidth={this.state.cardWidth}
            horizontalMargin={this.state.cardMargin}
          />
          <ResourceCard
            cardContent={this.state.cards[1]}
            cardWidth={this.state.cardWidth}
            horizontalMargin={this.state.cardMargin}
          />
          <ResourceCard
            cardContent={this.state.cards[2]}
            cardWidth={this.state.cardWidth}
            horizontalMargin={this.state.cardMargin}
          />
        </div>
      </div>
    );
  }
}
export default ResourcesPage;
