import React from "react"
import { graphql, Link } from "gatsby"
import { Layout as AntLayout, Menu } from 'antd';
import Layout from '../components/layout';
import Article from '../components/article';
import SEO from '../components/seo';
import styles from './markdown.module.less';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: any;
}) {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { edges = [] } = allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <AntLayout style={{ background: '#fff' }}>
        <AntLayout.Sider width={240} theme="light">
          <Menu
            mode="inline"
            selectedKeys={[frontmatter.path]}
            style={{ height: '100%' }}
          >
            {
              edges.map((edge: any) => {
                const { node: { frontmatter: { title, path } }} = edge;
                return (
                  <Menu.Item key={path}>
                    <Link to={path}>{title}</Link>
                  </Menu.Item>
                );
              })
            }
          </Menu>
        </AntLayout.Sider>
        <Article className={styles.markdown}>
          <h1>{frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Article>
      </AntLayout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
