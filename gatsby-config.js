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
    // https://github.com/antvis/antvis.github.io/issues/18#issuecomment-552097061
    /*
    /zh-cn/g2/3.x/demo/index.html
    /zh-cn/g2/3.x/demo/xxx/xxx.html
    /zh-cn/g6/3.x/index.html
    /zh-cn/g6/3.x/demo/index.html
    /zh-cn/g6/3.x/demo/xxx/xxx.html
    /zh-cn/f2/3.x/index.html
    /zh-cn/f2/3.x/demo/index.html
    /zh-cn/f2/3.x/demo/xxx/xxx.html
    /zh-cn/l7/1.x/index.html
    /zh-cn/l7/1.x/demo/index.html
    /zh-cn/l7/1.x/demo/xxx/xxx.html
    /zh-cn/vis/index.html
    */
    redirects: [
      {
        from: '/zh-cn/index\\.html',
      },
      {
        from: '/zh-cn/(g2|g6|f2|l7)/[0-9]\\.x',
      },
      {
        from: '/zh-cn/vis/index\\.html',
      },
    ],
  },
};
