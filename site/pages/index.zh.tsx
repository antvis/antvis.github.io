import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/seo';
import BannerPage from '../components/bannerPage/bannerPage';
import ProductsPage from '../components/productsPage/productsPage';
import ResourcesPage from '../components/resourcesPage/resourcesPage';
import DescribePage from '../components/describePage/describePage';
import AdvantagesPage from '../components/advantagesPage/advantagesPage';
import QuotesPage from '../components/quotesPage/quotesPage';
import CompaniesPage from '../components/companiesPage/companiesPage';
import './index.less';

const IndexPage = () => {
  return (
    <>
      <SEO title="蚂蚁数据可视化" lang="zh" />
      <div className="home-container">
        {/* {t('首页')}
        <img src={astronaut} alt="astronaut" height="200" /> */}
        <BannerPage />
        <ProductsPage />
        <ResourcesPage />
        <DescribePage />
        <AdvantagesPage />
        <QuotesPage />
        <CompaniesPage />
      </div>
    </>
  );
};

export default IndexPage;
