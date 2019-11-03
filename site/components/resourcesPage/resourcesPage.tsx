import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import ResourceCard from '../resourceCard/resourceCard';
import { Col, Row } from 'antd';
import styles from './resourcesPage.module.less';

interface Props {
  lang: string;
}

const ResourcesPage = (props: Props) => {
  const cards = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/9ef1230e-6c3c-4506-98ab-77cfc6db9767.svg',
      title: '图表用法',
      description:
        '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
      titleEn: 'Usage',
      descriptionEn:
        'Starting from the data, we classify the charts by their features and provide the usage guidelines.',
      link: '#',
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/74e248e9-b024-47ef-8b35-1b06a8cb87a5.svg',
      title: '设计原则',
      description:
        '对数据图形进行拆解、提炼，抽象出一套数据图形可视化交互视觉规范。',
      titleEn: 'Design Principle',
      descriptionEn:
        'By decomposing and refining the graphics of data, we extract a set of interactive and visual standards for data visualization .',
      link: '#',
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/90df0bcb-5295-4b49-b419-a70248ea359f.svg',
      title: '工具资源',
      description:
        '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
      titleEn: 'Tools',
      descriptionEn:
        'Starting from the data, we classify the charts by their features and provide the usage guidelines.',
      link: '#',
    },
  ];

  const getCards = () => {
    const length = cards.length;
    const children: Array<Object> = [];
    for (let i = 0; i < length; i++) {
      children.push(
        <Col className={styles.cardWrapper} key={i} md={8} xs={24}>
          <ResourceCard key={i} cardContent={cards[i]} lang={props.lang} />
        </Col>,
      );
    }
    return children;
  };

  let titleStr = '工具和资源';
  if (props.lang === 'en') {
    titleStr = 'Tools and Resources';
  }
  // playScale={0.3} component="section"
  return (
    <div className={styles.wrapper}>
      <QueueAnim
        component={Row}
        type="bottom"
        leaveReverse
        key="page"
        className={styles.content}
      >
        <p key="title" className={styles.title}>
          {titleStr}
        </p>
        <div key="slicer" className={styles.slicer} />
        <Row key="cards" className={styles.rows}>
          {getCards()}
        </Row>
      </QueueAnim>
    </div>
  );
};
export default ResourcesPage;
