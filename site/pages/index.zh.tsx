import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/seo';
import BannerPage from '../components/bannerPage/bannerPage';
import ProductsPage from '../components/productsPage/productsPage';
import ResourcesPage from '../components/resourcesPage/resourcesPage';
import DescribePage from '../components/describePage/describePage';
import AdvantagesPage from '../components/advantagesPage/advantagesPage';
import QuotesPage from '../components/quotesPage/quotesPage';
import CompaniesPage from '../components/companiesPage/companiesPage';
import { useTranslation } from 'react-i18next';
import './index.less';

// const IndexPage = () => {
//   const { t } = useTranslation();

//   // const browser={
//   //   versions:function(){
//   //     const u = navigator.userAgent,
//   //       app = navigator.appVersion;
//   //     return {
//   //       mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//   //       ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//   //       android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
//   //     };
//   //   }(),
//   //   language:(navigator.language).toLowerCase() // navigator.browserLanguage ||
//   // }
//   const isMobile = false;//browser.versions.mobile||browser.versions.android||browser.versions.ios;
//   console.log('homepage', isMobile);

//   return (
//     <>
//       <SEO title="蚂蚁数据可视化" lang="zh" />
//       <div className="home-container">
//         <BannerPage />
//         <ProductsPage isMobile={isMobile}/>
//         <ResourcesPage isMobile={isMobile}/>
//         <DescribePage />
//         <AdvantagesPage />
//         <QuotesPage isMobile={isMobile}/>
//         <CompaniesPage />
//       </div>
//     </>
//   );
// };

// export default IndexPage;

const isMobile = () => {
  const browser = {
    versions: (function() {
      const u = navigator.userAgent,
        app = navigator.appVersion;
      return {
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      };
    })(),
    language: navigator.language.toLowerCase(), // navigator.browserLanguage ||
  };
  return (
    browser.versions.mobile || browser.versions.android || browser.versions.ios
  );
};

interface States {
  isMobile: boolean;
}

export default class IndexPage extends React.Component<{}, States> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      isMobile: false, //isMobile(),
    };
  }

  render() {
    return (
      <>
        <SEO title="蚂蚁数据可视化" lang="zh" />
        <div className="home-container">
          <BannerPage />
          <ProductsPage isMobile={this.state.isMobile} />
          <ResourcesPage isMobile={this.state.isMobile} />
          <DescribePage />
          <AdvantagesPage />
          <QuotesPage isMobile={this.state.isMobile} />
          <CompaniesPage />
        </div>
      </>
    );
  }
}
