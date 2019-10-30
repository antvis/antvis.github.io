import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import QuoteCard from '../quoteCard/quoteCard';
import './quotesPage.less';

interface quote {
  avatar: string | undefined;
  quote: string;
  from: string;
  name: string;
  index: number;
}

interface States {
  quotes: Array<quote>;
}

interface Props {}

class QuotesPage extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    const quotes = [
      {
        index: 0,
        avatar:
          'https://gw.alipayobjects.com/zos/rmsportal/fSPDqijMJrYFdODpgEBV.png',
        name: 'Laland Wilkinson',
        from: '伊利诺伊大学计算机科学客座教授，H2O.ai 首席科学家，G2 项目顾问',
        quote:
          'I am thrill with G2. It is amazingly faithful to the GG system and has the potential to generate more graphics.',
      },
      {
        index: 1,
        avatar: 'https://os.alipayobjects.com/rmsportal/CcFeLxXurbQmwrT.jpg',
        name: '陈为',
        from: '浙江大学计算机学院  CAD  &  CG  国家重点实验室教授',
        quote:
          '在多年可视化设计与开发的积累基础上，蚂蚁金服团队推出了 AntV 产品，这是工业界在基础可视化语法与实践方面发出的最强声音，也是工业界与学术界一道推进可视化研发进展的最佳利器。',
      },
      {
        index: 2,
        avatar:
          'https://zos.alipayobjects.com/rmsportal/wtkIALmYDSmOIiAalkdv.jpg',
        name: '林峰',
        from: '爱烹饪的可视化攻城狮',
        quote:
          'G2 是面粉，Echarts 是面条，皆微小而美好，因小食材怀大梦想，助力共筹东方巨龙崛起之盛宴，迎四海饕客。',
      },
    ];
    this.state = {
      quotes,
    };
  }

  getCards() {
    const length = this.state.quotes.length;
    const children: Array<Object> = [];
    for (let i = 0; i < length; i++) {
      let hasBorder = true;
      if (i === 0 || i === length - 1) {
        hasBorder = false;
      }
      children.push(
        <Col className="card-wrapper" key={i} md={8} xs={24}>
          <QuoteCard
            key={i}
            cardContent={this.state.quotes[i]}
            hasBorder={hasBorder}
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
        className="quotes-page-container subpage-container"
      >
        <QueueAnim
          type="bottom"
          leaveReverse
          key="page"
          className="page text-center"
        >
          <div key="quotes" className="quotes-wrapper">
            <Row className="quote-card-container" key="cards">
              {this.getCards()}
            </Row>
          </div>
        </QueueAnim>
      </OverPack>
    );
  }
}

export default QuotesPage;
