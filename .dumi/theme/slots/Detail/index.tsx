import React, { useEffect, useState } from 'react'
import Banner from 'site/components/Banner/Banner';
import { ThemeCharts } from 'site/components/ThemeCharts';
import { ComplexCharts } from 'site/components/ComplexCharts';
import { LinkCharts } from 'site/components/LinkCharts';
import { ProjectCard } from 'site/components/ProjectCard';
import { FamousPersons } from 'site/components/FamousPersons';
import { SEO } from '@antv/dumi-theme-antv/dist/slots/SEO'
import { useIntl, useLocale } from 'dumi';
interface NotificationProps {
  index?: number;
  type: string;
  title: string;
  date: string;
  link: string;
}

export const Detail: React.FC = () => {
  const locale = useLocale()
  const intl = useIntl()

  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage
    })
  }
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

  return (
    <div className="home-container" style={{ backgroundImage: 'linear-gradient(180deg, #F0E5FF 0%, #FFFFFF 13%, #FFFFFF 92%, #F7F8FD 100%)' }} >
      <SEO
        title={useT('AntV')}
        titleSuffix={useT('蚂蚁数据可视化')}
        description={useT(
          `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。`,
        )}
        lang={locale.id}
      />
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: '1200px' }}>
          <Banner remoteNews={remoteNews} />
          <ThemeCharts />
          <ComplexCharts />
          <LinkCharts />
          <ProjectCard />
          <FamousPersons />
        </div>
      </div>
    </div>
  )
}

