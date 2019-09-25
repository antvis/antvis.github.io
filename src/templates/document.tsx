import React from "react"
import { graphql } from "gatsby"
import { Layout as AntLayout, Menu } from 'antd';
import Layout from '../components/layout';
import Article from '../components/article';
import SEO from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: {
  data: any;
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <AntLayout style={{ background: '#fff' }}>
        <AntLayout.Sider width={240} theme="light">
          <Menu mode="inline" defaultSelectedKeys={['home']} style={{ height: '100%' }}>
            <Menu.Item key="home">首页</Menu.Item>
            <Menu.Item>文章</Menu.Item>
            <Menu.Item>文章</Menu.Item>
            <Menu.Item>文章</Menu.Item>
            <Menu.Item>文章</Menu.Item>
            <Menu.Item>文章</Menu.Item>
            <Menu.Item>文章</Menu.Item>
          </Menu>
        </AntLayout.Sider>
        <Article>
          <h2>{frontmatter.title}</h2>
          <div
            className="blog-post-content"
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
  }
`
