import { defineConfig } from 'dumi';
import { repository, version, homepage } from './package.json';
export default defineConfig({
  locales: [{ id: 'zh', name: '中文' }, { id: 'en', name: 'English' }],
  favicons: ['https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original'], // 网站 favicon
  metas: [                                                              // 自定义 meta 标签  
    { name: 'keywords', content: 'AntV' },
    { name: 'description', content: 'Ant Visualization solution' },
  ],
  themeConfig: {
    title: 'AntV',
    description: 'Ant Visualization solution',
    defaultLanguage: 'zh',                                              // 默认语言
    isAntVSite: true,                                                   // 是否是 AntV 的大官网
    footerTheme: 'light',
    siteUrl: homepage,                                     // 官网地址
    githubUrl: repository.url,                                          // GitHub 地址
    showSearch: true,                                                   // 是否显示搜索框
    showGithubCorner: true,                                             // 是否显示头部的 GitHub icon
    showAntVProductsCard: true,                                         // 是否显示 AntV 产品汇总的卡片
    showLanguageSwitcher: true,                                         // 是否显示官网语言切换
    showWxQrcode: true,                                                 // 是否显示头部菜单的微信公众号
    docsearchOptions: {                                                 // 头部搜索框配置
      apiKey: '9d1cd586972bb492b7b41b13a949ef30',
      indexName: 'antv_g6',
    },
    navs: [
      {
        slug: 'docs/specification',
        title: {
          zh: '设计语言',
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
      {
        slug: 'quick',
        title: {
          zh: '提交 Issue',
          en: 'Quick Issue'
        }
      }
    ],
    ecosystems: [                                                       // 头部的菜单中的「周边生态」

    ],
    docs: [
      {
        slug: 'specification/principles',
        title: {
          zh: '设计价值观',
          en: 'Design Values',
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
    ],
    mdPlayground: {
      // 第一个分块的大小
      splitPaneMainSize: '62%',
    },
    announcement: {
      zh: '',
      en: '',
    },
    /** 首页技术栈介绍 */
    detail: {
      title: {
        zh: 'Antv',
        en: 'Antv',
      },
      description: {
        zh: 'Ant Visualization solution',
        en: 'Ant Visualization solution',
      },
    },
  },
  alias: {
    site: '/site',
  },
  mfsu: false,
  analytics: {
    // google analytics 的 key (GA 4)
    // ga_v2: 'G-abcdefg',
    // 若你在使用 GA v1 旧版本，请使用 `ga` 来配置
    ga_v2: 'G-96Q5R280YF',
    // 百度统计的 key
    // baidu: 'baidu_tongji_key',
  },
  links: [
  ],
  scripts: [
  ],
});
