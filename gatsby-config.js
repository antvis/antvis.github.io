module.exports = {
  plugins: [
    {
      resolve: `@antv/gatsby-theme-antv`,
      options: {
        GATrackingId: 'UA-148148901-1',
      },
    },
  ],
  siteMetadata: {
    title: `AntV`,
    description: `Ant Visualization solution`,
    siteUrl: 'https://antv.vision',
    githubUrl: 'https://github.com/antvis',
    isAntVSite: true,
    navs: [
      {
        slug: 'docs/specification',
        title: {
          zh: '设计',
          en: 'Specification',
        },
        
      },
      {
        slug: 'docs/example',
        title: {
          zh: '场景案例',
          en: 'Show Case',
        },
      }
    ],
    docs: [
      {
        slug: 'specification/principles',
        title: {
          zh: '设计原则',
          en: 'Design Principles',
        },
        order: 0,
      },
      {
        slug: 'specification/language',
        title: {
          zh: '设计语言',
          en: 'Design Principles',
        },
        order: 1,
      },
      {
        slug: 'specification/strategy',
        title: {
          zh: '设计策略',
          en: 'Design for Components of Charts',
        },
        order: 2,
      },
      {
        slug: 'specification/graph',
        title: {
          zh: '图形设计指引',
          en: 'Design for Components of Charts',
        },
        order: 3,
      },
      {
        slug: 'specification/module',
        title: {
          zh: '组件设计指引',
          en: 'Design for Components of Charts',
        },
        order: 4,
      },
      {
        slug: 'specification/module/infoCom',
        title: {
          zh: '信息组件 Info Component',
          en: 'Design for Components of Charts',
        },
        order: 0,
      },
      {
        slug: 'specification/resources',
        title: {
          zh: '资源下载',
          en: 'Design for Components of Charts',
        },
        order: 5,
      },
      {
        slug: 'specification/tool',
        title: {
          zh: '工具',
          en: 'Design for Components of Charts',
        },
        order: 6,
      },
      {
        slug: 'specification/standby',
        title: {
          zh: '备用',
          en: 'Design for Components of Charts',
        },
        order: 7,
      },
    ],
    docsearchOptions: {
      apiKey: '9d1cd586972bb492b7b41b13a949ef30',
      indexName: 'antv_g6',
    },
  },
};
