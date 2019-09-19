/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from 'rc-footer';

import Header from './header';
import './layout.less';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const footerColumns = [{
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }]

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer
        columns={footerColumns}
        bottom={
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="http://xtech.antfin.com/">AFX</a>
          </div>
        }
      />
    </>
  );
};

export default Layout;
