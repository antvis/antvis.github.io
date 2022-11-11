import React, { useState, useEffect } from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import Banner from '../../.dumi/theme/slots/components/Banner/Banner';
import MobileBanner from '@antv/gatsby-theme-antv/site/components/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';
import Companies from '@antv/gatsby-theme-antv/site/components/Companies';
import ProductsPage from '../../.dumi/theme/slots/components/Products/Products';
import DecisionTreePage from '../../.dumi/theme/slots/components/DecisionTree/DecisionTree';
import ResourcesPage from '../../.dumi/theme/slots/components/Resources/Resources';
import DescribePage from '../../.dumi/theme/slots/components/Describe/Describe';
import QuotesPage from '../../.dumi/theme/slots/components/Quotes/Quotes';
import BannerSVG from '../../.dumi/theme/slots/components/bannerSVG/bannerSVG';
import { useMedia } from 'react-use';
import { useTranslation } from 'react-i18next';
import './index.less';

interface NotificationProps {
  index?: number;
  type: string;
  title: string;
  date: string;
  link: string;
}

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  const isWide = useMedia('(min-width: 767.99px)', true);

  const lang = i18n.language.includes('zh') ? 'zh' : 'en';
  const notificationsUrl = `https://my-json-server.typicode.com/antvis/antvis-sites-data/notifications?lang=${lang}`;

  const [remoteNews, setRemoteNews] = useState<NotificationProps[]>([]);

  useEffect(() => {
    fetch(notificationsUrl)
      .then((res) => res.json())
      .then((data) => {
        // 根据设计，目前只取最新的两条
        setRemoteNews(data.slice(0, 2));
      });
  }, [notificationsUrl]);

  const features = [
    {
      index: 0,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*aFeWRbIgIvUAAAAAAAAAAABkARQnAQ',
      title: t('简单方便'),
      description: t(
        '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      ),
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FTqlRqx8GJQAAAAAAAAAAABkARQnAQ',
      title: t('方便可靠'),
      description: t(
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
      ),
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*JA95TZfp_z4AAAAAAAAAAABkARQnAQ',
      title: t('无限可能'),
      description: t(
        '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
      ),
    },
  ];

  const companies = [
    {
      name: 'alicloud',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Z1NnQ6L4xCIAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'alipay',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*6u3hTpsd7h8AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'tmall',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*58snT4MwuGcAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'taobao',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*14yvRoRDs4wAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'mybank',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*Fw8HTbFgUdAAAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'jd',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*lUdjTqQix48AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'yunos',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*1q8NQZ9GaN0AAAAAAAAAAABkARQnAQ',
    },
    {
      name: 'cainiao',
      img:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*SqmTSqj4FjEAAAAAAAAAAABkARQnAQ',
    },
  ];

  const bannerButtons = [
    {
      text: t('继续了解'),
      link: '#products',
      type: 'primary',
    },
  ];

  const [animationStates, setAnimationState] = useState({
    play: true,
  });
  const onPlayVideo = () => {
    setAnimationState({
      play: false,
    });
  };
  const onCloseVideo = () => {
    setAnimationState({
      play: true,
    });
  };
  return (
    <>
      <SEO
        title={t('AntV')}
        titleSuffix={t('蚂蚁数据可视化')}
        description={t(
          `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。`,
        )}
        lang={i18n.language}
      />

      <div className="home-container">
        {isWide ? (
          <Banner remoteNews={remoteNews} />
        ) : (
          <>
            <MobileBanner
              className="banner"
              coverImage={<BannerSVG play={animationStates.play} />}
              description={t(
                'AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
              )}
              title={t('蚂蚁数据可视化')}
              showGithubStars={false}
              buttons={bannerButtons}
              video="https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/file/A*PDpiR4U2oFEAAAAAAAAAAABkARQnAQ"
              onPlayVideo={onPlayVideo}
              onCloseVideo={onCloseVideo}
              notifications={remoteNews}
            />
            <ProductsPage />
          </>
        )}

        <DecisionTreePage />
        <ResourcesPage />
        <DescribePage />
        <Features title={t('我们的优势')} features={features} />
        <QuotesPage />
        <Companies title={t('2000+ 公司正在使用')} companies={companies} />
      </div>
    </>
  );
};

export default IndexPage;
