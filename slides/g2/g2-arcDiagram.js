pt.arcDiagram = pt.arcDiagram || {};
pt.arcDiagram.init = function() {
      var self = this;
      $.getJSON('https://os.alipayobjects.com/rmsportal/WgStbjtdSAvCyXEhBuRi.json', function(data) {
        var Stat = G2.Stat;// 统计算法对象
        var Layout = G2.Layout;// 布局算法对像
        var nodes = data.nodes; // 节点数据
        var links = data.links; // 边数据
        links.map(function(link){
          var sourceObj = nodes.filter(function(node){
            return node.id == link.source;
          })[0];
          link.type = sourceObj.modularity_class; // 边按照源节点的类型进行分类
        });
        var chart = new G2.Chart({
          id: 'arcDiagramChart',
          width: 1000,
          height: 800,
          animate: false,
          plotCfg:{
            margin: [80,0,80,0]
          }
        });
        // 线性布局Linear
        var layout = new Layout.Linear({
          nodes: nodes
        });
        nodes = layout.getNodes();// 获取布局后的节点数据
        chart.legend(false);
        chart.tooltip({
          title:null
        });
        // 创建边视图
        var edgeView = chart.createView();
        edgeView.source(links);
        edgeView.coord('polar').reflect('y');  // 使用极坐标，反转y轴(布局方法默认给y赋值为0)
        edgeView.axis(false);
        edgeView.edge()
        // 由于边的坐标数据较多，此处使用统计函数简化语法，Stat.link计算布局后的边的坐标，放在..x和..y中，数值范围是 0-1
          .position(Stat.link('source*target',nodes))
          .shape('arc') // 使用弧线完成边的绘制
          .color('type')
          .opacity(0.5)
          .tooltip('source*target');
        // 创建节点视图
        var nodeView = chart.createView();
        nodeView.coord('polar').reflect('y');
        nodeView.axis(false);
        nodeView.source(nodes);
        nodeView.point()
          .position('x*y') // nodes数据的x、y由layout方法计算得出
          .color('modularity_class')
          .size('size')
          .shape('circle')
          .label('label',{
          offset: 10,
          lableLine: false,
          labelEmit: true  // 配置label文字为放射状
        })
          .tooltip('size*modularity_class');
        chart.render();
        self.chart = chart;
      });
};

pt.arcDiagram.destroy = function() {
  this.chart && this.chart.destroy();
}
