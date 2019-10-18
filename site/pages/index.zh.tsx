import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '@antv/gatsby-theme-antv/site/components/seo';
import BannerPage from '../components/bannerPage/bannerPage';
import ProductsPage from '../components/productsPage/productsPage';
import ResourcesPage from '../components/resourcesPage/resourcesPage';
import DescribePage from '../components/describePage/describePage';
import AdvantagesPage from '../components/advantagesPage/advantagesPage';
import CarouselPage from '../components/carouselPage/carouselPage';
import CompaniesPage from '../components/companiesPage/companiesPage';
import './index.less';

const IndexPage = () => {
  const { t } = useTranslation();
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
        <CarouselPage isMobile={false} />
        <CompaniesPage />
      </div>
    </>
  );
};

export default IndexPage;
