import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import AboutUsBannerPage from '../components/AboutUsBanner/AboutUsBanner';
import BannerSVG from '../components/BannerSVG/BannerSVG';
import JoinUsPage from '../components/JoinUs/JoinUs';
import FeedbackPage from '../components/Feedback/Feedback';
import ContributorsPage from '../components/Contributors/Contributors';
import contributors from '../data/contributors';
import { useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  const { t, i18n } = useTranslation();

  const bannerSVG = BannerSVG();

  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <div className="home-container" style={{ marginTop: '-24px' }}>
        <AboutUsBannerPage bannerSVG={bannerSVG} />
        <ContributorsPage title="贡献者名录" contributors={contributors} />
        {/* <ContributorsPage title="历史贡献者" contributors={historyContributors}/> */}
        <JoinUsPage />
        <FeedbackPage />
      </div>
    </>
  );
};

export default AboutUsPage;
