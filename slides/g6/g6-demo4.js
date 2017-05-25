pt.g6RiverFlow = pt.g6RiverFlow || {};
pt.g6Flow = pt.g6Flow || {};

pt.g6RiverFlow.init = function() {
var Util = G6.Util;
      /**
 * 添加水波
 * @param {number} x           中心x
 * @param {number} y           中心y
 * @param {number} level       水位等级 0～1
 * @param {number} waveCount   水波数
 * @param {number} colors      色值
 * @param {number} group       图组
 * @param {number} clip        用于剪切的图形
 */
      function addWaterWave(x, y, level, waveCount, colors, group, clip){
        var wave;
        var bbox = clip.getBBox();
        var width = bbox.maxX - bbox.minX;
        var height = bbox.maxY - bbox.minY;
        var duration = 2800;
        var delayDiff = 300;
        var minorWaveDiff = 10;
        for (var i = 0; i < waveCount; i++) {
          wave = group.addShape('path', {
            attrs: {
              path: Util.getWaterPath(
                width/2,
                (y+height/2) - height * level + i*minorWaveDiff,
                50, 0, 2, x, y
              ),
              fill: colors[i],
              clip: clip
            }
          });
          wave.animate({
            transform: [
              ['t', width/2, 0]
            ],
            repeat: true
          }, duration - i * delayDiff);
        }
      }
      // 第一步：获取数据
      var data = {
        "nodes": [
          {
            "label": "首页",
            "val": 90,
            "runoff": 30,
            "id": "add1174b"
          },
          {
            "label": "页面1",
            "val": 70,
            "runoff": 30,
            "id": "fbc69eaa"
          },
          {
            "label": "页面2",
            "val": 10,
            "runoff": 90,
            "id": "6d0df4b8"
          },
          {
            "label": "页面3",
            "val": 40,
            "runoff": 60,
            "id": "fcaedf74"
          },
          {
            "label": "页面4",
            "val": 30,
            "runoff": 99,
            "id": "0ce831a6"
          },
          {
            "label": "页面5",
            "val": 15,
            "runoff": 85,
            "id": "46c87dc5"
          },
          {
            "label": "页面6",
            "val": 60,
            "runoff": 99,
            "id": "a7ae06e1"
          },
          {
            "label": "页面7",
            "val": 10,
            "runoff": 99,
            "id": "97d725aa"
          },
          {
            "label": "页面8",
            "val": 1,
            "runoff": 99,
            "id": "1009d1ce"
          }
        ],
        "edges": [
          {
            "source": "add1174b",
            "target": "fbc69eaa",
            "val": 80,
            "id": "ae85ce02"
          },
          {
            "source": "add1174b",
            "target": "6d0df4b8",
            "val": 40,
            "id": "4f2a272a"
          },
          {
            "source": "add1174b",
            "target": "fcaedf74",
            "val": 47,
            "id": "e1d27d5d"
          },
          {
            "source": "fbc69eaa",
            "target": "0ce831a6",
            "val": 70,
            "id": "ebb1bb90"
          },
          {
            "source": "fbc69eaa",
            "target": "46c87dc5",
            "val": 60,
            "id": "de5483e7"
          },
          {
            "source": "fcaedf74",
            "target": "a7ae06e1",
            "val": 50,
            "id": "38631f93"
          },
          {
            "source": "6d0df4b8",
            "target": "97d725aa",
            "val": 40,
            "id": "ca7e320d"
          },
          {
            "source": "46c87dc5",
            "target": "1009d1ce",
            "val": 30,
            "id": "7dc8fe14"
          },
          {
            "source": "fbc69eaa",
            "target": "a7ae06e1",
            "val": 20,
            "id": "a0318c7b"
          }
        ]
      };
      // 第二步：注册图形
      G6.registNode('waterTank', {
        draw: function(cfg, group){
          var width = 100;
          var height = 60;
          var labelMarginTop = 10;
          var shape = group.addShape('rect', {
            attrs: {
              x: cfg.x-width/2,
              y: cfg.y-height/2,
              width: width,
              stroke: '#ccc',
              lineDash: [5,5],
              height: height
            }
          });
          addWaterWave(cfg.x, cfg.y, cfg.size, 3, ['#073069', '#0076C9', '#7EC2F3'], group, shape);
          group.addShape('text', {
            attrs: {
              x: cfg.x,
              y: cfg.y + height/2 + labelMarginTop,
              text: cfg.label,
              textAlign: 'center',
              textBaseline: 'top',
              fill: '#666'
            }
          });
          return shape;
        },
        // 设置锚点
        getAnchorPoints: function(){
          return [
            [1, 0.5], // 右边边的中点
            [0, 0.5] // 左边边的中点
          ];
        }
      });
      // 第三步：进行布局
      var Layout = G6.Layout;
      var margin = 60;
      var height = 800 - 2 * margin;
      var width = 500 - 2 * margin;
      var nodes = data.nodes;
      var edges = data.edges;
      var layout = new Layout.Flow({
        nodes: nodes,
        edges: edges
      });
      nodes = layout.getNodes();
      nodes.map(function(node) {
        var x = node.x * width + margin;
        var y = node.y * height + margin;
        node.x = y;
        node.y = x;
      });
      // 第四步：初始化图
      var net = new G6.Net({
        id: "g6RiverFlow", // 此处替换容器id
        height: 800,         // 此处替换高度
        fitView: 'autoZoom', // 自动缩放
      });
      // 第五步：数据映射
      net.tooltip(true);
      net.node()
        .size('val', function(val){
        var domain = 100;
        return val/domain;
      })
        .shape('waterTank')
        .tooltip('id*label*val');
      net.edge()
        .size('val', function(val){
        return val/100 * 6;
      })
        .shape('smooth')
        .style({
        stroke: "#008DE8",
        strokeOpacity: 0.4,
        arrow: true
      });
      // 第六步：载入数据
      net.source(nodes, edges);
      // 第七步：渲染关系图
      net.render();
      this.net = net;
};

pt.g6RiverFlow.destroy = function() {
  this.net && this.net.destroy();
}

pt.g6Flow.init = function() {
  var self = this;
$.getJSON('/slides/g6/data/sign-flow.json',function(data){
        G6.Global.nodeLabelStyle = {
          fill: '#fff',
          textAlign: 'center',
          textBaseline: 'middle',
          fontSize: 12
        };
        var Util = G6.Util;
        // 普通节点
        G6.registNode('normal', {
          afterDraw: function(cfg, group) {
            var originData = cfg.origin;
            group.addShape('text', {
              attrs: {
                x: cfg.x,
                y: cfg.y - 20,
                text: originData.id,
                textAlign: 'center',
                fill: '#CCCCCD'
              }
            });
          }
        });
        // 起始终止节点
        G6.registNode('initial', {
          afterDraw: function(cfg, group) {
            var originData = cfg.origin;
            group.addShape('text', {
              attrs: {
                x: cfg.x,
                y: cfg.y - 20,
                text: originData.id,
                textAlign: 'center',
                fill: '#40BCF3'
              }
            });
          }
        }, 'circle');
        // 带动画直线
        G6.registEdge('customEdge', {
          draw: function(cfg, group) {
            var points = cfg.points;
            var label = cfg.label;
            var pointsArr = [];
            var totalLength = 0;
            var speed = 0.1; // 0.1 像素每毫秒
            var p2;
            var cfg;
            var shape;
            Util.each(points, function(p1, i){
              pointsArr.push([p1.x, p1.y]);
              p2 = points[i+1];
              if(p2){
                totalLength += Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
              }
            });
            cfg = {
              attrs: {
                points: pointsArr,
                stroke: '#68C1EA'
              }
            };
            shape = group.addShape('polyline', cfg);
            var tinyPoint = group.addShape('circle', {
              attrs: {
                x: points[0].x,
                y: points[0].y,
                r: 2,
                fill: 'white'
              }
            });
            tinyPoint.animate({
              onUpdate: function(frame, ratio){
                var p = shape.getPoint(ratio);
                frame.attrs.x = p.x;
                frame.attrs.y = p.y;
              },
              repeat: true
            }, totalLength/speed);
            return shape;
          }
        });
        var net = new G6.Net({
          id: 'g6Flow',            // 容器ID
          height: 800,         // 画布高
          fitView: 'autoZoom', // 自动缩放
          grid: {              // 网格配置
            line: {            // 网格线的样式
              stroke: 'rgba(255,255,255,0.1)'
            },
            forceAlign: true,  // 是否支持网格对齐
            cell: 10           // 网格大小
          }
        });
        net.get('container').style.background = '#54616E';
        net.source(data.nodes, data.edges);
        net.node()
          .label('status')
          .size('status', function(status){
          if(!status) {
            return 10;
          }
          return null;
        })
          .style({
          fill: null,
          stroke: '#40BCF3'
        });
        net.render();
        self.net = net;
      });
};
pt.g6Flow.destroy = function() {
  this.net && this.net.destroy();
}
