import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './companiesPage.less';

interface States {
  companies: Array<company>;
}
interface company {
  index: number;
  imgSrc: string;
}

class CompaniesPage extends React.Component<{}, States> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      companies: [
        {
          index: 0,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*VI1HRrRDfJAAAAAAAAAAAABkARQnAQ',
        },
        {
          index: 1,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*pgZ6TKhg5kAAAAAAAAAAAABkARQnAQ',
        },
        {
          index: 2,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*irm1TJHnvyUAAAAAAAAAAABkARQnAQ',
        },
        {
          index: 3,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*yLAjTbQEbU4AAAAAAAAAAABkARQnAQ',
        },
        {
          index: 4,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*tILUTryXYMsAAAAAAAAAAABkARQnAQ',
        },
        {
          index: 5,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*FSSdSqlLLaoAAAAAAAAAAABkARQnAQ',
        },
        {
          index: 6,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*J7z2SZGNJwAAAAAAAAAAAABkARQnAQ',
        },
        {
          index: 7,
          imgSrc:
            'https://gw.alipayobjects.com/mdn/rms_23b644/afts/img/A*ISoZTJ-IlU0AAAAAAAAAAABkARQnAQ',
        },
      ],
    };
  }
  getCompanies() {
    let children: Array<Object> = [];
    this.state.companies.forEach((company, i) => {
      children.push(
        <Col key={i} className="company" md={6} sm={8} xs={12}>
          <img className="company-img" src={company.imgSrc} alt="company-img" />
        </Col>,
      );
    });
    return children;
  }

  render() {
    return (
      <OverPack
        playScale={0.3}
        component="section"
        className="subpage-container companies-page-container"
      >
        <QueueAnim
          type="bottom"
          leaveReverse
          key="content"
          className="subpage-content-container"
          id="companies-subpage-content-container"
        >
          <p key="title" className="companies-page-title subpage-title">
            2000+ 公司正在使用
          </p>
          <div
            key="slicer"
            className="subpage-small-slicer companies-small-slicer"
          ></div>
          <div key="companies-container" className="companies-container">
            <Row key="companies" className="companies">
              {this.getCompanies()}
            </Row>
          </div>
        </QueueAnim>
      </OverPack>
    );
  }
}
export default CompaniesPage;
