pt.g6SystemNet = pt.g6SystemNet || {};

pt.g6SystemNet.init = function() {
  $.getJSON('/slides/g6/data/systemNet.json',function(data){
        var Layout = G6.Layout;
        var Util = G6.Util;
        var map = {};
        var maxValue = 0;
        var maxValueTmp;
        var layout;
        var sizeDomain = 20;
        G6.Global.nodeLabelStyle = {
          fill: '#666',
          textAlign: 'center',
          fontSize: 12,
          textBaseline: 'middle'
        };
        G6.registNode('rect',{
          getAnchorPoints: function(){
            return 'auto'
          }
        });
        G6.registEdge('bezierQuadratic',{
          afterDraw: function(cfg, group, edge){
            var points = cfg.points;
            var start = points[0];
            var end = points[points.length - 1];
            var center = edge.getPoint(0.5);
            var lineWidth = edge.attr('lineWidth');
            if(lineWidth < 5){
              lineWidth = 5;
            }
            // 关于自身坐标系构造一个形，作为箭头
            var arrow = group.addShape('polyline', {
              attrs:{
                points: [
                  [-lineWidth/4, lineWidth/2],
                  [lineWidth/4, 0],
                  [-lineWidth/4, -lineWidth/2]
                ],
                stroke: '#333'
              },
              class: 'arrow'
            });
            arrow.hide();
            Util.arrowTo(arrow, center.x, center.y, center.x, center.y, end.x, end.y);
          }
        });
        Util.each(data.nodes, function(node){
          map[node.id] = node;
        });
        Util.each(data.edges, function(edge){
          maxValueTmp = parseInt(edge.value);
          if(maxValueTmp > maxValue) maxValue = maxValueTmp;
        });
        layout = new Layout.Force({
          nodes: data.nodes,
          edges: data.edges,
          stiffness: 100.0,         // 硬度
          damping: 0.1,             // 阻尼
          minEnergyThreshold: 200,  // 能量域值
          repulsion: 2000.0         // 斥力
        });
        var net = new G6.Net({
          id: 'g6SystemNet',           // 容器ID
          height: 800,
          fitView: 'autoZoom'
        });
        net.source(data.nodes, data.edges);
        net.node()
          .label('id')
          .style({
          fill: 'white',
          fillOpacity: 0.8
        });
        net.edge()
          .size('value', function(val){
          return Math.pow(parseInt(val)/maxValue, 1/3) * sizeDomain;
        })
          .style({
          opacity: 0.2
        })
          .shape('bezierQuadratic');
        layout.onNodeChange = function(id, point){
          map[id].x = point.x*60+400;
          map[id].y = point.y*60+400;
        };
        layout.onFinish = function(){
          net.render();
        };
        net.on('mouseenter', function(ev){
          var item = ev.item;
          var group;
          var arrow;
          if(!item || ev.itemType === 'edge') return;
          var unRelativeItems = item.getUnRelativeItems();
          var edges = item.get('edges');
          Util.each(unRelativeItems, function(v){
            v.hide();
          });
          Util.each(edges, function(v){
            group = v.get('group');
            arrow = group.findByCFG('class', 'arrow')[0];
            arrow.show();
          });
          net.refresh();
        });
        net.on('mouseleave', function(ev){
          var item = ev.item;
          var group;
          var arrow;
          if(!item || ev.itemType === 'edge') return;
          var unRelativeItems = item.getUnRelativeItems();
          var edges = item.get('edges');
          Util.each(unRelativeItems, function(v){
            v.show();
          });
          Util.each(edges, function(v){
            group = v.get('group');
            arrow = group.findByCFG('class', 'arrow')[0];
            arrow.hide();
          });
          net.refresh();
        });
      });
};
