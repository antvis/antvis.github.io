import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Location as RouterLocation } from '@reach/router';
import Footer from 'rc-footer';
import { getCurrentLangKey } from 'ptz-i18n';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import Header from './header';
import locale from '../locale.json';
import styles from './layout.module.less';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: locale,
    lng: 'zh',
    fallbackLng: 'zh',
  });

interface LayoutProps {
  children?: React.ReactNode;
  location?: Location;
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const { i18n } = useTranslation();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          languages {
            langs
            defaultLangKey
          }
        }
      }
    }
  `);

  const footerColumns = [
    {
      title: 'G2',
      items: [
        {
          title: '关于 G2',
          url: '',
        },
        {
          title: '图表示例',
          url: '',
        },
        {
          title: 'API 文档',
          url: '',
        },
        {
          title: '使用教程',
          url: '',
        },
      ],
    },
    {
      title: 'G6',
      items: [
        {
          title: '关于 G2',
          url: '',
        },
        {
          title: '图表示例',
          url: '',
        },
        {
          title: 'API 文档',
          url: '',
        },
        {
          title: '使用教程',
          url: '',
        },
      ],
    },
    {
      title: 'F2',
      items: [
        {
          title: '关于 G2',
          url: '',
        },
        {
          title: '图表示例',
          url: '',
        },
        {
          title: 'API 文档',
          url: '',
        },
        {
          title: '使用教程',
          url: '',
        },
      ],
    },
    {
      title: 'L7',
      items: [
        {
          title: '关于 G2',
          url: '',
        },
        {
          title: '图表示例',
          url: '',
        },
        {
          title: 'API 文档',
          url: '',
        },
        {
          title: '使用教程',
          url: '',
        },
      ],
    },
    {
      title: '墨者学院',
      items: [
        {
          title: '关于 G2',
          url: '',
        },
        {
          title: '图表示例',
          url: '',
        },
        {
          title: 'API 文档',
          url: '',
        },
        {
          title: '使用教程',
          url: '',
        },
      ],
    },
    {
      icon: (
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
          alt="more products"
        />
      ),
      title: '更多产品',
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="yuque"
            />
          ),
          title: '语雀',
          url: 'https://yuque.com',
          description: '知识创作与分享工具',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
              alt="yuque"
            />
          ),
          title: '云凤蝶',
          url: 'https://yunfengdie.com',
          description: '中台建站平台',
          openExternal: true,
        },
      ],
    },
  ];

  const {
    site: {
      siteMetadata: {
        title,
        languages: { langs, defaultLangKey },
      },
    },
  } = data;

  const currentLangKey = getCurrentLangKey(
    langs,
    defaultLangKey,
    location!.pathname,
  );

  useEffect(() => {
    if (i18n.language !== currentLangKey) {
      i18n.changeLanguage(currentLangKey);
    }
  }, [currentLangKey]);

  return (
    <>
      <Header
        siteTitle={title}
        location={location}
        currentLangKey={currentLangKey}
      />
      <main className={styles.main}>{children}</main>
      <Footer
        columns={footerColumns}
        bottom={
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://xtech.antfin.com/">AFX</a>
          </div>
        }
      />
    </>
  );
};

// here app catches the suspense from page in case translations are not yet loaded
export default function App(props: any) {
  return (
    <RouterLocation>
      {({ location }) => <Layout location={location} {...props} />}
    </RouterLocation>
  );
}
