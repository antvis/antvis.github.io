const serialize = require('form-serialize')
const {
  randomTree
} = require('random-graph')
const codeTemplate = require('./tree-layout-code-template');

const PEM = 18;
const DEFAULT_NODE_SIZE = 5
const LAYOUTS = [
  'CompactBoxTree',
  'Dendrogram',
  'IndentedTree',
  'LayeredTidyTree',
];
const DIRECTIONS = [
  'LR',
  'RL',
  'TB',
  'BT',
  'H',
  'V'
]
const HORIZONTAL_DIRECTIONS = [
  'L',
  'R',
  'LR',
  'RL',
  'H',
]

function tmplDirectionsByLayout(layout) {
  let directions
  if (layout === LAYOUTS[2]) {
    directions = [
      DIRECTIONS[0],
      DIRECTIONS[1],
      DIRECTIONS[4]
    ]
  } else {
    directions = DIRECTIONS
  }
  return `${
    directions
      .map(direction => `<option value="${direction}">${direction}</option>`)
      .join('')
    }`
}

function tmplPropsByLayout(layout) {
  if (layout === LAYOUTS[0] || layout === LAYOUTS[4]) {
    return formItemsByMeta([
      {
        name: 'hgap'
      },
      {
        name: 'vgap'
      }
    ])
  }
  if (layout === LAYOUTS[1]) {
    return formItemsByMeta([
      {
        name: 'nodeSep'
      },
      {
        name: 'nodeSize'
      },
      {
        name: 'rankSep',
        value: 200
      },
      // {
      //   name: 'subTreeSep'
      // }
    ])
  }
  if (layout === LAYOUTS[2]) {
    return formItemsByMeta([
      {
        name: 'indent'
      },
      {
        name: 'vgap',
        min: 0
      }
    ])
  }
  if (layout === LAYOUTS[3]) {
    return formItemsByMeta([
      {
        name: 'nodeSep'
      },
      {
        name: 'nodeSize'
      },
      {
        name: 'rankSep',
        value: 200
      }
    ])
  }
}

const generateRandomTree = size => randomTree({
  size: size - 1,
  attributes: {
    id: {
      type: 'uuid'
    },
    name: {
      type: 'randomString',
      options: {
        length: 0,
        maxLength: 16,
        categories: [
          // 'japanese'
          'letter',
          // 'chinese',
          // 'special'
        ]
      }
    }
  }
})

const hasKey = (obj, key) => ({}.hasOwnProperty.call(obj, key))

function formItemsByMeta(arr) {
  return `${arr.map(item => {
      const props = Object.assign({
        min: 10,
        max: 200,
        value: 20
      }, item)
      return `<label class="form-label">${props.name}</label>
<input name="${props.name}" class="form-item" type="range"
 min="${props.min}" max="${props.max}" value="${props.value}"/>`
    }
  ).join('')}`
}

// dom elements
const $layoutProps = $('#layout-props');
const $layoutType = $('#layout-type');
const $direction = $('#direction');
const $propsContainer = $('#props-container');
const $canvasContainer = $('#canvas-container');
const $code = $('#code');
$layoutType.html(
  LAYOUTS.map(function (layout) {
    return '<option value="' + layout + '">' + layout + '</option>';
  }).join('')
)
$layoutType.on('change', () => {
  renderDirectionsAndProps()
});
$layoutProps.on('change', () => {
  render();
});
// $(window).on('resize', () => {
//   render();
// });

// fulfil props
function renderDirectionsAndProps() {
  const layout = $layoutType.val();
  $direction.html(tmplDirectionsByLayout(layout))
  $propsContainer.html(tmplPropsByLayout(layout))
}

function getProps() {
  const props = serialize($layoutProps[0], {
    hash: true
  })
  for (let key in props) {
    const numeric = parseInt(props[key], 10)
    if (!isNaN(numeric)) {
      props[key] = numeric
    }
  }
  return props
}

let tree = null

// render graph
function render() {
  if (tree) {
    tree.destroy()
  }
  const options = getProps()
  // drawing
  const treeData = generateRandomTree(options.treeSize)
  const layoutFn = G6.Layout[options.layoutType]
  const layoutCfg = Object.assign({
    getHGap (d) {
      if (d.isRoot) {
        return (hasKey(options, 'hgap') ? options.hgap : PEM) * 2
      }
      return (hasKey(options, 'hgap') ? options.hgap : PEM) / 2
    },
    getVGap (d) {
      if (d.isRoot) {
        return (hasKey(options, 'vgap') ? options.vgap : PEM) * 2
      }
      return (hasKey(options, 'vgap') ? options.vgap : PEM) / 2
    }
  }, options)

  tree = new G6.Tree({
    id: 'canvas-container', // 容器ID
    forceFit: true,         // 宽度自适应
    fitView: 'autoZoom',    // 自动缩放
    // 展开收缩按钮
    showButton: options.layoutType === 'CompactBoxTree' || options.layoutType === 'IndentedTree',
    height: $canvasContainer.height(), // 画布高
    layoutCfg,
    layoutFn,
  });
  tree.source(treeData);
  if (options.layoutType === 'CompactBoxTree' || options.layoutType === 'IndentedTree') {
    tree.node()
      .label('name', name => name)
      .style({
        fillOpacity: 1
      })
  } else {
    G6.registNode('treeNode', {
      draw(cfg, group) {
        const origin = cfg.origin;
        const r = layoutCfg.nodeSize ? layoutCfg.nodeSize / 2 : DEFAULT_NODE_SIZE;
        const shapeAttrs = {
          attrs: {
            x: cfg.x,
            y: cfg.y,
            r,
            stroke: '#999',
            fill: 'white',
            fillOpacity: 1,
          },
        };
        if (origin.children && origin.children.length) {
          shapeAttrs.class = origin.isCollapsed ? 'spreadoutButton' : 'collapseButton';
        }
        return group.addShape('circle', shapeAttrs);
      },
      afterDraw(cfg, group) {
        const origin = cfg.origin
        const r = options.nodeSize ? options.nodeSize / 2 : DEFAULT_NODE_SIZE
        const align = origin.align
        const labelAttrs = {
          text: origin.name,
          fill: '#666',
          textBaseline: 'middle',
          x: cfg.x + r + DEFAULT_NODE_SIZE,
          y: cfg.y,
          textAlign: 'left',
        }
        if (align === 'R') {
          Object.assign(labelAttrs, {
            x: cfg.x - r - DEFAULT_NODE_SIZE,
            y: cfg.y,
            textAlign: 'right',
          })
        } else if (align === 'T' || align === 'CH') {
          Object.assign(labelAttrs, {
            x: cfg.x,
            y: cfg.y + r + DEFAULT_NODE_SIZE,
            textAlign: 'right',
            rotate: -Math.PI / 2,
          })
        } else if (align === 'B') {
          Object.assign(labelAttrs, {
            x: cfg.x,
            y: cfg.y - r - DEFAULT_NODE_SIZE,
            textAlign: 'left',
            rotate: -Math.PI / 2,
          })
        }
        const label = group.addShape('text', {
          attrs: labelAttrs,
        })
        return label
      }
    });
    tree.node().shape('treeNode')
  }
  if (options.layoutType === 'Dendrogram') {
    tree.edge().shape(HORIZONTAL_DIRECTIONS.indexOf(options.direction) > -1 ? 'VH' : 'HV');
  } else if (options.layoutType === 'IndentedTree') {
    tree.edge().shape('VH');
  } else {
    tree.edge().shape('smooth');
  }
  tree.render();
  const code = codeTemplate(options)
  $code.val(code);
  console.log(tree)
}

renderDirectionsAndProps()
render()
