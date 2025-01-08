import React from 'react';
import SEO from '@antv/dumi-theme-antv/dist/common/SEO';
import ShowCase from 'site/components/ShowCase/ShowCase';
import { useIntl, useLocale } from 'dumi';
import { Header } from '@antv/dumi-theme-antv/dist/slots/Header';
import { Footer } from '@antv/dumi-theme-antv/dist/slots/Footer';

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
