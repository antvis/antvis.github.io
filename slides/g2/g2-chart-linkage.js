pt.linkage = pt.linkage || {};

pt.linkage.init = function() {
var Util = G2.Util;
var Frame = G2.Frame;
var data = [{ 客户名称: '白婵', 利润: 1955, 销售额: 8891, 利润率: 0.22 }, { 客户名称: '白德伟', 利润: 840, 销售额: 4203, 利润率: 0.2 }, { 客户名称: '白鹄', 利润: 6876, 销售额: 22553, 利润率: 0.3 }, { 客户名称: '白欢', 利润: -887, 销售额: 4944, 利润率: -0.18 }, { 客户名称: '白锦', 利润: 931, 销售额: 11512, 利润率: 0.08 }, { 客户名称: '白立', 利润: 815, 销售额: 5239, 利润率: 0.16 }, { 客户名称: '白立荣', 利润: 79, 销售额: 378, 利润率: 0.21 }, { 客户名称: '白斯云', 利润: 1445, 销售额: 12334, 利润率: 0.12 }, { 客户名称: '白松', 利润: 135, 销售额: 270, 利润率: 0.5 }, { 客户名称: '白忠', 利润: -2068, 销售额: 6012, 利润率: -0.34 }, { 客户名称: '蔡安', 利润: 306, 销售额: 666, 利润率: 0.46 }, { 客户名称: '蔡晨', 利润: -928, 销售额: 2664, 利润率: -0.35 }, { 客户名称: '蔡菊', 利润: -3035, 销售额: 9951, 利润率: -0.31 }, { 客户名称: '蔡梦', 利润: 163, 销售额: 678, 利润率: 0.24 }, { 客户名称: '曹柏', 利润: 23, 销售额: 471, 利润率: 0.05 }, { 客户名称: '曹达侠', 利润: 36, 销售额: 1211, 利润率: 0.03 }, { 客户名称: '曹冬露', 利润: 138, 销售额: 31655, 利润率: 0 }, { 客户名称: '曹欢悦', 利润: 2278, 销售额: 9555, 利润率: 0.24 }, { 客户名称: '曹丽', 利润: 2414, 销售额: 9669, 利润率: 0.25 }, { 客户名称: '曹灵', 利润: 7, 销售额: 717, 利润率: 0.01 }, { 客户名称: '曹鹏', 利润: -342, 销售额: 2098, 利润率: -0.16 }, { 客户名称: '曹琼', 利润: 3324, 销售额: 13676, 利润率: 0.24 }, { 客户名称: '曹伟', 利润: 57, 销售额: 9448, 利润率: 0.01 }, { 客户名称: '常刚', 利润: -48, 销售额: 5809, 利润率: -0.01 }, { 客户名称: '常光', 利润: 749, 销售额: 2032, 利润率: 0.37 }, { 客户名称: '常惠英', 利润: 1422, 销售额: 3556, 利润率: 0.4 }, { 客户名称: '常君', 利润: 162, 销售额: 377, 利润率: 0.43 }, { 客户名称: '常康', 利润: -172, 销售额: 7927, 利润率: -0.02 }, { 客户名称: '常崆', 利润: 1016, 销售额: 7777, 利润率: 0.13 }, { 客户名称: '常丽华', 利润: 3178, 销售额: 19961, 利润率: 0.16 }, { 客户名称: '常明媚', 利润: 1105, 销售额: 7978, 利润率: 0.14 }, { 客户名称: '常升', 利润: 1245, 销售额: 6256, 利润率: 0.2 }, { 客户名称: '常盛', 利润: 625, 销售额: 7354, 利润率: 0.08 }, { 客户名称: '常松', 利润: 801, 销售额: 1822, 利润率: 0.44 }, { 客户名称: '常宣', 利润: 796, 销售额: 1803, 利润率: 0.44 }, { 客户名称: '陈嫒', 利润: 13, 销售额: 65, 利润率: 0.2 }];

var scatterChart = new G2.Chart({
  id: 'linkageChart1',
  width: 400,
  height: 400,
  plotCfg: {
    margin: [10, 0, 60, 50],
  },
});
scatterChart.source(data);
scatterChart.legend(false);
scatterChart.axis('利润', {
  title: null,
});
scatterChart.point().position('销售额*利润').color('利润率', '#ffffb2-#bd0026').shape('circle').style({
  fillOpacity: 0.6,
  lineWidth: 1,
}).size(5);
scatterChart.render();

var frame = new Frame(data);
frame = Frame.sort(frame, '销售额'); // 将数据源排序
var barChart = new G2.Chart({
  id: 'linkageChart2',
  width: 400,
  height: 500,
  plotCfg: {
    margin: [10, 20, 20, 100],
  },
});
barChart.source(frame);
barChart.coord().transpose();
barChart.legend(false);
barChart.axis('客户名称', {
  title: null,
});
barChart.interval().position('客户名称*销售额').color('利润率', '#ffffb2-#bd0026').label('销售额');
barChart.render();

  // 开始交互
var scatterCanvas = scatterChart.get('frontCanvas');
var barCanvas = barChart.get('frontCanvas');
var scatterActiveGroup = scatterCanvas.addGroup(); // 用于高亮被圈选的点
var barActiveGroup = barCanvas.addGroup(); // 用于高亮被圈选的点
var isSelected = false;
var last;

function setHighlight(chart, activeShape, activeGroup) {
  var coord = chart.get('coord');
  activeGroup.clear();
  activeGroup.setMatrix(coord.get('matrix').clone());

  var geoms = chart.getAllGeoms();
  Util.each(geoms, (geom) => {
    var shapes = geom.getShapes();
    Util.each(shapes, (shape) => {
      var newShape;
      var attrs;
      if (shape === activeShape) {
        attrs = Util.mix({}, shape.__attrs, {
          lineWidth: 1,
          stroke: '#000',
          fillOpacity: 1,
          clip: null,
        });
      } else {
        attrs = Util.mix({}, shape.__attrs, {
          fill: '#fff',
          fillOpacity: 0.7,
          clip: null,
        });
      }
      newShape = activeGroup.addShape(shape.get('type'), {
        attrs,
      });
      newShape.setMatrix(shape.getMatrix());
      newShape.set('origin', shape.get('origin'));
    });
  });
}

function getShapeByData(chart, dim, shape) {
  var origin = shape.get('origin')._origin;
  var geoms = chart.getAllGeoms();
  var result;
  Util.each(geoms, (geom) => {
    var shapes = geom.getShapes();
    Util.each(shapes, (shape) => {
      var currentData = shape.get('origin')._origin;
      if (origin[dim] === currentData[dim]) {
        result = shape;
        return false;
      }
    });
  });

  return result;
}

scatterChart.on('plotmove', (ev) => {
  var activeShape = ev.shape;
  if (!isSelected) {
    if (activeShape) {
      var activeBar = getShapeByData(barChart, '客户名称', activeShape);
      setHighlight(barChart, activeBar, barActiveGroup);
      setHighlight(scatterChart, activeShape, scatterActiveGroup);
      barCanvas.sort();
      barCanvas.draw();
    } else {
      scatterActiveGroup.clear();
      barActiveGroup.clear();
      barCanvas.draw();
    }
    scatterCanvas.sort();
    scatterCanvas.draw();
  }
});
scatterChart.on('plotclick', (ev) => {
  var clickedShape = ev.shape;
  if (clickedShape) {
    if (clickedShape.get('selected')) {
      isSelected = false;
      clickedShape.set('selected', false);
      scatterActiveGroup.clear();
      barActiveGroup.clear();
      barCanvas.draw();
    } else {
      isSelected = true;
      clickedShape.set('selected', true);
      last && last.set('selected', false);

      scatterActiveGroup.clear();
      last = clickedShape;
      var activeBar = getShapeByData(barChart, '客户名称', clickedShape);
      setHighlight(barChart, activeBar, barActiveGroup);
      setHighlight(scatterChart, clickedShape, scatterActiveGroup);
      barCanvas.sort();
      barCanvas.draw();
    }
  } else {
    isSelected = false;
    last && last.set('selected', false);
    last = null;
    scatterActiveGroup && scatterActiveGroup.clear();
    barActiveGroup.clear();
    barCanvas.draw();
  }
  scatterCanvas.sort();
  scatterCanvas.draw();
});
};
