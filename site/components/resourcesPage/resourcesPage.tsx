import React from 'react';
import QueueAnim from 'rc-queue-anim';
import ResourceCard from '../resourceCard/resourceCard';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './resourcesPage.module.less';

const circleBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/e63aad85-573e-484b-94dd-dc8ea2334c09.svg';
const diamandBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/bd846fce-bf9b-47f0-abba-87bb9bbd2982.svg';

const ResourcesPage = () => {
  const { t } = useTranslation();
  const cards = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/9ef1230e-6c3c-4506-98ab-77cfc6db9767.svg',
      title: '图表用法',
      description:
        '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
      link: '#',
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/74e248e9-b024-47ef-8b35-1b06a8cb87a5.svg',
      title: '设计原则',
      description:
        '对数据图形进行拆解、提炼，抽象出一套数据图形可视化交互视觉规范。',
      link: '#',
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/zos/basement_prod/90df0bcb-5295-4b49-b419-a70248ea359f.svg',
      title: '工具资源',
      description: '在进行模式、组件和语言的整理过程中发现的优秀书籍和资源。',
      link: '#',
    },
  ];

  const getCards = () => {
    const length = cards.length;
    const children = cards.map((card, i) => {
      return (
        <Col className={styles.cardWrapper} key={i} md={8} xs={24}>
          <ResourceCard key={i} cardContent={card} />
        </Col>
      );
    });
    return children;
  };

  let titleStr = '工具和资源';
  // playScale={0.3} component="section"
  return (
    <div className={styles.wrapper}>
      <QueueAnim
        component={Row}
        type="bottom"
        leaveReverse
        key="page"
        className={styles.content}
      >
        <p key="title" className={styles.title}>
          {t(titleStr)}
        </p>
        <div key="slicer" className={styles.slicer} />
        <div key="cards" className={styles.rowsWrapper}>
          <Row key="rows" className={styles.rows}>
            {getCards()}
          </Row>
        </div>
        <img
          src={circleBackImg}
          className={styles.circleback}
          alt="circle-background"
        />
        <img
          src={diamandBackImg}
          className={styles.diamandback}
          alt="diamand-background"
        />
      </QueueAnim>
    </div>
  );
};
export default ResourcesPage;
