import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import ResourceCard from '../resourceCard/resourceCard';
import { Col, Row } from 'antd';
import './resourcesPage.less';

interface States {
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
        icon:
          'https://gw.alipayobjects.com/zos/basement_prod/9ef1230e-6c3c-4506-98ab-77cfc6db9767.svg',
        title: '图表用法',
        description:
          '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
        link: '#',
      },
      {
        index: 1,
        icon:
          'https://gw.alipayobjects.com/zos/basement_prod/74e248e9-b024-47ef-8b35-1b06a8cb87a5.svg',
        title: '设计原则',
        description:
          '对数据图形进行拆解、提炼，抽象出一套数据图形可视化交互视觉规范。',
        link: '#',
      },
      {
        index: 2,
        icon:
          'https://gw.alipayobjects.com/zos/basement_prod/90df0bcb-5295-4b49-b419-a70248ea359f.svg',
        title: '工具资源',
        description:
          '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
        link: '#',
      },
    ];
    this.state = {
      cards,
    };
  }

  getCards() {
    const length = this.state.cards.length;
    const children: Array<Object> = [];
    for (let i = 0; i < length; i++) {
      children.push(
        <Col className="card-wrapper" key={i} md={8} xs={24}>
          <ResourceCard key={i} cardContent={this.state.cards[i]} />
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
          id="resources-subpage-content-container"
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
