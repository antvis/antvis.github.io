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
    description: `Ant Visualization solution home page`,
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
    docs: [],
  },
};
