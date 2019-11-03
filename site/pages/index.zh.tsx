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
  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <div className="home-container" style={{ marginTop: '-24px' }}>
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
