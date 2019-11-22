const { repository } = require('./package.json');

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
    githubUrl: repository.url,
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
        slug: 'specification/designPrinciples',
        title: {
          zh: '设计原则',
          en: 'Design Principles',
        },
        order: 0,
      },
      {
        slug: 'specification/componentDesignGuidance',
        title: {
          zh: '图表组件设计指引',
          en: 'Design for Components of Charts',
        },
        order: 1,
      },
    ],
  },
};
