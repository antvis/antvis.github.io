pt.sankey = pt.sankey || {};
pt.sankey.init = function() {
  var self = this;
  $.getJSON('https://os.alipayobjects.com/rmsportal/oClCmOTZmYCpTJzFFEQt.json', function(edges) {
    var Stat = G2.Stat; // 统计算法对象
    var Layout = G2.Layout; // 布局算法对像
    var chart = new G2.Chart({
      id: 'sankeyChart',
      width: 1000,
      height: 450,
      animate: false,
      plotCfg: {
        margin: [10, 50, 10, 5]
      }
    });
    chart.tooltip({
      title: null
    });
    chart.legend(false);
    // 桑基图布局
    var layout = new Layout.Sankey({
      edges: edges,
      thickness: 0.02 // 节点厚度
    });
    var nodes = layout.getNodes(); // 根据边数据自动创建出节点，并完成节点的布局
    // 创建边的视图
    var edgeView = chart.createView();
    edgeView.source(edges, {
      '..x': {
        min: 0,
        max: 1
      },
      '..y': {
        min: 0,
        max: 1
      }
    });
    edgeView.coord().transpose();
    edgeView.axis(false);
    edgeView.edge()
      // 由于边的坐标数据较多，此处使用统计函数简化语法，Stat.link计算布局后的边的坐标，放在..x和..y中，数值范围是 0-1
      .position(Stat.link.sankey('source*target*value', nodes)) // detachment：是否将节点的输入边和输出边权重分开计算的标志
      .shape('arc') // 使用弧线完成边的绘制
      .color('#bbb')
      .opacity(0.6)
      .tooltip('value');
    // 创建节点视图
    var nodeView = chart.createView();
    nodeView.axis(false);
    nodeView.source(nodes, {
      x: {
        min: 0,
        max: 1
      },
      y: {
        min: 0,
        max: 1
      }
    });
    nodeView.coord().transpose();
    nodeView.point()
      .position('x*y') // nodes数据的x、y由layout方法计算得出
      .color('id')
      .size('width*height', function(width, height) {
        return [width, height];
      })
      .shape('rect')
      .label('id', {
        renderer: function(text, item, index) {
          return text.substring(0, 5);
        },
        offset: 12
      })
      .style({
        stroke: '#ccc'
      });
    chart.render();
    self.chart = chart;
  });
};

pt.sankey.destroy = function() {
  this.chart && this.chart.destroy();
}
