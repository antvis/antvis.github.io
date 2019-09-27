import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout as AntLayout, Menu } from 'antd';
import { groupBy } from 'lodash-es';
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
  const slugPieces = slug.split('/');
  const pathPieces = path.split('/').slice(2);
  return slugPieces[0] === pathPieces[0];
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  path,
}: {
  data: any;
  path: string;
}) {
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds our post data
  const {
    frontmatter,
    html,
    fields: { slug },
  } = markdownRemark;
  const { edges = [] } = allMarkdownRemark;
  const groupedEdges = groupBy(
    edges,
    ({
      node: {
        parent: { relativeDirectory },
      },
    }: any) => relativeDirectory,
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
              .sort((a: string, b: string) => {
                if (docs[a] && docs[b]) {
                  return docs[a].order - docs[b].order;
                }
                return 0;
              })
              .map(slug => {
                if (!shouldBeShown(slug, path)) {
                  return null;
                }
                if (slug.split('/').length === 1 && docs[slug.split('/')[0]]) {
                  return renderMenuItems(groupedEdges[slug]);
                }
                if (slug.split('/').length > 1) {
                  return (
                    <Menu.SubMenu
                      key={slug}
                      title={
                        docs[slug] && docs[slug].title
                          ? docs[slug].title['zh-CN']
                          : slug
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
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
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
          }
          frontmatter {
            title
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;
