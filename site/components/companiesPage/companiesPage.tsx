import React from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './companiesPage.module.less';

interface Company {
  index?: number;
  imgSrc: string;
}
interface Props {
  title: string;
  companies: Array<Company>;
}

const CompaniesPage = (props: Props) => {
  const { t } = useTranslation();
  const getCompanies = () => {
    const children = props.companies.map((company, i) => {
      return (
        <Col
          key={i}
          className={classNames(styles.company, 'gutter-row')}
          md={6}
          sm={8}
          xs={12}
        >
          <img
            className={styles.companyimg}
            src={company.imgSrc}
            alt="company-img"
          />
        </Col>
      );
    });
    return children;
  };

  return (
    <div className={styles.wrapper}>
      <QueueAnim
        type="bottom"
        leaveReverse
        key="content"
        className={styles.content}
      >
        <p key="title" className={styles.title}>
          {t(props.title)}
        </p>
        <div key="slicer" className={styles.slicer} />
        <div key="companies-container" className={styles.companiesContainer}>
          <Row
            key="companies"
            gutter={[{ xs: 77, sm: 77, md: 30, lg: 50 }, 10]}
            className={styles.companies}
          >
            {getCompanies()}
          </Row>
        </div>
      </QueueAnim>
    </div>
  );
};
export default CompaniesPage;
