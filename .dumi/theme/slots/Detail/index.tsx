import React, { useEffect, useState } from 'react'
import ProductsPage from 'site/components/Products/Products';
import Banner from 'site/components/Banner/Banner'
import DecisionTreePage from 'site/components/DecisionTree/DecisionTree';
import ResourcesPage from 'site/components/Resources/Resources';
import DescribePage from 'site/components/Describe/Describe';
import QuotesPage from 'site/components/Quotes/Quotes';
import BannerSVG from 'site/components/bannerSVG/bannerSVG';
import MobileBanner from '@antv/dumi-theme-antv/dist/slots/Banner'
import { Features } from '@antv/dumi-theme-antv/dist/slots/Features';


import { useMedia } from 'react-use'
import { useLocale } from 'dumi';
import { useT } from '@antv/dumi-theme-antv/dist/slots/hooks'

interface NotificationProps {
  index?: number;
  type: string;
  title: string;
  date: string;
  link: string;
}

export const Detail: React.FC = () => {
  const isWide = useMedia('(min-width: 767.99px)', true);
  const locale = useLocale()
  const notificationsUrl = `https://my-json-server.typicode.com/antvis/antvis-sites-data/notifications?lang=${locale.id}`;
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
      title: useT('简单方便'),
      description: useT(
        '从数据出发，仅需几行代码可以轻松获得想要的图表展示效果。',
      ),
    },
    {
      index: 1,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FTqlRqx8GJQAAAAAAAAAAABkARQnAQ',
      title: useT('方便可靠'),
      description: useT(
        '大量产品实践之上，提供绘图引擎、完备图形语法，专业设计规范。',
      ),
    },
    {
      index: 2,
      icon:
        'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*JA95TZfp_z4AAAAAAAAAAABkARQnAQ',
      title: useT('无限可能'),
      description: useT(
        '任何图表，都可以基于图形语法灵活绘制，满足你无限的创意。',
      ),
    },
  ];

  const bannerButtons = [
    {
      text: useT('继续了解'),
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
      <div className="home-container">
        {isWide ? (
          <Banner remoteNews={remoteNews} />
      ) : (
          <>
             <MobileBanner
              className="banner"
              coverImage={<BannerSVG play={animationStates.play} />}
              description={useT(
                'AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
              )}
              title={useT('蚂蚁数据可视化')}
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
      <Features title={useT('我们的优势')} features={features} />
      <QuotesPage />
    </div>
  )
}

