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
    navs: [
      {
        slug: 'docs/specification',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
      },
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
        slug: 'specification/components',
        title: {
          zh: '图表组件设计指引',
          en: 'Design for Components of Charts',
        },
        order: 1,
      },
    ],
    docsearchOptions: {
      apiKey: '9d1cd586972bb492b7b41b13a949ef30',
      indexName: 'antv_g6',
    },
  },
};
