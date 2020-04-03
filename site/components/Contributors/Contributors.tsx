import React from 'react';
import { Row } from 'antd';
import { useTranslation } from 'react-i18next';
import ContributorCard from '../ContributorCard/ContributorCard';
import styles from './Contributors.module.less';

interface Contributor {
  name: string;
  jobTitle: string;
  avatar: string;
  weibo: string;
  github: string;
}

interface Props {
  title: string;
  contributors: Contributor[];
}

const Contributors = (props: Props) => {
  const { t } = useTranslation();
  const contributors = props.contributors.map((contributor: Contributor) => (
    <ContributorCard key={contributor.name} contributor={contributor} />
  ));

  return (
    <div className={styles.wrapper}>
      <div key="content" className={styles.content}>
        <p key="title" className={styles.title}>
          {t(props.title)}
        </p>
        <div key="slicer" className={styles.slicer} />
        <div key="contributors-container" className={styles.companiesContainer}>
          <Row key="contributors" justify="center" className={styles.companies}>
            {contributors}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Contributors;
