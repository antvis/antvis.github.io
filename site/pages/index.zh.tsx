import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import BannerPage from '../components/bannerPage/bannerPage';
import ProductsPage from '../components/productsPage/productsPage';
import ResourcesPage from '../components/resourcesPage/resourcesPage';
import DescribePage from '../components/describePage/describePage';
import AdvantagesPage from '../components/advantagesPage/advantagesPage';
import QuotesPage from '../components/quotesPage/quotesPage';
import CompaniesPage from '../components/companiesPage/companiesPage';
import { useTranslation } from 'react-i18next';
import './index.less';

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  i18n.options.keySeparator = '>';

  const companies = [
    {
      index: 0,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 1,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      index: 2,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*58snT4MwuGcAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 3,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*14yvRoRDs4wAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 4,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      index: 5,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    },
    {
      index: 6,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      index: 7,
      imgSrc:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const bannerSVG = <svg></svg>;

  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <div className="home-container" style={{ marginTop: '-24px' }}>
        <BannerPage bannerSVG={bannerSVG} />
        <ProductsPage />
        <ResourcesPage />
        <DescribePage />
        <AdvantagesPage title="我们的优势" />
        {/* <AdvantagesPage/> */}
        <QuotesPage />
        <CompaniesPage title="2000+ 公司正在使用" companies={companies} />
      </div>
    </>
  );
};

export default IndexPage;
