import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import QuoteCard from '../quoteCard/quoteCard';
import styles from './quotesPage.module.less';

const triangleBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/2477d398-ebe1-47df-8a3b-6357f03f8bb7.svg';
const rectBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/669f39d1-b8d2-4ca5-9192-7b709972a471.svg';
const circleBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/e500557d-e8be-4c2f-887e-5a5e20e65869.svg';
const circleBack2Img =
  'https://gw.alipayobjects.com/zos/basement_prod/4f577a87-2485-418a-9bc2-7f86e35c2017.svg';

const QuotesPage = () => {
  const quotes = [
    {
      index: 0,
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fSPDqijMJrYFdODpgEBV.png',
      name: 'Laland Wilkinson',
      from: '伊利诺伊大学计算机科学客座教授，H2O.ai 首席科学家，G2 项目顾问',
      quote:
        'I am thrill with G2. It is amazingly faithful to the GG system and has the potential to generate more graphics.',

      nameEn: 'Laland Wilkinson',
      fromEn:
        'Visiting professor of Computer Science College, University of Illinois. Chief Scientist of H2O.ai. Project Consultant of G2',
      quoteEn:
        'I am thrill with G2. It is amazingly faithful to the GG system and has the potential to generate more graphics.',
    },
    {
      index: 1,
      avatar: 'https://os.alipayobjects.com/rmsportal/CcFeLxXurbQmwrT.jpg',
      name: '陈为',
      from: '浙江大学计算机学院 CAD & CG 国家重点实验室教授',
      quote:
        '在多年可视化设计与开发的积累基础上，蚂蚁金服团队推出了 AntV 产品，这是工业界在基础可视化语法与实践方面发出的最强声音，也是工业界与学术界一道推进可视化研发进展的最佳利器。',

      nameEn: 'Wei Chen',
      fromEn: 'Professor of State Key Lab of CAD & CG, Zhejiang University',
      quoteEn:
        'Based on years of visualization design and development, Ant Financial launched AntV. ' +
        'It is the strongest voice on basic visualization syntax and practice in industry, ' +
        'and it is also the best tool for advancing the visualization development collaboration between industry and academia.',
    },
    {
      index: 2,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/wtkIALmYDSmOIiAalkdv.jpg',
      name: '林峰',
      from: '爱烹饪的可视化攻城狮',
      quote:
        'G2 是面粉，Echarts 是面条，皆微小而美好，因小食材怀大梦想，助力共筹东方巨龙崛起之盛宴，迎四海饕客。',
      nameEn: 'Feng Lin',
      fromEn: 'Visualization Developer Who Loves Cooking',
      quoteEn:
        'G2 is the flour, Echarts is the noodle. They are both tiny but beautiful. ' +
        'Tiny ingredients have big dreams, helping to co-sponser the feast of the rise of the Eastern Dragon, ' +
        'and welcoming the guests from all over the world.',
    },
  ];

  const getCards = () => {
    const length = quotes.length;
    const children = quotes.map((quote, i) => {
      let hasBorder = true;
      if (i === 0 || i === length - 1) {
        hasBorder = false;
      }
      return (
        <Col className={styles.cardWrapper} key={i} md={8} xs={24}>
          <QuoteCard key={i} cardContent={quote} hasBorder={hasBorder} />
        </Col>
      );
    });
    return children;
  };
  // OverPack playScale={0.3} component="section"
  return (
    <div className={styles.wrapper}>
      <QueueAnim
        type="bottom"
        leaveReverse
        key="page"
        className={styles.subWrapper}
      >
        <div key="quotes" className={styles.quotesWrapper}>
          <Row className={styles.rows} key="cards">
            {getCards()}
          </Row>
        </div>
        <img
          src={triangleBackImg}
          className={styles.triangleback}
          alt="triangle-background"
        />
        <img
          src={rectBackImg}
          className={styles.rectback}
          alt="rect-background"
        />
        <img
          src={circleBackImg}
          className={styles.circleback1}
          alt="circle-background"
        />
        <img
          src={circleBack2Img}
          className={styles.circleback2}
          alt="circle-background"
        />
      </QueueAnim>
    </div>
  );
};

export default QuotesPage;
