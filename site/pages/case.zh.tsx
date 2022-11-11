import React from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import ShowCase from '../../.dumi/theme/slots/components/ShowCase/ShowCase';

import { useTranslation } from 'react-i18next';

const CaseIndex = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO title={t('场景案例')} lang={i18n.language} />
      <div className="home-container" style={{ marginTop: '-24px' }}>
        <ShowCase />
      </div>
    </>
  );
};

export default CaseIndex;
