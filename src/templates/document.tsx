import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout as AntLayout, Menu, Icon, Tooltip, Affix, Tag } from 'antd';
import { groupBy } from 'lodash-es';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { getCurrentLangKey } from 'ptz-i18n';
import packageJson from '../../package.json';
import Layout from '../components/layout';
import Article from '../components/article';
import SEO from '../components/seo';
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

const getDocument = (docs: any[], slug: string = '') => {
  return docs.find(doc => doc.slug === slug);
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
    tableOfContents,
    fields: { slug, readingTime },
    parent: { relativePath },
  } = markdownRemark;
  const { edges = [] } = allMarkdownRemark;
  const {
    siteMetadata: {
      languages: { langs, defaultLangKey },
      docs,
    },
  } = site;
  const currentLangKey = getCurrentLangKey(langs, defaultLangKey, path);
  const groupedEdges = groupBy(edges, ({ node: { fields: { slug } } }: any) =>
    slug
      .split('/')
      .slice(0, -1)
      .join('/'),
  );
  const [openKeys, setOpenKeys] = useState<string[]>(Object.keys(groupedEdges));
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <Layout>
      <SEO title={frontmatter.title} lang={currentLangKey} />
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
                const aDoc = getDocument(docs, aKey);
                const bDoc = getDocument(docs, bKey);
                if (aDoc && bDoc) {
                  return aDoc.order - bDoc.order;
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
                  const doc = getDocument(docs, menuItemlocaleKey);
                  return (
                    <Menu.SubMenu
                      key={slug}
                      title={
                        doc && doc.title
                          ? doc.title[currentLangKey]
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
          <Affix>
            <div
              className={styles.toc}
              dangerouslySetInnerHTML={{ __html: tableOfContents }}
            />
          </Affix>
          <div className={styles.main}>
            <h1>
              {frontmatter.title}
              <Tooltip title="在 GitHub 上编辑">
                <a
                  href={`${packageJson.repository.url}/edit/master/${relativePath}`}
                  target="_blank"
                  className={styles.editOnGtiHubButton}
                >
                  <Icon type="edit" />
                </a>
              </Tooltip>
            </h1>
            <div>
              <Tag>
                {currentLanguage === 'zh'
                  ? moment(readingTime.time).format('阅读时间约 M 分钟')
                  : readingTime.text}
              </Tag>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
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
        docs {
          slug
          title {
            zh
            en
          }
          order
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      tableOfContents
      fields {
        slug
        langKey
        readingTime {
          text
          time
        }
      }
      frontmatter {
        title
      }
      parent {
        ... on File {
          relativePath
        }
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
