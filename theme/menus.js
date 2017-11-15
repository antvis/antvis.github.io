var Menus = {
  g2: {
    title: 'G2',
    children: [{
      name: 'index',
      title: '快速上手',
      type: 'file',
      url: '/g2/doc/index'
    }, {
      name: 'tutorial',
      type: 'dir',
      title: '使用教程',
      children: [{
        name: 'start',
        type: 'dir',
        title: '基础教程'
      }, {
        name: 'advance',
        type: 'dir',
        title: '高级教程'
      }]
    }, {
      name: 'demo',
      type: 'file',
      title: '图表示例',
      url: '/g2/demo/index'
    }, {
      name: 'api',
      type: 'dir',
      title: 'API'
    }, {
      name: 'history',
      type: 'file',
      title: '更新日志',
      url: '/g2/doc/history'
    }]
  },
  'g2-mobile': {
    title: 'G2-mobile',
    children: [{
      name: 'index',
      title: '快速上手',
      type: 'file',
      url: '/g2-mobile/doc/index'
    }, {
      name: 'tutorial',
      type: 'dir',
      title: '使用教程'
    }, {
      name: 'demo',
      type: 'file',
      title: '图表示例',
      url: '/g2-mobile/demo/index'
    }, {
      name: 'api',
      title: 'API',
      url: '/g2-mobile/api/index'
    }, {
      name: 'history',
      type: 'file',
      title: '更新日志',
      url: '/g2-mobile/doc/history'
    }]
  },
  'g6': {
    title: 'G6',
    children: [{
      name: 'index',
      title: '快速上手',
      type: 'file',
      url: '/g6/doc/index'
    }, {
      name: 'tutorial',
      type: 'dir',
      title: '使用教程'
    }, {
      name: 'demo',
      type: 'file',
      title: '图表示例',
      url: '/g6/demo/index'
    }, {
      name: 'api',
      type: 'dir',
      title: 'API',
      url: ''
    }, {
      name: '/g6/doc/history',
      type: 'file',
      title: '更新日志'
    }, {
      name: 'tools',
      type: 'file',
      title: '在线工具',
      url: '/g6/tools/index'
    }]
  },
  vis: {
    title: '可视化基础',
    children: [{
      name: 'chart/classify',
      'title': '图表用法',
      type: 'dir'
    }, {
      name: 'design',
      title: '图表设计指引',
      type: 'dir',
      children: [{
        name: 'principle',
        title: '设计原则',
        type: 'dir'
      }, {
        name: 'rule',
        title: '组件规范',
        type: 'dir'
      }]
    }, {
      name: 'classic',
      title: '经典文献',
      type: 'file',
      url: '/vis/doc/reference'
    }]
  },
  icons: {
    '点图': '&#xe637;',
    '线图': '&#xe613;',
    '区域图': '&#xe618;',
    '柱状图': '&#xe612;',
    '饼图': '&#xe615;',
    '南丁格尔玫瑰图': '&#xe616;',
    '股票图': '&#xe627;',
    '漏斗图': '&#xe624;',
    '热力或色块图': '&#xe61b;',
    '地图': '&#xe60e;',
    'treemap': '&#xe61c;',
    '仪表盘': '&#xe62a;',
    '关系图': '&#xe60b;',
    '雷达图': '&#xe619;',
    '箱型图': '&#xe629;',
    '极坐标': '&#xe635;',
    '其他图表': '&#xe6e9;',
    '分面': '&#xe6ea;',
    'UML': '&#xe6e8;',
    '流图': '&#xe620;',
    '力导图': '&#xe6e5;',
    '其他': '&#xe6e9;',
    '树图': '&#xe61f;',
    '网图': '&#xe6e5;',
    '设计图': '&#xe6eb;',
    '编辑器': '&#xe6df',
    '画廊': '&#xe645',
    'gallery': '&#xe645'
  }
};

module.exports = Menus;
