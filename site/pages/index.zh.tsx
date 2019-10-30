import React from 'react';
import { useTranslation } from 'react-i18next';
// import Enquire from 'enquire.js';
import SEO from '@antv/gatsby-theme-antv/site/components/seo';
import BannerPage from '../components/bannerPage/bannerPage';
import ProductsPage from '../components/productsPage/productsPage';
import ResourcesPage from '../components/resourcesPage/resourcesPage';
import DescribePage from '../components/describePage/describePage';
import AdvantagesPage from '../components/advantagesPage/advantagesPage';
import QuotesPage from '../components/quotesPage/quotesPage';
import CompaniesPage from '../components/companiesPage/companiesPage';
import './variables.less';
import './index.less';

// function enquireScreen(): boolean {
//   /* eslint-disable no-unused-expressions */
//   // and (min-width: 320px)
//   let isMobile = false;
//   Enquire.register('only screen and (max-width: 768px)', {
//     match: () => {
//       isMobile = true;
//     },
//     unmatch: () => {
//       isMobile = false;
//     },
//   });
//   return isMobile;
//   /* eslint-enable no-unused-expressions */
// }

//const isMobile = enquireScreen();

const IndexPage = () => {
  const { t } = useTranslation();
  // const isMobile = enquireScreen();

  // console.log('isMobile', isMobile);
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
