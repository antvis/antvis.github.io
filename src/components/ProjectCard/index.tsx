import { ConfigProvider, Popover } from 'antd';
import classNames from 'classnames';
import { useTranslation } from '../../lib/i18n';
import React, { useCallback, useState } from 'react';
import ANTV_LINKS from '../../data/project-card-popover.json';
import { ActiveIcon, ModuleTitle as Title } from '../common';
import { type ProductType, getProducts } from '../../lib/products';
import { transformUrl } from '../../lib/urls';

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
  classNames: string;
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

// 产品布局和样式由组件维护。
const chartCardClasses =
  'h-[92px] mb-3 flex-1 flex-col bg-[rgba(245,140,88,0.15)] hover:bg-[rgba(245,140,88,0.25)] hover:border-[#f58c58]';

const PROJECT_DATAS: PrejectData = [
  [
    {
      title: 'AVA',
      subTitle: '智能洞察',
      span: 24,
      classNames:
        'h-[70px] mb-4 bg-[rgba(36,134,255,0.15)] hover:bg-[rgba(36,134,255,0.25)]',
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*L58VTIXV8MwAAAAAAAAAAAAADmJ7AQ/original',
      img: 'https://gw.alipayobjects.com/mdn/rms_fabca5/afts/img/A*TOjFQ6PQwyEAAAAAAAAAAAAAARQnAQ',
      url: 'https://ava.antv.antgroup.com',
    },
  ],
  [
    {
      title: 'Ant Design Charts',
      subTitle: '图表库',
      span: 15,
      classNames:
        'h-[70px] mb-4 bg-[rgba(0,167,167,0.15)] hover:bg-[rgba(0,167,167,0.25)]',
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*OWM6RLft2VIAAAAAAAAAAAAADmJ7AQ/original',
      url: 'https://ant-design-charts-next.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*IJE_TYeUtEUAAAAAAAAAAAAADmJ7AQ/original',
    },
    {
      title: '267 全系 F 版',
      span: 9,
      classNames:
        'h-[70px] mb-4 bg-[rgba(0,167,167,0.15)] hover:bg-[rgba(0,167,167,0.25)]',
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*S8gOQJHfS8QAAAAAAAAAAAAADmJ7AQ/original',
    },
  ],
  [
    {
      title: 'G2',
      subTitle: '统计图表',
      span: 3,
      classNames: chartCardClasses,
      url: 'https://g2.antv.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*oj5gRqZMxZQAAAAAAAAAAAAADmJ7AQ/original',
    },
    {
      title: 'S2',
      subTitle: '多维表格',
      span: 3,
      classNames: chartCardClasses,
      url: 'https://s2.antv.antgroup.com',
      img: 'https://gw.alipayobjects.com/zos/antfincdn/YxskohI92J/c17971dd-6dd9-4a62-85f8-c69dff908aec.png',
    },
    {
      title: 'G6',
      subTitle: '关系图',
      span: 3,
      classNames: chartCardClasses,
      url: 'https://g6.antv.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*_JGLQZl-PcQAAAAAAAAAAAAADmJ7AQ/original',
    },
    {
      title: 'X6',
      subTitle: '流程图',
      span: 3,
      classNames: chartCardClasses,
      url: 'https://x6.antv.antgroup.com',
      img: 'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*JSr-RbwCgmcAAAAAAAAAAAAAARQnAQ',
    },
    {
      title: 'L7',
      subTitle: '地图',
      span: 3,
      classNames: chartCardClasses,
      url: 'https://L7.antv.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*H0KDRaIpfIUAAAAAAAAAAAAADmJ7AQ/original',
    },
    {
      title: 'F2',
      subTitle: '移动统计图',
      span: 3,
      classNames: chartCardClasses,
      url: 'https://f2.antv.antgroup.com',
      img: 'https://mdn.alipayobjects.com/huamei_khb4xj/afts/img/A*q7bQT4mlz7kAAAAAAAAAAAAADq2NAQ/original',
    },
    {
      title: 'F6',
      subTitle: '移动关系图',
      span: 3,
      classNames: chartCardClasses,
      url: 'https://f6.antv.vision',
      img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*q3muQq70-dUAAAAAAAAAAAAADmJ7AQ/original',
    },
    {
      title: 'F7',
      subTitle: '移动地图',
      span: 3,
      classNames: classNames(
        chartCardClasses,
        'box-border border border-dashed border-[rgba(245,140,88,0.5)]',
      ),
    },
  ],
  [
    {
      title: '常用统计数据',
      span: 6,
      classNames: 'h-6 mb-4 p-0 cursor-default',
      isSort: true,
    },
    {
      title: '关系数据',
      span: 6,
      classNames: 'h-6 mb-4 p-0 cursor-default',
      isSort: true,
    },
    {
      title: '地理空间数据',
      span: 3,
      classNames: 'h-6 mb-4 p-0 cursor-default',
      isSort: true,
    },
    {
      title: '极致移动定制',
      span: 9,
      classNames: 'h-6 mb-4 p-0 cursor-default',
      isSort: true,
    },
  ],
  [
    {
      title: 'AntV Design',
      subTitle: '设计语言',
      url: '/specification/principles/basic',
      span: 24,
      classNames:
        'h-[70px] mb-4 bg-[rgba(213,128,255,0.15)] hover:bg-[rgba(213,128,255,0.25)]',
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*U3AfQq_cQMYAAAAAAAAAAAAADmJ7AQ/original',
    },
  ],
  [
    {
      title: 'G',
      subTitle: '图表引擎',
      span: 24,
      classNames:
        'h-[70px] mb-0 bg-[rgba(148,112,255,0.15)] hover:bg-[rgba(148,112,255,0.25)]',
      img: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*nk1YSrbkQPMAAAAAAAAAAAAAARQnAQ',
      icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*YIbER7wNuLMAAAAAAAAAAAAADmJ7AQ/original',
      url: 'https://g.antv.antgroup.com',
    },
  ],
];

// 设计语言与研发框架
export function ProjectCard() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const { locale: language, t: useT } = useTranslation();

  // 旧的跳转 json 获取
  React.useEffect(() => {
    let active = true;
    getProducts({ language })
      .then((data) => {
        if (active) setProducts(data.slice(0, 14));
      })
      .catch(() => {
        // The static product links remain usable when supplementary links fail.
        if (active) setProducts([]);
      });
    return () => {
      active = false;
    };
  }, [language]);

  // 弹出框内容
  const getContent = useCallback(
    ({ title, subTitle, img, links, url }) => {
      return (
        <div className="font-sans px-2">
          <div className="flex items-center tracking-normal">
            <div className="font-semibold text-[20px] text-[#1d2129] mr-[6px]">
              {title}
            </div>
            <div className="text-[14px] text-[#86909c]">{subTitle}</div>
          </div>
          <div
            className="h-[125px] w-[274px] border border-solid border-[#d8d8d8] bg-white rounded-sm my-3 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="flex items-center justify-between w-[274px]">
            {ANTV_LINKS.map((link) => {
              let href = links[link.href]?.url?.replace(
                /https:\/\/.+?\//,
                `${url}/`,
              );

              // Ant Design Charts 本身跳转 https://charts.ant.design/example 为 404, 修改为 https://ant-design-charts.antgroup.com/examples
              if (title === 'Ant Design Charts') {
                href =
                  link.href === 'home'
                    ? url
                    : `${url}/${language}/${
                        {
                          example: 'examples',
                          api: 'options/plots/overview',
                        }[link.href]
                      }`;
              }
              if (href && title === 'F6' && link.href === 'api') {
                href = href + '/Graph';
              }

              return (
                <ActiveIcon
                  key={link.href}
                  href={href || transformUrl({ url, language })}
                  target="_blank"
                  className="text-[14px] text-[#1d2129] [&>img]:w-4 [&>img]:h-4 hover:text-[#691eff]"
                  img={link.img}
                  text={useT(link.text)}
                  activeImg={link.activeImg}
                />
              );
            })}
          </div>
        </div>
      );
    },
    [language],
  );

  return (
    <div
      className="flex items-center justify-center pt-20 pb-10 flex-col h-auto overflow-hidden font-sans tablet:px-6 mobile:pt-12 mobile:px-5 mobile:pb-6"
      id={ANCHORNAME}
    >
      <Title
        title={useT('设计语言与研发框架')}
        subTitle={useT('资产一览，让你快速搭建网站应用')}
      />
      <div className="min-h-[520px] w-[calc(100vw_-_360px)] max-w-[1680px] min-w-[1040px] bg-[linear-gradient(114deg,#332f4f_0%,#28243f_100%)] shadow-[0_8px_28px_0_rgba(0,0,0,0.2)] rounded-2xl p-6 tracking-normal tablet:w-full tablet:min-w-0 tablet:overflow-x-auto">
        <div className="tablet:min-w-[992px]">
          {PROJECT_DATAS.map((cols) => (
            <div
              key={cols[0].title}
              className="grid grid-cols-[repeat(24,minmax(0,1fr))] gap-x-4"
            >
              {cols.map((col) => {
                const { span, img, title, subTitle, isSort, icon, url } = col;

                const product = products.find(
                  (product) => product.title === title,
                );

                const links = product?.links;
                const newTitle = useT(title);
                const newSubTitle = subTitle && useT(subTitle);
                const children = (
                  <a
                    className={classNames(
                      col.classNames,
                      'flex items-center justify-center rounded-lg text-white relative',
                    )}
                    href={url && transformUrl({ url, language })}
                    style={{ cursor: url ? 'pointer' : 'default' }}
                    target="_blank"
                  >
                    {icon && <img src={icon} alt={newTitle} />}
                    {isSort ? (
                      <div className="flex items-center w-full border-[rgba(255,255,255,0.2)] before:content-[''] before:flex-1 before:[border-top:1px_dashed_rgba(255,255,255,0.2)] after:content-[''] after:flex-1 after:[border-top:1px_dashed_rgba(255,255,255,0.2)]">
                        <div className="h-7 font-semibold leading-7 font-sans mx-[6px] text-[16px] text-white opacity-45">
                          {newTitle}
                        </div>
                      </div>
                    ) : (
                      <div className="h-7 font-semibold leading-7 text-[20px] mx-2">
                        {newTitle}
                      </div>
                    )}
                    {subTitle && (
                      <div className="font-sans h-6 opacity-65 text-[16px] leading-6 whitespace-nowrap">
                        {newSubTitle}
                      </div>
                    )}
                  </a>
                );

                return (
                  <div
                    key={title}
                    style={{ gridColumn: `span ${span}`, minWidth: 0 }}
                  >
                    {links ? (
                      <ConfigProvider prefixCls="antd5">
                        <Popover
                          content={getContent({
                            url,
                            img,
                            links,
                            title: newTitle,
                            subTitle: newSubTitle,
                          })}
                        >
                          {children}
                        </Popover>
                      </ConfigProvider>
                    ) : (
                      children
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
