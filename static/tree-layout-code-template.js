module.exports = options => {
  var treeSize = options.treeSize
  var layoutType = options.layoutType
  var direction = options.direction
  var hgap = options.hgap
  var vgap = options.vgap
  delete options.treeSize
  delete options.layoutType
  delete options.hgap
  delete options.vgap
  return `var G6 = require('@ali/g6');
// 详细文档见 ： https://antv.alipay.com/g6/doc/index.html
var randomGraph = require('random-graph/dist/randomGraph');

var randomTree = randomGraph.randomTree; // 创建随机树
var Util = G6.Util; // G6 Utils

var PEM = 18;
var treeData = randomTree({
  size: ${treeSize},
  attributes: {
    name: {
      type: 'randomString',
      options: {
        length: 0,
        maxLength: 16,
        categories: [
          // 'japanese',
          'letter',
          // 'chinese',
        ]
      }
    }
  }
});

// 准备布局配置
var layoutCfg = ${JSON.stringify(options, null, 2)}; 
${(layoutType === 'CompactBoxTree' || layoutType === 'IndentedTree') ? `layoutCfg.getHGap = function(d) {
  return ${hgap / 2};
};
layoutCfg.getVGap = function(d) {
  return ${vgap / 2};
};` : `// 自定义树节点
var DEFAULT_NODE_SIZE = 5;
G6.registNode('treeNode', {
  draw(cfg, group) {
    var origin = cfg.origin;
    var r = layoutCfg.nodeSize ? layoutCfg.nodeSize / 2 : DEFAULT_NODE_SIZE;
    var shapeCfg = {
      attrs: {
        x: cfg.x,
        y: cfg.y,
        r: r,
        stroke: '#999',
        fill: 'white',
        fillOpacity: 1,
      },
    };
    if (origin.children && origin.children.length) {
      shapeCfg.class = origin.isCollapsed ? 'spreadoutButton' : 'collapseButton';
    }
    return group.addShape('circle', shapeCfg);
  },
  afterDraw(cfg, group) {
    var origin = cfg.origin;
    var r = layoutCfg.nodeSize ? layoutCfg.nodeSize / 2 : DEFAULT_NODE_SIZE;
    var align = origin.align;
    var labelAttrs = {
      text: origin.name,
      fill: '#666',
      textBaseline: 'middle',
      x: cfg.x + r + DEFAULT_NODE_SIZE,
      y: cfg.y,
      textAlign: 'left',
    };
    if (align === 'R') {
      Util.mix(labelAttrs, {
        x: cfg.x - r - DEFAULT_NODE_SIZE,
        y: cfg.y,
        textAlign: 'right',
      });
    } else if (align === 'T' || align === 'CH') {
      Util.mix(labelAttrs, {
        x: cfg.x,
        y: cfg.y + r + DEFAULT_NODE_SIZE,
        textAlign: 'right',
        rotate: -Math.PI / 2,
      });
    } else if (align === 'B') {
      Util.mix(labelAttrs, {
        x: cfg.x,
        y: cfg.y - r - DEFAULT_NODE_SIZE,
        textAlign: 'left',
        rotate: -Math.PI / 2,
      });
    }
    var label = group.addShape('text', {
      attrs: labelAttrs,
    });
    return label;
  }
});`}
    
// 生成树图实例
var tree = new G6.Tree({
  id: 'mountNode',     // 容器ID
  layoutCfg,           // 布局配置
  forceFit: true,      // 宽度自适应
  fitView: 'autoZoom', // 自动缩放
  showButton: ${layoutType === 'CompactBoxTree' || layoutType === 'IndentedTree' ? 'true' : 'false'},
  height: 600,     // 画布高
  layoutFn: G6.Layout.${layoutType}, // 布局类型
});

// 加载数据
tree.source(treeData);

${(layoutType === 'CompactBoxTree' || layoutType === 'IndentedTree') ?
`tree.node()
  .label('name', name => name)
  .style({
    fillOpacity: 1
  });` : `tree.node().shape('treeNode');`
}
${
    (function () {
      var HORIZONTAL_DIRECTIONS = [
        'L',
        'R',
        'LR',
        'RL',
        'H',
      ];
      if (layoutType === 'Dendrogram') {
        return HORIZONTAL_DIRECTIONS.indexOf(direction) > -1 ?
          `tree.edge().shape('VH');` : `tree.edge().shape('HV');`
      } else if (layoutType === 'IndentedTree') {
        return `tree.edge().shape('VH');`
      } else {
        return `tree.edge().shape('smooth');`
      }
    })()
}

// 渲染树图
tree.render();`
}
