import { defineConfig } from 'astro/config';
import { antvSite } from '@antv/astro-theme-antv';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const siteConfig = {
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
      text: { zh: '设计语言', en: 'Design' },
      href: '/specification/principles/basic',
    },
  ],
  search: {
    enabled: false,
  },
  analytics: {
    GoogleAnalytics: { id: 'G-96Q5R280YF' },
  },
  home: {
    title: {
      zh: '让 AI 栩栩如生',
      en: 'Make AI come alive',
    },
    description: {
      zh: '蚂蚁企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力。',
      en: 'Enterprise visualization technology that helps people think visually in a world of data.',
    },
  },
  qa: {
    enabled: true,
  },
  slots: {
    home: {
      hero: ['./src/Home.astro'],
      features: ['./src/Content.astro'],
    },
  },
};

export default defineConfig({
  devToolbar: { enabled: false },
  integrations: [
    antvSite(siteConfig),
    react(),
    mdx(),
    sitemap(),
  ],
  redirects: { '/result': '/zh/result/' },
});
