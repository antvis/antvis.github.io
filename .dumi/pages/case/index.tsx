import SEO from '@antv/dumi-theme-antv/dist/common/SEO';
import { Footer } from '@antv/dumi-theme-antv/dist/slots/Footer';
import { Header } from '@antv/dumi-theme-antv/dist/slots/Header';
import { useIntl, useLocale } from 'dumi';
import React from 'react';
import ShowCase from 'site/components/ShowCase/ShowCase';

const CaseIndex: React.FC = () => {
  const locale = useLocale();
  const intl = useIntl();
  return (
    <>
      <Header />
      <SEO
        title={intl.formatMessage({
          id: '场景案例',
        })}
        lang={locale.id}
      />
      <div className="home-container" style={{ marginTop: '-24px' }}>
        <ShowCase />
      </div>
      <Footer />
    </>
  );
};

export default CaseIndex;
