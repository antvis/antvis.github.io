import React from 'react';
import './describePage.less';

interface States {
  description: string;
  subDescription: string;
}

class DescribePage extends React.Component<{}, States> {
  constructor(props) {
    super(props);
    this.state = {
      description:
        'AntV 3.0 已全新升级，主要包含 G2、F2、G6 以及一套完整的图表使用和设计规范。',
      subDescription:
        'AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级，AntV 3.0 已全新升级',
    };
  }

  render() {
    return (
      <div className="subpage-container describe-page-container">
        <p className="describe-page-title subpage-title">
          AntV 企业级可视化解决方案
        </p>
        <div className="subpage-small-slicer describe-small-slicer"></div>
        <div className="description-container">
          <p className="describe-page-description">{this.state.description}</p>
          <p className="describe-page-description">
            {this.state.subDescription}
          </p>
        </div>
      </div>
    );
  }
}
export default DescribePage;
