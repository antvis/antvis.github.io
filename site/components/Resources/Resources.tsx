import React from 'react';
import ResourceCard from '../ResourceCard/ResourceCard';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './Resources.module.less';

const circleBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/e63aad85-573e-484b-94dd-dc8ea2334c09.svg';
const diamandBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/bd846fce-bf9b-47f0-abba-87bb9bbd2982.svg';

const ResourcesPage = () => {
  const { t, i18n } = useTranslation();
  const cards = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*icqYSbEiNxIAAAAAAAAAAABkARQnAQ',
      title: t('图表用法'),
      description: t(
        '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
      ),
      link: 'https://antv-2018.alipay.com/zh-cn/vis/chart/index.html',
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mt47RKxGy8kAAAAAAAAAAABkARQnAQ',
      title: t('设计原则'),
      description: t(
        '对数据图形进行拆解、提炼，抽象出一套数据图形可视化交互视觉规范。',
      ),
      link: `/${i18n.language}/docs/specification/principles/basic`,
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zBDKTaSg-7AAAAAAAAAAAABkARQnAQ',
      title: t('工具资源'),
      description: t(
        '在进行模式、组件和语言的整理过程中发现的优秀书籍和资源。',
      ),
      link: `/${i18n.language}/docs/specification/resources`,
    },
  ];

  const cardCols = cards.map((card, i) => (
    <Col className={styles.cardWrapper} key={i} md={8} xs={24}>
      <ResourceCard key={i} cardContent={card} />
    </Col>
  ));

  let titleStr = '工具和资源';
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p key="title" className={styles.title}>
          {t(titleStr)}
        </p>
        <div key="slicer" className={styles.slicer} />
        <div key="cards" className={styles.rowsWrapper}>
          <Row key="rows" className={styles.rows} gutter={12}>
            {cardCols}
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
      </div>
    </div>
  );
};
export default ResourcesPage;
