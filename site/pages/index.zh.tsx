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

interface Props {
  lang: string;
}
const IndexPage = (props: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="蚂蚁数据可视化" lang={props.lang} />
      <div className="home-container" style={{ marginTop: '-24px' }}>
        <BannerPage lang={props.lang} />
        <ProductsPage lang={props.lang} />
        <ResourcesPage lang={props.lang} />
        <DescribePage lang={props.lang} />
        <AdvantagesPage lang={props.lang} />
        <QuotesPage lang={props.lang} />
        <CompaniesPage lang={props.lang} />
      </div>
    </>
  );
};

export default IndexPage;
