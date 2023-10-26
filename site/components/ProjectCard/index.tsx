import classNames from 'classnames';
import { useLocale, useIntl } from 'dumi';
import React, { useCallback, useState } from 'react';
import { Row, Col, Divider, Popover } from 'antd';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { ModuleTitle as Title, ActiveIcon } from '../common';
import ANTV_LINKS from '../../data/project-card-popover.json';
import { ProductType, getProducts, transformUrl } from '../Products/getProducts';

import styles from './index.module.less';

export const ANCHORNAME = 'linkChartsAnchorName';

type PrejectData = {
  title: string;
  subTitle?: string;
  span: number;
  classNames: any;
  isSort?: boolean;
  img?: string;
  icon?: string;
  url?: string;
  hash?: {
    examples: string;
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
    img: '',
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
    { title: 'S2', subTitle: '多维表格', span: 3, classNames: styles.chartEngine, url: 'https://s2.antv.antgroup.com' },
    { title: 'G6', subTitle: '关系图', span: 3, classNames: styles.chartEngine, url: 'https://g6.antv.vision' },
    { title: 'X6', subTitle: '流程图', span: 3, classNames: styles.chartEngine, url: 'https://x6.antv.antgroup.com' },
    { title: 'F2', subTitle: '移动统计图', span: 3, classNames: styles.chartEngine, url: 'https://f2.antv.antgroup.com' },
    { title: 'F6', subTitle: '移动关系图', span: 3, classNames: styles.chartEngine, url: 'https://f6.antv.visio' },
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
    icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*YIbER7wNuLMAAAAAAAAAAAAADmJ7AQ/original',
    url: 'https://g.antv.antgroup.com/',
  }],
];

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

  React.useEffect(() => {
    getProducts({ language, isChinaMirrorHost }).then((data) => {
      setProducts(data.slice(0, 14));
    });
  }, [language, isChinaMirrorHost]);

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
                    {icon && <img src={icon} />}
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
                    {links ? <Popover content={getContent(newTitle, newSubTitle, img, links)} >
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
