import SEO from '@antv/dumi-theme-antv/dist/common/SEO';
import { Footer } from '@antv/dumi-theme-antv/dist/slots/Footer';
import { Header } from '@antv/dumi-theme-antv/dist/slots/Header';
import { useIntl, useLocale } from 'dumi';
import React from 'react';
import QuickIssue from 'site/components/quickIssue/QuickIssue';

const QuickIssueIndex: React.FC = () => {
  const locale = useLocale();
  const intl = useIntl();
  return (
    <>
      <Header />
      <SEO
        title={intl.formatMessage({
          id: 'quickIssue',
        })}
        lang={locale.id}
      />
      <div className="home-container">
        <QuickIssue />
      </div>
      <Footer />
    </>
  );
};

export default QuickIssueIndex;
