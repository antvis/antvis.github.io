import React from 'react';
import { Row, Col } from 'antd';
import templecompany from '../../images/temple-company.png';
import './companiesPage.less';

interface States {
  companies: Array<company>;
}
interface company {
  index: number;
  imgSrc: string;
}

const COLNUM = 4;

class CompaniesPage extends React.Component<{}, States> {
  constructor(props) {
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
    const rows: Array<Object> = [];
    let children: Array<Object> = [];
    const length = this.state.companies.length;
    for (let i = 0; i < length; i++) {
      const Company = this.state.companies[i];
      children.push(
        <Col key={i} className="gutter-row" span={6}>
          {/* <div className="company-content"> */}
          <img
            key="company"
            className="company"
            src={Company.imgSrc}
            alt={` ${Company.index}`}
          />
          {/* </div> */}
        </Col>,
      );
      if ((i + 1) % COLNUM === 0 && children.length !== 0) {
        rows.push(<Row gutter={16}>{children}</Row>);
        children = [];
      }
    }
    return rows;
  }

  render() {
    return (
      <div className="subpage-container companies-page-container">
        <p className="companies-page-title subpage-title">2000+ 公司正在使用</p>
        <div className="subpage-small-slicer companies-small-slicer"></div>
        <div className="companies-container">{this.getCompanies()}</div>
      </div>
    );
  }
}
export default CompaniesPage;
