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

interface Card {
  index: number;
  icon: string;
  title: string;
  description: string;
}
interface Props {
  title?: string;
  advantages: Array<Card>;
}

const AdvantagesPage = (props: Props) => {
  const { t } = useTranslation();

  const getCards = () => {
    const children = props.advantages.map((card, i) => {
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
    const slicerNum = props.advantages.length - 1;
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
    const length = props.advantages.length;
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

  let lefttop1Display = 'block';
  let lefttop2Display = 'none';
  if (!props.title) {
    lefttop1Display = 'none';
    lefttop2Display = 'block';
  }
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.lefttopWithTitle, styles.lefttop)}
        style={{ display: lefttop1Display }}
      />
      <div
        className={classNames(styles.lefttopWithoutTitle, styles.lefttop)}
        style={{ display: lefttop2Display }}
      />
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
