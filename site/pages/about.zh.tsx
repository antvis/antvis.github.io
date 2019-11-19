import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import AboutUsBanner from '../components/AboutUsBanner/AboutUsBanner';
import BannerSVG from '../components/bannerSVG/bannerSVG';
import JoinUs from '../components/JoinUs/JoinUs';
import Feedback from '../components/Feedback/Feedback';
import Contributors from '../components/Contributors/Contributors';
import contributors from '../data/contributors';
import { useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO title={t('蚂蚁数据可视化')} lang={i18n.language} />
      <div className="home-container" style={{ marginTop: '-24px' }}>
        <AboutUsBanner bannerSVG={<BannerSVG play={true} />} />
        <Contributors title="贡献者名录" contributors={contributors} />
        {/* <ContributorsPage title="历史贡献者" contributors={historyContributors}/> */}
        <JoinUs />
        <Feedback />
      </div>
    </>
  );
};

export default AboutUsPage;
