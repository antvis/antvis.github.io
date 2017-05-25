pt.chinaMap = pt.chinaMap || {};

pt.chinaMap.init = function() {
  var self = this;
      var Global = G2.Global;
      var Shape = G2.Shape;
      var Util = G2.Util;
      var Frame = G2.Frame;
      var Stat = G2.Stat;
      // 获取空心圆属性
      function getLineAttrs(cfg) {
        var pointAttrs = Util.mix(true, {}, {
          stroke: cfg.color,
          lineWidth: 1,
          r: cfg.size + 0.1,
          strokeOpacity: cfg.opacity,
          fillOpacity: 0
        }, cfg.style);
        return pointAttrs;
      }
      // 获取实心圆属性
      function getFillAttrs(cfg) {
        var pointAttrs = Util.mix(true, {}, {
          lineWidth: 1,
          fill: cfg.color,
          fillOpacity: cfg.opacity,
          radius: cfg.size
        }, cfg.style);
        return pointAttrs;
      }
      // 自定义带波纹动画的 shape
      Shape.registShape('point', 'myShape', {
        drawShape: function(cfg, container) { // 自定义最终绘制
          cfg.points = this.parsePoints(cfg.points);
          var fillAttrs = getFillAttrs(cfg);
          var lineAttrs = getLineAttrs(cfg);
          lineAttrs = Util.mix(lineAttrs, {
            x:cfg.points[0].x,
            y:cfg.points[0].y
          });
          // 添加第一个波纹圆环
          var gShape1 = container.addShape('circle', {
            attrs: lineAttrs
          });
          // 添加第二个波纹圆环
          var gShape2 = container.addShape('circle', {
            attrs: lineAttrs
          });
          // 设置波纹动画
          gShape1.animate({
            r: 2 * cfg.size,
            strokeOpacity: 0,
            repeat: true // 动画重复执行
          }, 3000, 'linear');
          gShape2.animate({
            r: 2 * cfg.size,
            strokeOpacity: 0,
            repeat: true,
            delay: 1500  // 第二个波纹延迟动画
          }, 3000, 'linear');
          var gShape = container.addShape('Marker', {
            attrs: Util.mix(fillAttrs, {
              symbol: 'circle'
            })
          });
          gShape.move(cfg.points[0].x, cfg.points[0].y);
          return gShape;
        }
      });
      $.getJSON('https://os.alipayobjects.com/rmsportal/tPOHKnQFLCQuhpAqZOya.json', function(mapData) {
        var map = [];
        var features = mapData.features;
        for(var i=0; i<features.length; i++) {
          var name = features[i].properties.name;
          map.push({
            "name": name
          });
        }
        var chart = new G2.Chart({
          id: 'china',
          forceFit: true,
          height: 1100,
          plotCfg: {
            margin: [0, 135]
          }
        });
        chart.legend(false);
        chart.coord('map', {
          projection: 'albers',
          basic: [110, 0, 25, 47], // 指定投影方法的基本参数，[λ0, φ0, φ1, φ2] 分别表示中央经度、坐标起始纬度、第一标准纬度、第二标准纬度
          max: [16.573, -13.613], // 指定投影后最大的坐标点
          min: [-27.187, -49.739] // 指定投影后最小的坐标点
        });
        chart.tooltip({
          title: null
        });
        var bgView = chart.createView({
          animate: false
        });
        bgView.source(map);
        bgView.tooltip(false);
        bgView.axis(false);
        bgView.polygon()
          .position(Stat.map.region('name', mapData))
          .color('name', function(val){
          if(val === 'China') {
            return '#37404C';
          } else {
            return '#2B3139';
          }
        })
          .style({
          stroke: '#444F5C',
          lineWidth: 1
        });
        $.getJSON('https://os.alipayobjects.com/rmsportal/ohrcTUbDZJbgQzUPxHvl.json', function(data) {
          var pointView = chart.createView();
          pointView.source(data);
          pointView.point().position(Stat.map.location('long*lant'))
            .size('value', 20, 1)
            .color('value',function(value){
            if(value > 200){
              return '#E07726'
            }else{
              return '#F09040'
            }
          })
            .tooltip('name*value')
            .shape('value',function(value){
            if(value > 200){
              return 'myShape'   // value 大于 200 的数据使用自定义的shape
            }else{
              return 'circle'
            }
          })
          .style({
            shadowBlur: 10,
            shadowColor: '#E07726'
          });
          chart.render();
          self.chart = chart;
        });
      });
};

pt.chinaMap.destroy = function() {
  this.chart && this.chart.destroy();
}
