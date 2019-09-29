import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout as AntLayout, Menu } from 'antd';
import { groupBy } from 'lodash-es';
import { getCurrentLangKey } from 'ptz-i18n';
import Layout from '../components/layout';
import Article from '../components/article';
import SEO from '../components/seo';
import { docs } from '../../.antvisrc';
import styles from './markdown.module.less';

const renderMenuItems = (edges: any[]) =>
  edges.map((edge: any) => {
    const {
      node: {
        frontmatter: { title },
        fields: { slug },
      },
    } = edge;
    return (
      <Menu.Item key={slug}>
        <Link to={slug}>{title}</Link>
      </Menu.Item>
    );
  });

const shouldBeShown = (slug: string, path: string) => {
  const slugPieces = slug.split('/').slice(slug.split('/').indexOf('docs') + 1);
  const pathPieces = path.split('/').slice(slug.split('/').indexOf('docs') + 1);
  return slugPieces[0] === pathPieces[0];
};

const getMenuItemlocaleKey = (slug: string = '') => {
  const slugPieces = slug.split('/');
  const menuItemlocaleKey = slugPieces
    .slice(slugPieces.indexOf('docs') + 1)
    .filter(key => key)
    .join('/');
  return menuItemlocaleKey;
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  path,
}: {
  data: any;
  path: string;
}) {
  const { markdownRemark, allMarkdownRemark, site } = data; // data.markdownRemark holds our post data
  const {
    frontmatter,
    html,
    fields: { slug },
  } = markdownRemark;
  const { edges = [] } = allMarkdownRemark;
  const {
    siteMetadata: {
      languages: { langs, defaultLangKey },
    },
  } = site;
  const currentLangKey = getCurrentLangKey(langs, defaultLangKey, path);
  const groupedEdges = groupBy(edges, ({ node: { fields: { slug } } }: any) =>
    slug
      .split('/')
      .slice(0, -2)
      .join('/'),
  );

  const [openKeys, setOpenKeys] = useState<string[]>(Object.keys(groupedEdges));

  return (
    <Layout>
      <SEO title="Home" />
      <AntLayout style={{ background: '#fff' }}>
        <AntLayout.Sider width={280} theme="light">
          <Menu
            mode="inline"
            selectedKeys={[slug]}
            style={{ height: '100%' }}
            openKeys={openKeys}
            onOpenChange={openKeys => setOpenKeys(openKeys)}
          >
            {Object.keys(groupedEdges)
              .filter(key => key.startsWith(`/${currentLangKey}/`))
              .sort((a: string, b: string) => {
                const aKey = getMenuItemlocaleKey(a);
                const bKey = getMenuItemlocaleKey(b);
                if (docs[aKey] && docs[bKey]) {
                  return docs[aKey].order - docs[bKey].order;
                }
                return 0;
              })
              .map(slug => {
                if (!shouldBeShown(slug, path)) {
                  return null;
                }
                const slugPieces = slug.split('/');
                if (slugPieces.length <= 4) {
                  return renderMenuItems(groupedEdges[slug]);
                } else {
                  const menuItemlocaleKey = getMenuItemlocaleKey(slug);
                  return (
                    <Menu.SubMenu
                      key={slug}
                      title={
                        docs[menuItemlocaleKey] && docs[menuItemlocaleKey].title
                          ? docs[menuItemlocaleKey].title[currentLangKey]
                          : menuItemlocaleKey
                      }
                    >
                      {renderMenuItems(groupedEdges[slug])}
                    </Menu.SubMenu>
                  );
                }
              })}
          </Menu>
        </AntLayout.Sider>
        <Article className={styles.markdown}>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Article>
      </AntLayout>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        languages {
          langs
          defaultLangKey
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
        langKey
      }
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
