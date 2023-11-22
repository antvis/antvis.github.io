import React from 'react';
import ResourceCard from '../ResourceCard/ResourceCard';
import { Col, Row } from 'antd';
import styles from './Resources.module.less';
import { getLang } from '../../utils';
import { useIntl } from 'dumi';

const circleBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/e63aad85-573e-484b-94dd-dc8ea2334c09.svg';
const diamandBackImg =
  'https://gw.alipayobjects.com/zos/basement_prod/bd846fce-bf9b-47f0-abba-87bb9bbd2982.svg';

const ResourcesPage = () => {
  const lang = getLang()
  const intl = useIntl()

  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    })
  }
  const cards = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*icqYSbEiNxIAAAAAAAAAAABkARQnAQ',
      title: useT('图表用法'),
      description: useT(
        '从数据出发，从功能角度对常见图表进行分类，提供规范使用指引。',
      ),
      link: 'https://antv-2018.alipay.com/zh-cn/vis/chart/index.html',
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mt47RKxGy8kAAAAAAAAAAABkARQnAQ',
      title: useT('设计价值观'),
      description: useT(
        '对数据图形进行拆解、提炼，抽象出一套数据图形可视化交互视觉规范。',
      ),
      link: `/${lang}/docs/specification/principles/basic`,
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zBDKTaSg-7AAAAAAAAAAAABkARQnAQ',
      title: useT('工具资源'),
      description: useT(
        '在进行模式、组件和语言的整理过程中发现的优秀书籍和资源。',
      ),
      link: `/${lang}/docs/specification/resources`,
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
          {useT(titleStr)}
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
