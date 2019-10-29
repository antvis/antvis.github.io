import React from 'react';
import { Carousel } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import templeicon from '../../images/temple-resource-icon.jpg';
import leftpad from '../../images/temple-leftpad.jpg';
import './carouselPage.less';

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

interface Props {
  isMobile: boolean;
}

class AdvantagesPage extends React.Component<Props, States> {
  constructor(props) {
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

    this.state = {
      quotes,
    };
  }

  getQuotes() {
    const children: Array<Object> = [];
    const length = this.state.quotes.length;
    for (let i = 0; i < length; i++) {
      const Q = this.state.quotes[i];
      children.push(
        <div key={i}>
          {!this.props.isMobile && (
            <img className="leftpad" src={leftpad} alt="" />
          )}
          <QueueAnim
            type="bottom"
            leaveReverse
            key="content"
            className="quote-content"
          >
            <img key="user" className="avatar" src={Q.avatar} alt="" />
            <p key="name" className="name">
              {Q.name}
            </p>
            <p key="from" className="from">
              {Q.from}
            </p>
            <div key="comment" className="comment">
              <span>{Q.quote}</span>
            </div>
          </QueueAnim>
        </div>,
      );
    }
    return children;
  }

  render() {
    return (
      <div className="carousel-page-container subpage-container">
        <div className="page text-center">
          <OverPack
            playScale={0.3}
            component="section"
            key="carousel"
            className="carousel-wrapper"
          >
            <Carousel
              effect={this.props.isMobile ? 'scrollx' : 'fade'}
              autoplay
            >
              {this.getQuotes()}
            </Carousel>
          </OverPack>
        </div>
      </div>
    );
  }
}

export default AdvantagesPage;
