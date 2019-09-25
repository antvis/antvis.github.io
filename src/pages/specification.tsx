import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import Layout from '../components/layout';
import Article from '../components/article';
import SEO from '../components/seo';

const IndexPage = () => (
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
        <h2>标题</h2>
        内容
      </Article>
    </AntLayout>
  </Layout>
);

export default IndexPage;
