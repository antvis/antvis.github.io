import classNames from 'classnames';
import { useLocale, useIntl } from 'dumi';
import React, { useCallback, useState } from 'react';
import { Row, Col, Divider, Popover, ConfigProvider } from 'antd';
import { useChinaMirrorHost } from '@antv/dumi-theme-antv/dist/slots/hooks';
import { ModuleTitle as Title, ActiveIcon } from '../common';
import ANTV_LINKS from '../../data/project-card-popover.json';
import { ProductType, getProducts, transformUrl } from '../Products/getProducts';

import styles from './index.module.less';

// 锚点, 用于 banner 中的 开始使用跳转
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

// 不放入 data 变为 json 是因为 占比需要 styles 进行修改。
const PROJECT_DATAS: PrejectData = [
  [{
    title: 'AVA',
    subTitle: '智能洞察',
    span: 24,
    classNames: styles.AVA,
    icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*L58VTIXV8MwAAAAAAAAAAAAADmJ7AQ/original',
    img: 'https://gw.alipayobjects.com/mdn/rms_fabca5/afts/img/A*TOjFQ6PQwyEAAAAAAAAAAAAAARQnAQ',
    url: 'https://ava.antv.antgroup.com',
  }],
  [
    {
      title: 'Ant Design Charts',
      subTitle: '图表库',
      span: 15,
      classNames: styles.antd,
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*OWM6RLft2VIAAAAAAAAAAAAADmJ7AQ/original',
      url: 'https://charts.ant.design',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*IJE_TYeUtEUAAAAAAAAAAAAADmJ7AQ/original',
    },
    {
      title: '267 全系 F 版',
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
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*oj5gRqZMxZQAAAAAAAAAAAAADmJ7AQ/original',
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
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_JGLQZl-PcQAAAAAAAAAAAAADmJ7AQ/original',
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
      title: 'L7',
      subTitle: '地图',
      span: 3,
      classNames: styles.chartEngine,
      url: 'https://L7.antv.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*H0KDRaIpfIUAAAAAAAAAAAAADmJ7AQ/original',
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
      url: 'https://f6.antv.vision',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q3muQq70-dUAAAAAAAAAAAAADmJ7AQ/original',
    },
    { title: 'F7', subTitle: '移动地图', span: 3, classNames: classNames(styles.chartEngine, styles.f7) },
  ],
  [
    { title: '常用统计数据', span: 6, classNames: styles.sort, isSort: true },
    { title: '关系数据', span: 6, classNames: styles.sort, isSort: true },
    { title: '地理空间数据', span: 3, classNames: styles.sort, isSort: true },
    { title: '极致移动定制', span: 9, classNames: styles.sort, isSort: true },
  ],
  [
    {
      title: 'AntV Design',
      subTitle: '设计语言',
      url: '/specification/principles/basic',
      span: 24,
      classNames: styles.antv,
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U3AfQq_cQMYAAAAAAAAAAAAADmJ7AQ/original',
    },
  ],
  [
    {
      title: 'G',
      subTitle: '图表引擎',
      span: 24,
      classNames: styles.g,
      img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*nk1YSrbkQPMAAAAAAAAAAAAAARQnAQ',
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*YIbER7wNuLMAAAAAAAAAAAAADmJ7AQ/original',
      url: 'https://g.antv.antgroup.com/',
    },
  ],
];

// 设计语言与研发框架
export function ProjectCard() {
  const locale = useLocale();
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
  const getContent = useCallback(({ title, subTitle, img, links, url }) => {

    return <div className={styles.content}>
      <div className={styles.msg}>
        <div className={styles.msgTitle}>{title}</div>
        <div className={styles.msgSubTitle}>{subTitle}</div>
      </div>
      <div className={styles.msgChart} style={{ backgroundImage: `url(${img})` }} />
      <div className={styles.links}>
        {
          ANTV_LINKS.map((link) => {
            let href = links[link.href]?.url;

            // Ant Design Charts 本身跳转 https://charts.ant.design/example 为 404, 修改为 https://ant-design-charts.antgroup.com/examples
            if (title === 'Ant Design Charts' && !href) {
              href = `https://ant-design-charts.antgroup.com/${language}/${link.href === 'example' ? 'examples' : link.href}`;
            }

            return <a
              href={href}
              target='_black'
            >
              <ActiveIcon
                className={styles.link}
                img={link.img}
                text={useT(link.text)}
                activeImg={link.activeImg}
              />
            </a>
          }
          )
        }
      </div>
    </div>
  }, []);

  return (
    <div className={styles.projectCard} id={ANCHORNAME}>
      <Title
        title={useT('设计语言与研发框架')}
        subTitle={useT('资产一览，让你快速搭建网站应用')}
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
                    {links ?
                      <ConfigProvider prefixCls="antd5">
                        <Popover
                          content={getContent({
                            img,
                            links,
                            title: newTitle,
                            subTitle: newSubTitle,
                          })}
                        >
                          {children}
                        </Popover>
                      </ConfigProvider> :
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
