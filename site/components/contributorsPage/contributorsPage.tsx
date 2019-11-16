import React from 'react';
import { Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { useTranslation } from 'react-i18next';
import ContributorCard from '../contributorCard/contributorCard';
import styles from './contributorsPage.module.less';

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

const ContributorsPage = (props: Props) => {
  const { t } = useTranslation();
  props.contributors.sort((a, b) => a.name.localeCompare(b.name, 'zh')); //a~z 排序
  const getContributors = () => {
    const children = props.contributors.map((contributor: Contributor) => {
      return (
        <ContributorCard key={contributor.name} cardContent={contributor} />
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
        <div key="contributors-container" className={styles.companiesContainer}>
          <Row
            key="contributors"
            type="flex"
            justify="center"
            className={styles.companies}
          >
            {getContributors()}
          </Row>
        </div>
      </QueueAnim>
    </div>
  );
};
export default ContributorsPage;
