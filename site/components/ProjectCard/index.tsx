import classNames from 'classnames';
import { useLocale, useIntl } from 'dumi';
import React, { useCallback, useState } from 'react';
import { Row, Col, Divider, Popover } from 'antd';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { ModuleTitle as Title, ActiveIcon } from '../common';
import ANTV_LINKS from '../../data/project-card-popover.json';
import { ProductType, getProducts, transformUrl } from '../Products/getProducts';

import styles from './index.module.less';

// 锚点
export const ANCHORNAME = 'linkChartsAnchorName';

type PrejectData = {
  // 标题
  title: string;
  // 二级表图
  subTitle?: string;
  // 占宽
  span: number;
  // 类名
  classNames: any;
  // 是否为分类
  isSort?: boolean;
  // 弹出框 展开图
  img?: string;
  // 大图标
  icon?: string;
  // 跳转链接
  url?: string;
  hash?: {
    // 弹出框 图表示例跳转链接
    examples: string;
    // 弹出框 使用文档 跳转到 api
    manual: string;
  };
}[][];

const PROJECT_DATAS: PrejectData = [
  [{
    title: 'AVA',
    subTitle: '智能洞察',
    span: 21,
    classNames: styles.AVA,
    icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*L58VTIXV8MwAAAAAAAAAAAAADmJ7AQ/original',
    img: 'https://gw.alipayobjects.com/mdn/rms_fabca5/afts/img/A*TOjFQ6PQwyEAAAAAAAAAAAAAARQnAQ',
    url: 'https://ava.antv.antgroup.com',
  }],
  [
    {
      title: 'Ant Design Charts',
      subTitle: '图表库',
      span: 12,
      classNames: styles.antd,
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*OWM6RLft2VIAAAAAAAAAAAAADmJ7AQ/original',
      url: 'https://charts.ant.design',
      img: 'https://gw.alipayobjects.com/zos/antfincdn/ABozcNxHpq/a2219011-3e9b-47d2-82a3-376fc779a065.png',
    },
    {
      title: '267全系F版',
      span: 9,
      classNames: styles.holophylyF,
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*S8gOQJHfS8QAAAAAAAAAAAAADmJ7AQ/original',
    },
  ],
  [
    {
      title: 'G2',
      subTitle: '统计图表',
      span: 3,
      classNames: styles.chartEngine,
      url: 'https://g2.antv.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*FrshQpaS4f0AAAAAAAAAAAAADmJ7AQ/original',
    },
    {
      title: 'S2',
      subTitle: '多维表格',
      span: 3,
      classNames: styles.chartEngine,
      url: 'https://s2.antv.antgroup.com',
      img: 'https://gw.alipayobjects.com/zos/antfincdn/YxskohI92J/c17971dd-6dd9-4a62-85f8-c69dff908aec.png',
    },
    {
      title: 'G6',
      subTitle: '关系图',
      span: 3,
      classNames: styles.chartEngine,
      url: 'https://g6.antv.vision',
      img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*yRU1QZbcQN4AAAAAAAAAAABkARQnAQ',
    },
    {
      title: 'X6',
      subTitle: '流程图',
      span: 3,
      classNames: styles.chartEngine,
      url: 'https://x6.antv.antgroup.com',
      img: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*JSr-RbwCgmcAAAAAAAAAAAAAARQnAQ',
    },
    {
      title: 'F2',
      subTitle: '移动统计图',
      span: 3,
      classNames: styles.chartEngine,
      url: 'https://f2.antv.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_khb4xj/afts/img/A*q7bQT4mlz7kAAAAAAAAAAAAADq2NAQ/original',
    },
    {
      title: 'F6',
      subTitle: '移动关系图',
      span: 3,
      classNames: styles.chartEngine,
      url: 'https://f6.antv.visio',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q3muQq70-dUAAAAAAAAAAAAADmJ7AQ/original',
    },
    { title: 'F7', subTitle: '移动地图', span: 3, classNames: styles.chartEngine },
  ],
  [
    { title: '常用统计数据', span: 6, classNames: styles.sort, isSort: true },
    { title: '关系数据', span: 6, classNames: styles.sort, isSort: true },
    { title: '极致移动定制', span: 9, classNames: styles.sort, isSort: true },
  ],
  [{ title: 'AntV Design', subTitle: '设计语言', span: 21, classNames: styles.antv, icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U3AfQq_cQMYAAAAAAAAAAAAADmJ7AQ/original' }],
  [{
    title: 'G',
    subTitle: '图表引擎',
    span: 21,
    classNames: styles.g,
    img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*nk1YSrbkQPMAAAAAAAAAAAAAARQnAQ',
    icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*YIbER7wNuLMAAAAAAAAAAAAADmJ7AQ/original',
    url: 'https://g.antv.antgroup.com/',
  }],
];

// 丰富图表，选用自如
export function ProjectCard() {
  const locale = useLocale()
  const [isChinaMirrorHost] = useChinaMirrorHost();
  const [products, setProducts] = useState<ProductType[]>([]);

  const language: 'zh' | 'en' = locale.id.includes('zh') ? 'zh' : 'en';

  const intl = useIntl()
  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    });
  };

  // 旧的跳转 json 获取
  React.useEffect(() => {
    getProducts({ language, isChinaMirrorHost }).then((data) => {
      setProducts(data.slice(0, 14));
    });
  }, [language, isChinaMirrorHost]);

  // 弹出框内容
  const getContent = useCallback((title, subTitle, img, links) => {
    return <div className={styles.content}>
      <div className={styles.msg}>
        <div className={styles.msgTitle}>{title}</div>
        <div className={styles.msgSubTitle}>{subTitle}</div>
      </div>
      <div className={styles.msgChart} style={{ backgroundImage: `url(${img})` }} />
      <div className={styles.links}>
        {
          ANTV_LINKS.map((link) =>
            <a
              href={links[link.href]?.url}
              target='_black'
            >
              <ActiveIcon
                className={styles.link}
                img={link.img}
                text={useT(link.text)}
                activeImg={link.activeImg}
              />
            </a>
          )
        }
      </div>
    </div>
  }, []);

  return (
    <div className={styles.projectCard} id={ANCHORNAME}>
      <Title
        title={useT('丰富图表，选用自如')}
        subTitle={useT('经历了海量数据场景下的严苛考验，蚂蚁集团自研了数据库、云原生、隐私计算、图计算为代表的数字化“根技术”')}
      />
      <div className={styles.cards}>
        <div className={styles.box}>
          {
            PROJECT_DATAS.map((cols) => (<Row gutter={16}>
              {
                cols.map((col) => {
                  const { span, img, title, subTitle, isSort, icon, url } = col;

                  const product = products.find((product) => product.title === title);
                  const links = product?.links;
                  const newTitle = useT(title);
                  const newSubTitle = subTitle && useT(subTitle);
                  const children = <a
                    className={classNames(col.classNames, styles.card)}
                    href={url && transformUrl({ url, language, isChinaMirrorHost })}
                    style={{ cursor: url ? 'pointer' : 'default' }}
                    target='_black'
                  >
                    {icon && <img src={icon} alt={newTitle} />}
                    {isSort ?
                      <Divider dashed={true} className={styles.divider}>
                        <div className={styles.cardTitle}>{newTitle}</div>
                      </Divider> :
                      <div className={styles.cardTitle}>{newTitle}</div>
                    }
                    {subTitle && <div className={styles.cardSubTitle}>{newSubTitle}</div>}
                  </a>;

                  return <Col
                    key={title}
                    span={span}
                  >
                    {links ? <Popover arrow={false} content={getContent(newTitle, newSubTitle, img, links)} >
                      {children}
                    </Popover> :
                      children}
                  </Col>
                })
              }
            </Row>))
          }
        </div>
      </div>
    </div>
  );
}
