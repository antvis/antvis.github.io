import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './describePage.less';

interface States {
  description: string;
}

class DescribePage extends React.Component<{}, States> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      description:
        'AntV 3.0 已全新升级，主要包含 G2、G6、F2 以及一套完整的图表使用和设计规范。' +
        '得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑阿里集团内外 6000+ 业务系统，通过了日均千万级 UV 产品的严苛考验后方敢与君见。',
    };
  }

  render() {
    return (
      <OverPack
        playScale={0.3}
        component="section"
        key="page"
        className="subpage-container describe-page-container"
      >
        <QueueAnim
          type="bottom"
          key="title"
          leaveReverse
          className="subpage-content-container"
        >
          <p className="describe-page-title subpage-title">
            AntV 企业级可视化解决方案
          </p>
          <div
            key="slicer"
            className="subpage-small-slicer describe-small-slicer"
          ></div>
          <QueueAnim
            key="content"
            type="bottom"
            className="description-container"
          >
            <p key="content1" className="describe-page-description">
              {this.state.description}
            </p>
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    );
  }
}
export default DescribePage;
