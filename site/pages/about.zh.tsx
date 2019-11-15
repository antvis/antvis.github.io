import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import AboutUsBannerPage from '../components/aboutUsBannerPage/aboutUsBannerPage';
import BannerSVG from '../components/bannerSVG/bannerSVG';
import JoinUsPage from '../components/joinUsPage/joinUsPage';
import FeedbackPage from '../components/feedbackPage/feedbackPage';
import ContributorsPage from '../components/contributorsPage/contributorsPage';
import contributors from '../data/contributors';
import { useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  const { t, i18n } = useTranslation();
  i18n.options.keySeparator = '>';

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
