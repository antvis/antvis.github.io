import SEO from '@antv/dumi-theme-antv/dist/common/SEO';
import { useIntl, useLocale } from 'dumi';
import { debounce } from 'lodash';
import React, { useEffect, useRef } from 'react';
import Banner from 'site/components/Banner/Banner';
import { ComplexCharts } from 'site/components/ComplexCharts';
import { FamousPersons } from 'site/components/FamousPersons';
import { LinkCharts } from 'site/components/LinkCharts';
import { ProjectCard } from 'site/components/ProjectCard';
import { ThemeCharts } from 'site/components/ThemeCharts';

export const Detail: React.FC = () => {
  const locale = useLocale();
  const intl = useIntl();
  const ref = useRef(null);

  const useT = (transformedMessage: string) => {
    return intl.formatMessage({
      id: transformedMessage,
    });
  };

  useEffect(() => {
    const onResize = debounce(() => {
      if (ref?.current) {
        const scrollDom = ref?.current as HTMLDivElement;
        const { clientWidth, scrollWidth } = scrollDom;
        scrollDom.scrollLeft = (scrollWidth - clientWidth) / 2;
      }
    }, 100);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage:
          'linear-gradient(180deg, #F0E5FF 0%, #FFFFFF 13%, #FFFFFF 92%, #F7F8FD 100%)',
      }}
    >
      <SEO
        title={useT('AntV')}
        titleSuffix={useT('蚂蚁数据可视化')}
        description={useT(
          `AntV 是蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。`,
        )}
        lang={locale.id}
      />
      <div style={{ overflowX: 'auto' }} ref={ref}>
        <div style={{ minWidth: '1280px', scrollSnapAlign: 'center' }}>
          <Banner />
          <ThemeCharts />
          <ComplexCharts />
          <LinkCharts />
          <ProjectCard />
          <FamousPersons />
        </div>
      </div>
    </div>
  );
};
