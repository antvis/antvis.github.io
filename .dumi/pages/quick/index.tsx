import React from 'react';
import SEO from '@antv/dumi-theme-antv/dist/common/SEO';
import { useIntl, useLocale } from 'dumi';
import { Header } from '@antv/dumi-theme-antv/dist/slots/Header';
import { Footer } from '@antv/dumi-theme-antv/dist/slots/Footer';
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
