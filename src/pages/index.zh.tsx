import React from 'react';
import { Skeleton } from 'antd';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="蚂蚁数据可视化" lang="zh" />
    <div style={{ margin: '0 auto', padding: '0 80px' }}>
      中文首页
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </Layout>
);

export default IndexPage;
