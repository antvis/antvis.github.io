import fs from 'fs'
import path from 'path'
import { defineConfig } from 'dumi';
import { repository, version, homepage } from './package.json';
// import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

// const getExtraLib = () => {
//   try {
//     const extractorConfig = ExtractorConfig.loadFileAndPrepare(
//       path.resolve('./api-extractor.json'),
//     );
//     const extractorResult = Extractor.invoke(extractorConfig, {
//       localBuild: true,
//       showVerboseMessages: true,
//     });
//     if (extractorResult.succeeded) {
//       const typeFilePath = extractorResult.extractorConfig.untrimmedFilePath;
//       if (typeFilePath) {
//         return `declare module '${name}'{
//           ${fs.readFileSync(typeFilePath, `utf8`)}
//         }`;
//       }
//     }
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     console.warn(`api-extractor warn: ${e.message}`);
//   }
//   return '';
// };

export default defineConfig({
  locales: [{ id: 'zh', name: '中文' }, { id: 'en', name: 'English' }],
  title: 'G6',                                                          // 网站header标题
  favicons: ['https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original'], // 网站 favicon
  metas: [                                                              // 自定义 meta 标签  
    { name: 'keywords', content: 'G6' },
    { name: 'description', content: 'A collection of charts made with the Grammar of Graphics' },
  ],
  themeConfig: {
    title: 'G6',
    description: 'A collection of charts made with the Grammar of Graphics',
    defaultLanguage: 'zh',                                              // 默认语言
    isAntVSite: true,                                                  // 是否是 AntV 的大官网
    siteUrl: homepage,                                     // 官网地址
    githubUrl: repository.url,                                          // GitHub 地址
    showSearch: true,                                                   // 是否显示搜索框
    showGithubCorner: true,                                             // 是否显示头部的 GitHub icon
    showGithubStars: true,                                              // 是否显示 GitHub star 数量
    showAntVProductsCard: true,                                         // 是否显示 AntV 产品汇总的卡片
    showLanguageSwitcher: true,                                         // 是否显示官网语言切换
    showWxQrcode: true,                                                 // 是否显示头部菜单的微信公众号
    showChartResize: true,                                              // 是否在 demo 页展示图表视图切换
    showAPIDoc: true,                                                   // 是否在 demo 页展示API文档
    themeSwitcher: 'g2',
    versions: {                                                         // 历史版本以及切换下拉菜单
      [version]: 'https://g6.antv.vision',
      '3.2.x': 'https://g6-v3-2.antv.vision',
    },
    docsearchOptions: {                                                 // 头部搜索框配置
      apiKey: '9d1cd586972bb492b7b41b13a949ef30',
      indexName: 'antv_g6',
    },
    navs: [
      {
        slug: 'docs/specification',
        title: {
          zh: '设计',
          en: 'Design',
        },
      },
      {
        slug: 'case',
        title: {
          zh: '场景案例',
          en: 'Show Case',
        },
      },
    ],
    ecosystems: [                                                       // 头部的菜单中的「周边生态」

    ],
    docs: [
      {
        slug: 'specification/principles',
        title: {
          zh: '设计原则',
          en: 'Principles',
        },
        order: 0,
      },
      {
        slug: 'specification/language',
        title: {
          zh: '设计语言',
          en: 'Language',
        },
        order: 1,
      },
      {
        slug: 'specification/strategy',
        title: {
          zh: '设计策略',
          en: 'Strategies',
        },
        order: 2,
      },
      {
        slug: 'specification/graph',
        title: {
          zh: '图表设计指引',
          en: 'Visualization Guides',
        },
        order: 3,
      },
      {
        slug: 'specification/module',
        title: {
          zh: '组件设计指引',
          en: 'Components Guide',
        },
        order: 4,
      },
      {
        slug: 'specification/module/infoCom',
        title: {
          zh: '信息组件 Info Component',
          en: 'Info Componen',
        },
        order: 6,
      },
      {
        slug: 'specification/tool',
        title: {
          zh: '工具',
          en: 'Tools',
        },
        order: 6,
      },
    ],
    tutorials: [
      {
        slug: 'manual/about',
        title: {
          zh: '关于',
          en: 'About',
        },
        order: 1,
      },
    ],
    examples: [
      {
        slug: 'case',
        icon: 'gallery',
        title: {
          zh: '场景案例',
          en: 'Case',
        },
      },
      {
        slug: 'net',
        icon: 'net',
        title: {
          zh: '布局：一般图',
          en: 'Layout：General Graph',
        },
      },
      {
        slug: 'tree',
        icon: 'tree', // 图标名可以去 https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html 打开控制台查看图标类名
        title: {
          zh: '布局：树图',
          en: 'Layout：Tree Graph',
        },
      },
      {
        slug: 'item',
        icon: 'shape',
        title: {
          zh: '元素',
          en: 'Item',
        },
      },
      {
        slug: 'interaction',
        icon: 'interaction',
        title: {
          zh: '交互',
          en: 'Interaction',
        },
      },
      {
        slug: 'scatter',
        icon: 'scatter',
        title: {
          zh: '动画',
          en: 'Animation',
        },
      },
      {
        slug: 'tool',
        icon: 'tool',
        title: {
          zh: '组件',
          en: 'Component',
        },
      },
      {
        slug: 'algorithm',
        icon: 'gallery',
        title: {
          zh: '算法',
          en: 'Algorithm',
        },
      },
      {
        slug: 'performance',
        icon: 'net',
        title: {
          zh: '性能测试',
          en: 'Performance',
        },
      },
    ],
    mdPlayground: {
      // 第一个分块的大小
      splitPaneMainSize: '62%',
    },
    // playground: {
    //   extraLib: getExtraLib(),
    // },
    announcement: {
      zh: '',
      en: '',
    },
    /** 首页技术栈介绍 */
    detail: {
      title: {
        zh: 'G6 图可视化引擎',
        en: 'G6 Graph Visualization Engine',
      },
      description: {
        zh: 'G6 是一个简单、易用、完备的图可视化引擎，它在高定制能力的基础上，提供了一系列设计优雅、便于使用的图可视化解决方案。能帮助开发者搭建属于自己的图可视化、图分析、或图编辑器应用。',
        en: 'G6 is graph visualization engine with simplicity and convenience. Based on the ability of customize, it provides a set of elegant graph visualization solutions, and helps developers to build up applications for graph visualization, graph analysis, and graph editor.'
      },
      image: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*j5AqSpmNPdYAAAAAAAAAAABkARQnAQ',
      buttons: [
        {
          text: {
            zh: '图表示例',
            en: 'Examples',
          },
          link: `/examples`,
        },
        {
          text: {
            zh: '开始使用',
            en: 'Getting Started',
          },
          link: `/manual/introduction`,
          type: 'primary',
        },
      ],
    },
    /** 新闻公告，优先选择配置的，如果没有配置则使用远程的！ */
    news: [
      {
        type: {
          zh: '推荐',
          en: 'Recommand',
        },
        title: {
          zh: 'G6 家族新成员：GraphInsight',
          en: 'New to the G6 family: GraphInsight',
        },
        date: '2022.06.06',
        link: 'https://github.com/antvis/GraphInsight',
      },
      {
        type: {
          zh: '推荐',
          en: 'Recommand',
        },
        title: {
          zh: '不仅成长了一点',
          en: 'Not only grew a little',
        },
        date: '2022.11.22',
        link: 'https://www.yuque.com/antv/g6-blog/nnmqbk',
      },
    ],
    /** 首页特性介绍 */
    /** 首页案例 */
    /** 首页合作公司 */
    companies: [
      { name: '阿里云', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*V_xMRIvw2iwAAAAAAAAAAABkARQnAQ' },
      { name: '支付宝', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*lYDrRZvcvD4AAAAAAAAAAABkARQnAQ', },
      { name: '天猫', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*BQrxRK6oemMAAAAAAAAAAABkARQnAQ', },
      { name: '淘宝网', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*1l8-TqUr7UcAAAAAAAAAAABkARQnAQ', },
      { name: '网上银行', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*ZAKFQJ5Bz4MAAAAAAAAAAABkARQnAQ', },
      { name: '京东', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*yh-HRr3hCpgAAAAAAAAAAABkARQnAQ', },
      { name: 'yunos', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*_js7SaNosUwAAAAAAAAAAABkARQnAQ', },
      { name: '菜鸟', img: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*TgV-RZDODJIAAAAAAAAAAABkARQnAQ', },
    ],
  },
  alias: {
      site: '/site',
  },
  mfsu: false,
  links: [
  ],
  scripts: [
  ],
});
