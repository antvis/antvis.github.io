import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import Banner from '../components/Banner/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
import ProductsPage from '../components/Products/Products';
import DecisionTreePage from '../components/DecisionTree/DecisionTree';
import ResourcesPage from '../components/Resources/Resources';
import DescribePage from '../components/Describe/Describe';
import QuotesPage from '../components/Quotes/Quotes';
import BannerSVG from '../components/bannerSVG/bannerSVG';
import { useTranslation } from 'react-i18next';
import './index.less';

const cdns: any = {
  'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.0-beta.18/dist/g2.min.js': [
    'G2',
    'g2',
  ],
  'https://gw.alipayobjects.com/os/lib/antv/g2plot/2.0.9/dist/g2plot.min.js': [
    'G2Plot',
    'g2plot',
  ],
  'https://gw.alipayobjects.com/os/lib/antv/f2/3.7.8/dist/f2.min.js': [
    'F2',
    'f2',
  ],
  'https://gw.alipayobjects.com/os/lib/antv/g6/3.8.5/dist/g6.min.js': [
    'G6',
    'g6',
  ],
};

const scripts = Object.keys(cdns).map((src) => ({ src }));

const IndexPage = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*aFeWRbIgIvUAAAAAAAAAAABkARQnAQ',
      title: t('简单方便'),
      description: t(
        '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      ),
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FTqlRqx8GJQAAAAAAAAAAABkARQnAQ',
      title: t('方便可靠'),
      description: t(
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
      ),
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*JA95TZfp_z4AAAAAAAAAAABkARQnAQ',
      title: t('无限可能'),
      description: t(
        '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
      ),
    },
  ];

  const companies = [
    {
      name: 'alicloud',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'alipay',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'tmall',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*58snT4MwuGcAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'taobao',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*14yvRoRDs4wAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'mybank',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'jd',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'yunos',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'cainiao',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const bannerButtons = [
    {
      text: t('继续了解'),
      link: '#products',
      type: 'primary',
    },
  ];

  const notifications = [
    {
      type: t('论坛'),
      title: t('第十五届 D2 前端技术论坛·无界'),
      date: '2020.12.19',
      link: 'http://d2forum.alibaba-inc.com/',
    },
    {
      type: t('招聘'),
      title: t('蚂蚁集团体验技术部招聘啦！'),
      date: '2020.05.18',
      link: 'https://www.yuque.com/uf44r1/wqrwsg/alwufg',
    },
  ];

  const [animationStates, setAnimationState] = useState({
    play: true,
  });
  const onPlayVideo = () => {
    setAnimationState({
      play: false,
    });
  };
  const onCloseVideo = () => {
    setAnimationState({
      play: true,
    });
  };

  return (
    <>
      <Helmet
        script={scripts}
        onChangeClientState={(newState, addedTags) => {
          addedTags.scriptTags.forEach((script) => {
            if (cdns[script.src]) {
              script.onload = () => {
                const [name, babelName] = cdns[script.src];
                if (window[name]) {
                  console.log(`loaded ${name}`);
                  window[babelName] = window[name];
                }
              };
            }
          });
        }}
      />
      <SEO
        title={t('AntV')}
        titleSuffix={t('蚂蚁数据可视化')}
        description={t(
          `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。`,
        )}
        lang={i18n.language}
      />

      <div className="home-container">
        <Banner />
        <DecisionTreePage />
        <ResourcesPage />
        <DescribePage />
        <Features title={t('我们的优势')} features={features} />
        <QuotesPage />
        <Companies title={t('2000+ 公司正在使用')} companies={companies} />
      </div>
    </>
  );
};

export default IndexPage;
