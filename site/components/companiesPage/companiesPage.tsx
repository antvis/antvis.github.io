import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import templecompany from '../../images/temple-company.png';
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
          imgSrc: templecompany,
        },
        {
          index: 1,
          imgSrc: templecompany,
        },
        {
          index: 2,
          imgSrc: templecompany,
        },
        {
          index: 3,
          imgSrc: templecompany,
        },
        {
          index: 4,
          imgSrc: templecompany,
        },
        {
          index: 5,
          imgSrc: templecompany,
        },
        {
          index: 6,
          imgSrc: templecompany,
        },
        {
          index: 7,
          imgSrc: templecompany,
        },
      ],
    };
  }

  getCompanies() {
    let children: Array<Object> = [];
    const length = this.state.companies.length;
    for (let i = 0; i < length; i++) {
      const Company = this.state.companies[i];
      children.push(
        <Col key={i} className="company" md={6} sm={6} xs={24}>
          <img
            key="company"
            className="companyImg"
            width="100%"
            src={Company.imgSrc}
            alt={`${Company.index}`}
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
        className="subpage-container companies-page-container"
      >
        <QueueAnim
          type="bottom"
          leaveReverse
          key="content"
          className="subpage-content-container"
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
