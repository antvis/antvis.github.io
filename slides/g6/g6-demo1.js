pt.langInfluence = pt.langInfluence || {};

pt.langInfluence.init = function() {
  var self = this;
  $.getJSON('/slides/g6/data/languageInfluenceNetwork.json', function(data) {
    var Util = G6.Util;
    G6.Global.nodeLabelStyle = {
      fill: '#fff',
      textAlign: 'left',
      textBaseline: 'middle',
      fontSize: 40
    };
    G6.registNode('circle', {
      afterDraw: function(cfg, group, keyShape) {
        var origin = cfg.origin;
        var size = origin.size;
        var bbox = keyShape.getBBox();
        var paddingLeft = 20;
        var y = (bbox.maxY + bbox.minY) / 2;
        var x = bbox.maxX + paddingLeft;
        if (size > 10) { // 只展示影响力大于 10 的线
          group.addShape('text', {
            attrs: {
              x: x,
              y: y,
              fill: '#fff',
              text: origin.language,
              textAlign: 'left',
              fontSize: 40,
              textBaseline: 'middle'
            }
          })
        }
      }
    });
    var net = new G6.Net({
      id: "langDiv", // 此处替换容器id
      height: 700, // 此处替换高度
      fitView: 'autoZoom', // 自动缩放
      useAnchor: false,
      mode: 'complicated',
      grid: null
    });
    var graphContainer = net.get('graphContainer');
    var nodeMap = {};
    var hideItem;
    Util.modiCSS(graphContainer, {
      background: '#222222'
    });
    Util.each(data.nodes, function(node) {
      nodeMap[node.id] = node;
      Util.mix(node, node.attributes);
      delete node.attributes;
    });
    net.tooltip(true);
    net.source(data.nodes, data.edges);
    net.node()
      .tooltip('language*size*modularityClass', function(language, size, modularityClass) {
        return [
          ['语言', language],
          ['影响力', size],
          ['模块数', modularityClass]
        ];
      })
      .size('size', function(size) {
        size = size <= 10 ? 10 : size;
        return rst;
      })
      .shape('circle')
      .style({
        fillOpacity: 1
      });
    net.edge()
      .shape('bezierQuadratic')
      .style({
        strokeOpacity: 0.8
      })
      .color('source', function(source) {
        return nodeMap[source].color;
      });
    net.render();
    net.on('mouseenter', function(ev) {
      var item = ev.item;
      var keyShape;
      var edges;
      var id;
      if (item.get('type') === 'node') {
        id = item.get('id');
        edges = item.get('edges');
        Util.each(edges, function(edge) {
          if (edge.get('model').source === id) {
            keyShape = edge.getKeyShape();
            keyShape.attr('lineWidth', 4);
          }
        });
        net.refresh();
      }
    });
    net.on('mouseleave', function(ev) {
      var item = ev.item;
      var keyShape;
      var edges;
      var id;
      if (item.get('type') === 'node') {
        id = item.get('id');
        edges = item.get('edges');
        Util.each(edges, function(edge) {
          if (edge.get('model').source === id) {
            keyShape = edge.getKeyShape();
            keyShape.attr('lineWidth', 1);
          }
        });
        net.refresh();
      }
    });
    net.on('click', function(ev) {
      var item = ev.item;
      var unRelativeItems;
      if (item && item.get('type') === 'node') {
        if (hideItem) {
          Util.each(hideItem, function(subItem) {
            subItem.show();
          });
          hideItem = null;
        }
        unRelativeItems = item.getUnRelativeItems();
        Util.each(unRelativeItems, function(subItem) {
          subItem.hide();
        });
        net.autoZoom();
        hideItem = unRelativeItems; // 缓存被隐藏的子项
      }
    });
    net.on('dblclick', function(ev) {
      if (hideItem) {
        Util.each(hideItem, function(subItem) {
          subItem.show();
        });
        hideItem = null;
      }
      net.autoZoom();
    });
    self.net = net;
  });
};

pt.langInfluence.destroy = function() {
  this.net && this.net.destroy();
}
