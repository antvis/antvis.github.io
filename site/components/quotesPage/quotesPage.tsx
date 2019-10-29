import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import QuoteCard from '../quoteCard/quoteCard';
import './quotesPage.less';

const templeicon =
  'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*9f3LQZfdpfMAAAAAAAAAAABkARQnAQ';

interface quote {
  avatar: string | undefined;
  quote: string;
  from: string;
  name: string;
  index: number;
}

interface States {
  quotes: Array<quote>;
  // cardWidth: number,
  containerMarginPercent: number;
}

interface Props {
  isMobile: boolean;
}

class QuotesPage extends React.Component<Props, States> {
  constructor(props: Readonly<Props>) {
    super(props);
    const quotes = [
      {
        index: 0,
        avatar: templeicon,
        name: '陈为',
        from: '浙江大学计算机科学与技术学院 CAD & CG 国家重点实验室',
        quote:
          '在多年可视化设计与开发，在多年可视化设计与开发，在多年可视化设计与开发，在多年可视化设计与开发，在多年可视化设计与开发',
      },
      {
        index: 1,
        avatar: templeicon,
        name: '林峰',
        from: '蚂蚁金服',
        quote: 'something something something something',
      },
      {
        index: 2,
        avatar: templeicon,
        name: '林峰峰',
        from: '阿里巴巴 蚂蚁金服',
        quote:
          'anything anything anything anything anything anything anything anything ',
      },
    ];

    const cardNumber = quotes.length;
    const containerMarginPercent = 0.08;
    const containerMargin = window.innerWidth * containerMarginPercent;
    // const cardWidth =
    //   (window.innerWidth - 2 * containerMargin) / cardNumber;

    this.state = {
      quotes,
      containerMarginPercent,
      // cardWidth
    };
  }

  getCards(margin: number) {
    const length = this.state.quotes.length;
    const children: Array<Object> = [];
    // const cardWidth = (window.innerWidth - 2 * margin) / length;
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
            // cardWidth={cardWidth}
            hasBorder={hasBorder}
          />
        </Col>,
      );
    }
    return children;
  }

  render() {
    const margin = window.innerWidth * this.state.containerMarginPercent;
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
            <Row
              className="quote-card-container"
              key="cards"
              style={{ marginLeft: margin, marginRight: margin }}
            >
              {this.getCards(margin)}
            </Row>
          </div>
        </QueueAnim>
      </OverPack>
    );
  }
}

export default QuotesPage;
