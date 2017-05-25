pt.g6Force = pt.g6Force || {};

pt.g6Force.init = function() {
  var self = this;
  $.getJSON('/slides/g6/data/chengshifuwu.json', function(data) {
    var Util = G6.Util;
    var Layout = G6.Layout;
    // 自定义节点
    G6.registNode('customNode', {
      draw: function(cfg, group) {
        var origin = cfg.origin;
        var radius = cfg.size / 2;
        var attrs;
        var keyShape;
        attrs = {
          x: cfg.x,
          y: cfg.y,
          r: radius,
          fill: cfg.color
        };
        if (origin.active) {
          attrs.stroke = "#646464";
          attrs.lineWidth = 6;
          attrs.strokeOpacity = 0.9
        }
        keyShape = group.addShape('circle', {
          attrs: attrs
        });
        group.addShape('text', {
          attrs: {
            x: cfg.x + radius,
            y: cfg.y,
            text: cfg.label,
            fill: "#333",
            textAlign: 'left',
            fontSize: 16
          }
        });
        return keyShape;
      }
    });
    var layout = new Layout.Force({
      nodes: data.nodes,
      edges: data.edges
    });
    var net = new G6.Net({
      id: 'g6Force', // 容器ID
      width: 1440,
      height: 800, // 画布高
      useAnchor: null,
      // fitView: 'autoZoom', // 自动缩放
      // grid: null
    });
    net.source(data.nodes, data.edges);
    net.node()
      .color('#36E6BE')
      .size('value', function(val) {
        var sizeDomain = 100;
        return val / 100 * sizeDomain;
      })
      .label('id');
    net.edge()
      .size('value', function(val) {
        var sizeDomain = 10;
        return val / 100 * sizeDomain;
      })
      .label('value');
    net.render();
    layout.onNodeChange = function(id, point) {
      var node = net.find(id);
      net.update(node, {
        x: point.x * 60 + 300,
        y: point.y * 60 + 300
      });
      net.refresh();
    };
    self.net = net;
  });
};

pt.g6Force.destroy = function() {
  this.net && this.net.destroy();
}
