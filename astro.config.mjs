import { defineConfig } from '@antv/site';

export default defineConfig({
  site: {
    title: 'AntV',
    origin: 'https://antv.antgroup.com',
    repository: 'https://github.com/antvis/antvis.github.io',
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    favicon:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original',
    logo: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*A-lcQbVTpjwAAAAAAAAAAAAADmJ7AQ/original',
    description: {
      zh: 'AntV 是蚂蚁集团全新一代数据可视化解决方案，提供简单方便、专业可靠、无限可能的数据可视化最佳实践。',
      en: 'AntV is Ant Group’s next-generation data visualization solution, providing simple, reliable, and extensible visualization practices.',
    },
  },
  content: {
    docs: './docs',
    examples: null,
    edit: {
      branch: 'master',
      path: 'docs',
    },
    sidebar: {
      'specification/principles': {
        zh: '设计价值观',
        en: 'Design Values',
        order: 0,
      },
      'specification/language': {
        zh: '设计语言',
        en: 'Language',
        order: 1,
      },
      'specification/strategy': {
        zh: '设计策略',
        en: 'Strategies',
        order: 2,
      },
      'specification/graph': {
        zh: '图表设计指引',
        en: 'Visualization Guides',
        order: 3,
      },
      'specification/module': {
        zh: '组件设计指引',
        en: 'Component Guides',
        order: 4,
      },
      'specification/tool': {
        zh: '工具',
        en: 'Tools',
        order: 6,
      },
    },
  },
  navigation: [
    {
      text: { zh: '产品', en: 'Products' },
      href: '#products',
    },
    {
      text: { zh: '设计语言', en: 'Design' },
      href: '/specification/principles/basic',
    },
  ],
  search: {
    enabled: false,
  },
  home: {
    eyebrow: {
      zh: 'AntV 企业级数据可视化',
      en: 'Enterprise data visualization by AntV',
    },
    title: {
      zh: '让 AI 栩栩如生',
      en: 'Make AI come alive',
    },
    description: {
      zh: '蚂蚁企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力。',
      en: 'Enterprise visualization technology that helps people think visually in a world of data.',
    },
    showStats: false,
    actions: [],
    features: [],
  },
  qa: {
    path: 'result',
    enabled: true,
    defaultStack: 'g2',
    previewProducts: [],
  },
  slots: {
    home: {
      hero: ['./site/Home.astro'],
    },
  },
  theme: {
    tokens: {
      '--brand': '#691eff',
      '--brand-strong': '#5312d6',
      '--brand-button': '#5a16c9',
      '--brand-soft': '#f0e8ff',
      '--brand-faint': '#faf7ff',
    },
  },
  footer: {
    description: {
      zh: '从底层渲染到智能分析，构建开放、可靠的全栈数据可视化技术。',
      en: 'An open visualization stack spanning rendering, visual analysis, and intelligent tooling.',
    },
  },
  demo: {
    height: 480,
  },
});
