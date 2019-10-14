const { homepage, repository } = require('./package.json');

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
    description: `Ant Visualization solution home page`,
    siteUrl: homepage,
    githubUrl: repository.url,
    languages: {
      langs: ['en', 'zh'],
      defaultLangKey: 'zh',
    },
    docs: [
      {
        slug: 'specification',
        title: {
          zh: '设计语言',
          en: 'Specification',
        },
        order: 0,
        redirect: 'getting-started',
      },
      {
        slug: 'specification/category',
        title: {
          zh: '分类一',
          en: 'category1',
        },
        order: 1,
      },
      {
        slug: 'other',
        title: {
          zh: '其他文档',
          en: 'other',
        },
        order: 0,
        redirect: 'getting-started',
      },
      {
        slug: 'other/category',
        title: {
          zh: '分类二',
          en: 'category2',
        },
        order: 2,
      },
    ],
  },
};
