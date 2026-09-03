export type Locale = 'zh' | 'en';

export type LocalizedText = Record<Locale, string>;

export interface HomeLink {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
  label?: string;
  image?: string;
}

export interface ShowcaseItem extends HomeLink {
  product: string;
  image?: string;
  mediaTone?: 'dark';
  preview?: 'infographic';
  size: 'featured' | 'standard';
}

export const updates: HomeLink[] = [
  {
    label: 'Sive',
    title: {
      zh: 'Sive AI 可视化研发平台正式发布',
      en: 'Sive, the AI visualization workspace, is now available',
    },
    description: {
      zh: '把数据和想法变成可视化报告，让每一份洞察即刻可见、轻松分享。',
      en: 'Turn data and ideas into visual reports that are ready to see and share.',
    },
    href: 'https://sive.antv.antgroup.com/',
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*nRBgR5pM57cAAAAAQCAAAAgAemJ7AQ/original',
  },
  {
    label: 'WeaveFox',
    title: {
      zh: 'WeaveFox 全新版本发布',
      en: 'The new WeaveFox is now available',
    },
    description: {
      zh: '焕新上线，让创意灵感轻松落地。你的创意，值得让全世界看到。',
      en: 'Turn creative ideas into polished visual work and share them with the world.',
    },
    href: 'https://weavefox.cn/',
  },
  {
    label: 'OSCP',
    title: {
      zh: 'AntV 开源共建持续进行',
      en: 'Build the open AntV ecosystem together',
    },
    description: {
      zh: '从代码、文档到案例，与全球开发者共同建设下一代可视化技术。',
      en: 'Contribute code, documentation, and examples to the next generation of visualization tooling.',
    },
    href: 'https://github.com/antvis',
  },
];

export const aiSolutions: HomeLink[] = [
  {
    label: 'Context',
    title: { zh: '准确、实时的产品知识', en: 'Accurate product knowledge' },
    description: {
      zh: '根据产品与 query 召回最新官方文档、API Schema 和示例等内容。',
      en: 'Retrieve current official docs, API schemas, and examples for each product and query.',
    },
    href: 'https://github.com/antvis/context',
  },
  {
    label: 'Skills',
    title: {
      zh: '将 AntV 经验变成 AI 能力',
      en: 'Turn AntV practice into AI skills',
    },
    description: {
      zh: '内置图表组件、图表示例、关系图、图编辑和代码工程化等专业能力。',
      en: 'Package charting, graph analysis, diagramming, and engineering practice as reusable capabilities.',
    },
    href: 'https://github.com/antvis/chart-visualization-skills',
  },
  {
    label: 'MCP',
    title: {
      zh: '连接数据、工具与研发环境',
      en: 'Connect data, tools, and development',
    },
    description: {
      zh: '通过 MCP 调用数据分析、图表生成、实时渲染、代码检查和发布能力。',
      en: 'Use MCP for analysis, chart generation, live rendering, code checks, and publishing.',
    },
    href: 'https://github.com/antvis/mcp-server-antv',
  },
  {
    label: 'AVA',
    title: {
      zh: '理解数据，而不只是生成代码',
      en: 'Understand data, not only code',
    },
    description: {
      zh: '识别字段语义和分析意图，完成智能选图、异常发现、洞察生成与质量评估。',
      en: 'Infer semantics and intent for chart recommendation, anomaly detection, insights, and quality checks.',
    },
    href: 'https://ava.antv.antgroup.com/',
  },
  {
    label: 'GPT Vis',
    title: { zh: 'AI 原生可视化', en: 'AI native visualization' },
    description: {
      zh: '连接 AI 与底层图表引擎的 AI 原生可视化组件库。',
      en: 'A visualization component library connecting AI applications with chart engines.',
    },
    href: 'https://gpt-vis.antv.vision/',
  },
  {
    label: 'Infographic',
    title: {
      zh: '新一代声明式信息图引擎',
      en: 'A declarative infographic engine',
    },
    description: {
      zh: '面向 AI 快速创作专业、可编辑、可流式呈现的信息图。',
      en: 'Create professional, editable, streaming infographics with concise AI friendly syntax.',
    },
    href: 'https://infographic.antv.vision/',
  },
];

export const showcases: ShowcaseItem[] = [
  {
    product: 'G2',
    title: { zh: '统计图表', en: 'Statistical charts' },
    description: {
      zh: '基于图形语法的统计可视化引擎，以声明式、可组合的方式构建专业交互图表。',
      en: 'A declarative and composable grammar for professional interactive statistical charts.',
    },
    href: 'https://g2.antv.antgroup.com/examples/animation/group/#interval',
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*3xCLRLNfv7EAAAAAAAAAAAAADmJ7AQ/original',
    size: 'featured',
  },
  {
    product: 'S2',
    title: { zh: '多维表格', en: 'Multidimensional tables' },
    description: {
      zh: '开箱即用的多维可视分析表格，适配复杂分析和业务报表场景。',
      en: 'Practical multidimensional tables for complex analysis and business reporting.',
    },
    href: 'https://s2.antv.vision/zh/examples/case/proportion/#single-population-proportion',
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*uxT9RowSdT4AAAAAAAAAAAAADmJ7AQ/original',
    size: 'standard',
  },
  {
    product: 'F2',
    title: { zh: '统计图表（移动端）', en: 'Mobile charts' },
    description: {
      zh: '轻量、高性能的移动可视化引擎，适配 H5、小程序和多端交互。',
      en: 'A lightweight, high performance engine for mobile and multi-device experiences.',
    },
    href: 'https://f2.antv.antgroup.com/examples/creative/case/#timeline',
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*M6ubT4Mv7pcAAAAAAAAAAAAADmJ7AQ/original',
    size: 'standard',
  },
  {
    product: 'G6',
    title: { zh: '图可视化', en: 'Graph visualization' },
    description: {
      zh: '面向关系数据的图可视化引擎，提供丰富布局、分析能力与大规模图渲染。',
      en: 'Graph visualization with rich layouts, analysis, and large-scale rendering.',
    },
    href: 'https://g6.antv.antgroup.com/examples/scene-case/default/#why-do-cats',
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ug4vTJA7QbMAAAAAAAAAAAAADmJ7AQ/original',
    size: 'standard',
  },
  {
    product: 'X6',
    title: { zh: '图编辑', en: 'Diagramming' },
    description: {
      zh: '面向流程图和节点编辑场景的图编辑引擎，支持灵活定制与复杂编排。',
      en: 'A customizable diagramming engine for workflows and complex node editing.',
    },
    href: 'https://x6.antv.antgroup.com/examples/showcase/practices/#agentFlow',
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*0H-HQJrdpMsAAAAAAAAAAAAADmJ7AQ/original',
    size: 'standard',
  },
  {
    product: 'L7',
    title: { zh: '地理可视化', en: 'Geospatial visualization' },
    description: {
      zh: '支持大规模空间数据、多图层与 WebGL 渲染的地理可视化引擎。',
      en: 'Large-scale geospatial visualization with multilayer WebGL rendering.',
    },
    href: 'https://l7.antv.antgroup.com/examples/gallery/animate/#build_sweep',
    image:
      'https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*TVs2R4bBH6wAAAAAAAAAAAAAARQnAQ',
    mediaTone: 'dark',
    size: 'featured',
  },
  // {
  //   product: 'Infographic',
  //   title: { zh: '让文字，生动成图', en: 'Bring words to life' },
  //   description: {
  //     zh: '面向 AI 的声明式信息图引擎，以简洁语法创作专业、可编辑的信息图。',
  //     en: 'An AI friendly declarative engine for professional, editable infographics.',
  //   },
  //   href: 'https://infographic.antv.vision/gallery/sequence-cylinders-3d-simple',
  //   image:
  //     'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*lfHDSZC3_lEAAAAAUgAAAAgAemJ7AQ/fmt.avif',
  //   preview: 'infographic',
  //   size: 'standard',
  // },
];

export const experts = [
  {
    name: 'Leland Wilkinson',
    role: {
      zh: '伊利诺伊大学计算机科学客座教授，G2 项目顾问',
      en: 'Adjunct professor of computer science and advisor to G2',
    },
    quote: {
      zh: 'G2 忠实继承了图形语法体系，并具备生成更多图形表达的潜力。',
      en: 'G2 is amazingly faithful to the grammar of graphics and has the potential to generate many more visual forms.',
    },
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*PmHhRqLpMC8AAAAAAAAAAAAADmJ7AQ/original',
  },
  {
    name: '陈为',
    role: {
      zh: '浙江大学计算机学院 CAD & CG 国家重点实验室教授',
      en: 'Professor at Zhejiang University State Key Lab of CAD & CG',
    },
    quote: {
      zh: 'AntV 是工业界在基础可视化语法与实践方面发出的有力声音，也是产学共同推进可视化研发的重要工具。',
      en: 'AntV is a strong industry contribution to visualization grammar and practice, connecting research with production.',
    },
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tf_6R6uH9GsAAAAAAAAAAAAADmJ7AQ/original',
  },
  {
    name: '林峰',
    role: {
      zh: '可视化开发者与社区贡献者',
      en: 'Visualization engineer and community contributor',
    },
    quote: {
      zh: 'G2 从小而清晰的语法出发，帮助开发者组合出丰富而有生命力的图形表达。',
      en: 'G2 starts from a small, clear grammar and helps developers compose expressive visual forms.',
    },
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ssmVSLzYA-kAAAAAAAAAAAAADmJ7AQ/original',
  },
  {
    name: '它山',
    role: {
      zh: 'Ant Design / AntV 设计负责人',
      en: 'Design lead for Ant Design and AntV',
    },
    quote: {
      zh: '设计让数据美而简单，也让可视化更普惠。好的策略与资产，能够支撑更好的报表和产品。',
      en: 'Design makes data beautiful and clear. Strong principles and assets lead to better reports and products.',
    },
    image:
      'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*gwZ1S6Yc8IkAAAAAAAAAAAAADmJ7AQ/original',
  },
];

export const ecosystem = [
  {
    name: 'Sive',
    description: { zh: 'AI 可视化研发平台', en: 'AI visualization workspace' },
    href: 'https://sive.antv.antgroup.com/',
  },
  {
    name: 'Ant Design Charts',
    description: { zh: '可视化图表库', en: 'Visualization chart library' },
    href: 'https://charts.ant.design/',
  },
  {
    name: 'Editor',
    description: {
      zh: '用自然语言研发图表',
      en: 'Build charts with natural language',
    },
    href: 'https://sive.antv.antgroup.com/',
  },
];

export const foundation = [
  ['G2', '统计图表', 'Statistical charts', 'https://g2.antv.antgroup.com/'],
  [
    'S2',
    '多维表格',
    'Multidimensional tables',
    'https://s2.antv.antgroup.com/',
  ],
  ['F2', '移动统计图', 'Mobile charts', 'https://f2.antv.antgroup.com/'],
  ['G6', '关系图', 'Graphs', 'https://g6.antv.antgroup.com/'],
  ['X6', '图编辑', 'Diagramming', 'https://x6.antv.antgroup.com/'],
  ['L7', '地图', 'Maps', 'https://l7.antv.antgroup.com/'],
  // ['Infographic', '信息图', 'Infographics', 'https://infographic.antv.vision/'],
] as const;
