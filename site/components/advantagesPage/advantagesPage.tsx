import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// var ScrollAnim = require('rc-scroll-anim');
// var ScrollOverPack = ScrollAnim.OverPack;
import { Row, Col } from 'antd';
import classNames from 'classnames';
import AdvantageCard from '../advantageCard/advantageCard';
import { useTranslation } from 'react-i18next';
import styles from './advantagesPage.module.less';

interface Props {
  title?: string;
}

const AdvantagesPage = (props: Props) => {
  const { t } = useTranslation();
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

  const getCards = () => {
    const children = cards.map((card, i) => {
      return (
        <Col className={styles.cardWrapper} key={i} md={8} xs={24}>
          <AdvantageCard cardContent={card} />
        </Col>
      );
    });
    return children;
  };

  const getSlicers = () => {
    const slicers = [];
    const slicerNum = cards.length - 1;
    for (let i = 0; i < slicerNum; i++) {
      const left = `${(0.878 * 0.3333 * (i + 1) + 0.04) * 100}%`;
      slicers.push(
        <div key={i} className={styles.divider} style={{ marginLeft: left }} />,
      );
    }
    return slicers;
  };

  // for small screen
  const getDots = () => {
    let dots: Array<Object> = [];
    const length = cards.length;
    const startTop = 45;
    const cardHeight = 350;
    const startLeftPercent = 0.028;
    const rows = length + 1;
    for (let i = 0; i < rows; i++) {
      let yOffset = 1;
      let top = `${startTop + cardHeight * i - yOffset}px`;
      let leftColLeft = `${startLeftPercent * 100}%`;
      let rigthColLeft = `${(startLeftPercent + 0.892) * 100}%`;
      dots.push(
        <div
          key={`dot-${i}-0-small`}
          className={styles.dot}
          style={{ marginLeft: leftColLeft, marginTop: top }}
        />,
      );
      dots.push(
        <div
          key={`dot-${i}-1-small`}
          className={styles.dot}
          style={{ marginLeft: rigthColLeft, marginTop: top }}
        />,
      );
    }

    return dots;
  };

  //playScale={0.3} component="section"
  return (
    <div className={styles.wrapper}>
      <div className={styles.lefttop} />
      <div className={styles.content}>
        <QueueAnim type="bottom" key="content">
          <p key="title" className={styles.title}>
            {props.title && t(props.title)}
          </p>
          <div key="block" className={styles.rightbottom}>
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
            {getSlicers()}
            {getDots()}
            <Row key="cards" className={styles.cards}>
              {getCards()}
            </Row>
          </div>
        </QueueAnim>
      </div>
    </div>
  );
};

export default AdvantagesPage;
