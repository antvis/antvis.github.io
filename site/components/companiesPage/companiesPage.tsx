import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import styles from './companiesPage.module.less';

interface Props {
  lang: string;
}

const CompaniesPage = (props: Props) => {
  const companies = [
    {
      index: 0,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 1,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      index: 2,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*58snT4MwuGcAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 3,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*14yvRoRDs4wAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 4,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 5,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    },
    {
      index: 6,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      index: 7,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
  ];
  const getCompanies = () => {
    let children: Array<Object> = [];
    companies.forEach((company, i) => {
      children.push(
        <Col key={i} className={styles.company} md={6} sm={8} xs={12}>
          <img
            className={styles.companyimg}
            src={company.imgSrc}
            alt="company-img"
          />
        </Col>,
      );
    });
    return children;
  };

  let title = '2000+ 公司正在使用';
  if (props.lang === 'en') {
    title = '2000+ Companies are Using AntV';
  }
  return (
    <OverPack playScale={0.3} component="section" className={styles.wrapper}>
      <QueueAnim
        type="bottom"
        leaveReverse
        key="content"
        className={styles.content}
      >
        <p key="title" className={styles.title}>
          {title}
        </p>
        <div key="slicer" className={styles.slicer} />
        <div key="companies-container" className={styles.companiesContainer}>
          <Row key="companies" className={styles.companies}>
            {getCompanies()}
          </Row>
        </div>
      </QueueAnim>
    </OverPack>
  );
};
export default CompaniesPage;
