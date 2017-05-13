pt.gmStackedArea = pt.gmStackedArea || {};
pt.gmStackedArea.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{"month":12,"tem":7,"city":"tokyo"},{"month":1,"tem":6.9,"city":"tokyo"},{"month":2,"tem":9.5,"city":"tokyo"},{"month":3,"tem":14.5,"city":"tokyo"},{"month":4,"tem":18.2,"city":"tokyo"},{"month":5,"tem":21.5,"city":"tokyo"},{"month":6,"tem":25.2,"city":"tokyo"},{"month":7,"tem":26.5,"city":"tokyo"},{"month":8,"tem":23.3,"city":"tokyo"},{"month":9,"tem":18.3,"city":"tokyo"},{"month":10,"tem":13.9,"city":"tokyo"},{"month":11,"tem":9.6,"city":"tokyo"},{"month":12,"tem":0,"city":"newYork"},{"month":1,"tem":0.8,"city":"newYork"},{"month":2,"tem":5.7,"city":"newYork"},{"month":3,"tem":11.3,"city":"newYork"},{"month":4,"tem":17,"city":"newYork"},{"month":5,"tem":22,"city":"newYork"},{"month":6,"tem":24.8,"city":"newYork"},{"month":7,"tem":24.1,"city":"newYork"},{"month":8,"tem":20.1,"city":"newYork"},{"month":9,"tem":14.1,"city":"newYork"},{"month":10,"tem":8.6,"city":"newYork"},{"month":11,"tem":2.5,"city":"newYork"},{"month":12,"tem":2,"city":"berlin"},{"month":1,"tem":0.6,"city":"berlin"},{"month":2,"tem":3.5,"city":"berlin"},{"month":3,"tem":8.4,"city":"berlin"},{"month":4,"tem":13.5,"city":"berlin"},{"month":5,"tem":17,"city":"berlin"},{"month":6,"tem":18.6,"city":"berlin"},{"month":7,"tem":17.9,"city":"berlin"},{"month":8,"tem":14.3,"city":"berlin"},{"month":9,"tem":9,"city":"berlin"},{"month":10,"tem":3.9,"city":"berlin"},{"month":11,"tem":1,"city":"berlin"}];
  var chart = new GM.Chart({
    id: 'gmStackedArea'
  });
  chart.source(data, {
    month: {
      tickCount: 12
    },
    tem: {
      tickCount: 5
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('tem', {
    label: {
      fontSize: 12
    }
  });
  chart.axis('month', {
    label: {
      fontSize: 12
    }
  });
  chart.areaStack().position('month*tem').color('city').shape('smooth').style({
    opacity: 0.6
  });
  chart.animate().waveh();
  chart.render();

  function getPoint(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
      x: x - bbox.left,
      y: y - bbox.top
    };
  }
  $('#c1').on('click', function(e) {
    var point = getPoint(e.target, e.clientX, e.clientY);
    var data = chart.getSnapRecords(point);
    var html = '';
    data.forEach(function(item) {
      html += 'city:' + item._origin.city + ',tem:' + item._origin.tem + ',month:' + item._origin.month + '\b\n';
    });
    console.log(data);
    alert(html);
  });
};

pt.gmArea = pt.gmArea || {};
pt.gmArea.init = function() {
  var Util = GM.Util;
  // 双精度
  GM.Global.pixelRatio = 2;
  var data = [{"time":'2016-08-08 00:00:00',"tem":10,"city":"beijing"},{"time":'2016-08-08 00:10:00',"tem":22,"city":"beijing"},{"time":'2016-08-08 00:30:00',"tem":16,"city":"beijing"},{"time":'2016-08-09 00:35:00',"tem":26,"city":"beijing"},{"time":'2016-08-09 01:00:00',"tem":12,"city":"beijing"},{"time":'2016-08-09 01:20:00',"tem":26,"city":"beijing"},{"time":'2016-08-10 01:40:00',"tem":18,"city":"beijing"},{"time":'2016-08-10 02:00:00',"tem":26,"city":"beijing"},{"time":'2016-08-10 02:20:00',"tem":12,"city":"beijing"},{"time":'2016-08-08 00:00:00',"tem":28,"city":"newYork"},{"time":'2016-08-08 00:10:00',"tem":16,"city":"newYork"},{"time":'2016-08-08 00:30:00',"tem":26,"city":"newYork"},{"time":'2016-08-09 00:35:00',"tem":12,"city":"newYork"},{"time":'2016-08-09 01:00:00',"tem":26,"city":"newYork"},{"time":'2016-08-09 01:20:00',"tem":20,"city":"newYork"},{"time":'2016-08-10 01:40:00',"tem":29,"city":"newYork"},{"time":'2016-08-10 02:00:00',"tem":16,"city":"newYork"},{"time":'2016-08-10 02:20:00',"tem":22,"city":"newYork"}];
  var chart = new GM.Chart({
    id: 'gmArea'
  });
  chart.source(data, {
    time: {
      type: 'timeCat',
      mask: 'yyyy-mm-dd',
      tickCount: 3,
      range: [0, 1]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('tem', {
    label: null
  });
  //配置time刻度文字样式
  var label = {
    fill: '#979797',
    font: '12px san-serif',
    offset: 6
  };
  chart.axis('time', {
    label: function(text, index, total) {
      var cfg = Util.mix({}, label);
      // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
      if (index === 0) {
        cfg.textAlign = 'start';
      }
      if (index > 0 && index === total - 1) {
        cfg.textAlign = 'end';
      }
      return cfg;
    }
  });
  chart.animate().scaley();
  chart.area().position('time*tem').color('city').shape('smooth').style({
    opacity: 0.6
  });
  chart.render();
};

pt.lineDash = pt.lineDash || {};
pt.lineDash.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{"time":'2016-08-08 00:00:00',"tem":10,"city":"beijing"},{"time":'2016-08-08 00:10:00',"tem":22,"city":"beijing"},{"time":'2016-08-08 00:30:00',"tem":16,"city":"beijing"},{"time":'2016-08-09 00:35:00',"tem":26,"city":"beijing"},{"time":'2016-08-09 01:00:00',"tem":12,"city":"beijing"},{"time":'2016-08-09 01:20:00',"tem":26,"city":"beijing"},{"time":'2016-08-10 01:40:00',"tem":18,"city":"beijing"},{"time":'2016-08-10 02:00:00',"tem":26,"city":"beijing"},{"time":'2016-08-10 02:20:00',"tem":12,"city":"beijing"},{"time":'2016-08-08 00:00:00',"tem":4,"city":"hangzhou"},{"time":'2016-08-08 00:10:00',"tem":3,"city":"hangzhou"},{"time":'2016-08-08 00:30:00',"tem":6,"city":"hangzhou"},{"time":'2016-08-09 00:35:00',"tem":-12,"city":"hangzhou"},{"time":'2016-08-09 01:00:00',"tem":1,"city":"hangzhou"},{"time":'2016-08-09 01:20:00',"tem":9,"city":"hangzhou"},{"time":'2016-08-10 01:40:00',"tem":13,"city":"hangzhou"},{"time":'2016-08-10 02:00:00',"tem":-3,"city":"hangzhou"},{"time":'2016-08-10 02:20:00',"tem":11,"city":"hangzhou"}];
  var chart = new GM.Chart({
    id: 'lineDash'
  });
  chart.source(data, {
    time: {
      type: 'timeCat',
      tickCount: 3,
      mask: 'HH:MM',
      range: [0, 1]
    },
    tem: {
      tickCount: 3,
      formatter: function(item) {
        return item + '%';
      }
    }
  });
  chart.axis('tem', {
    grid: function(text, index) {
      if (text === '0%') {
        return {
          stroke: '#efefef'
        };
      } else {
        return {
          stroke: '#f7f7f7'
        };
      }
    },
    label: {
      fontSize: 12
    }
  });
  chart.axis('time', {
    line: null,
    label: {
      fontSize: 12
    }
  });
  // 添加辅助元素
  var point = ['2016-08-10 02:20:00', 12];
  chart.guide().html(point, "<div style='border-radius: 12px;border: none;width: 22px;height: 22px;background-color: rgba(102, 182, 241, 0.5);'></div>", {
    align: 'cc'
  });
  chart.guide().html(point, "<div style='border-radius: 7px;border: none;width: 12px;height: 12px;background-color: rgb(15, 141, 232);'></div>", {
    align: 'cc'
  });

  chart.line().position('time*tem').color('city').size(3).shape('city', function(city) {
    if (city === 'beijing') {
      return 'line';
    }
    if (city === 'hangzhou') {
      return 'dash';
    }
  });
  // 水平方向的平铺动画
  chart.animate().waveh();
  chart.render();
}

pt.lineSmooth = pt.lineSmooth || {};
pt.lineSmooth.init = function() {
  GM.Global.pixelRatio = 2;
  var Util = GM.Util;
  var data = [{"time":'周一',"tem":10,"city":"beijing"},{"time":'周二',"tem":22,"city":"beijing"},{"time":'周三',"tem":20,"city":"beijing"},{"time":'周四',"tem":26,"city":"beijing"},{"time":'周五',"tem":20,"city":"beijing"},{"time":'周六',"tem":26,"city":"beijing"},{"time":'周日',"tem":28,"city":"beijing"},{"time":'周一',"tem":5,"city":"newYork"},{"time":'周二',"tem":12,"city":"newYork"},{"time":'周三',"tem":26,"city":"newYork"},{"time":'周四',"tem":20,"city":"newYork"},{"time":'周五',"tem":28,"city":"newYork"},{"time":'周六',"tem":26,"city":"newYork"},{"time":'周日',"tem":20,"city":"newYork"}];
  var chart = new GM.Chart({
    id: 'lineSmooth'
  });
  var defs = {
    time: {
      tickCount: 7,
      range: [0, 1]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  };
  //配置time刻度文字样式
  var label = {
    fill: '#979797',
    font: '14px san-serif',
    offset: 6
  };
  chart.axis('time', {
    label: function(text, index, total) {
      var cfg = Util.mix({}, label);
      // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
      if (index === 0) {
        cfg.textAlign = 'start';
      }
      if (index > 0 && index === total - 1) {
        cfg.textAlign = 'end';
      }
      return cfg;
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('tem', {
    label: {
      fontSize: 12
    }
  });
  chart.source(data, defs);
  chart.animate().waveh();
  chart.line().position('time*tem').color('city').shape('smooth');
  chart.render();
};

pt.gmRadar = pt.gmRadar || {};
pt.gmRadar.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{name:'张飞',props:'智力',value:65},{name:'张飞',props:'武力',value:97},{name:'张飞',props:'政治',value:50},{name:'张飞',props:'统帅',value:92},{name:'张飞',props:'忠诚',value:100},{name:'关羽',props:'智力',value:80},{name:'关羽',props:'武力',value:94},{name:'关羽',props:'政治',value:70},{name:'关羽',props:'统帅',value:95},{name:'关羽',props:'忠诚',value:99}];
  var chart = new GM.Chart({
    id: 'gmRadar'
  });
  chart.coord('polar');
  chart.source(data, {
    value: {
      min: 0,
      tickInterval: 20
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('props', {
    label: {
      fontSize: 12
    },
    line: null
  });
  chart.axis('value', {
    label: {
      fontSize: 12
    }
  });
  chart.line().position('props*value').color('name');
  chart.animate().wavec();
  chart.render();
}

pt.gmKChart = pt.gmKChart || {};
pt.gmKChart.init = function() {
  var Util = GM.Util;
  GM.Global.pixelRatio = 2;
  //获取本地数据
  $.getJSON('slides/gm/mobileCandleSticks.json', function(data) {
    //数据处理
    data.sort(function(obj1, obj2) {
      return obj1.time > obj2.time ? 1 : -1;
    });
    data.forEach(function(obj) {
      obj.range = [obj.start, obj.end, obj.max, obj.min];
      obj.trend = (obj.start <= obj.end) ? 0 : 1;
    });
    var chart = new GM.Chart({
      id: 'gmKChart'
    });
    //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
    chart.axis('range', {
      label: {
        fontSize: 12
      }
    });
    //配置time刻度文字样式
    var label = {
      fill: '#979797',
      font: '12px san-serif',
      offset: 6
    };
    chart.axis('time', {
      label: function(text, index, total) {
        var cfg = Util.mix({}, label);
        // 第一个点左对齐，最后一个点右对齐，其余居中，只有一个点时左对齐
        if (index === 0) {
          cfg.textAlign = 'start';
        }
        if (index > 0 && index === total - 1) {
          cfg.textAlign = 'end';
        }
        return cfg;
      }
    });
    chart.source(data, {
      range: {
        tickCount: 5
      },
      time: {
        tickCount: 3
      }
    });
    chart.schema().position('time*range')
      .color('trend', function(trend) {
        return ['#C00000', '#19B24B'][trend];
      })
      .shape('candle');
    chart.render();
  });
};

pt.gmStackedBar = pt.gmStackedBar || {};
pt.gmStackedBar.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{
    "time": "周一",
    "tem": 6.9,
    "city": "tokyo"
  }, {
    "time": "周二",
    "tem": 9.5,
    "city": "tokyo"
  }, {
    "time": "周三",
    "tem": 14.5,
    "city": "tokyo"
  }, {
    "time": "周四",
    "tem": 18.2,
    "city": "tokyo"
  }, {
    "time": "周五",
    "tem": 21.5,
    "city": "tokyo"
  }, {
    "time": "周六",
    "tem": 25.2,
    "city": "tokyo"
  }, {
    "time": "周日",
    "tem": 26.5,
    "city": "tokyo"
  }, {
    "time": "周一",
    "tem": 0.8,
    "city": "newYork"
  }, {
    "time": "周二",
    "tem": 5.7,
    "city": "newYork"
  }, {
    "time": "周三",
    "tem": 11.3,
    "city": "newYork"
  }, {
    "time": "周四",
    "tem": 17,
    "city": "newYork"
  }, {
    "time": "周五",
    "tem": 22,
    "city": "newYork"
  }, {
    "time": "周六",
    "tem": 24.8,
    "city": "newYork"
  }, {
    "time": "周日",
    "tem": 24.1,
    "city": "newYork"
  }, {
    "time": "周一",
    "tem": 0.6,
    "city": "berlin"
  }, {
    "time": "周二",
    "tem": 3.5,
    "city": "berlin"
  }, {
    "time": "周三",
    "tem": 8.4,
    "city": "berlin"
  }, {
    "time": "周四",
    "tem": 13.5,
    "city": "berlin"
  }, {
    "time": "周五",
    "tem": 17,
    "city": "berlin"
  }, {
    "time": "周六",
    "tem": 18.6,
    "city": "berlin"
  }, {
    "time": "周日",
    "tem": 17.9,
    "city": "berlin"
  }];
  var chart = new GM.Chart({
    id: 'gmStackedBar'
  });
  chart.source(data, {
    tem: {
      tickCount: 5
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('time', {
    label: {
      fontSize: 12
    },
    grid: null
  });
  chart.axis('tem', {
    label: {
      fontSize: 12
    }
  });
  chart.intervalStack().position('time*tem').color('city');
  chart.render();
};

pt.gmBar = pt.gmBar || {};
pt.gmBar.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{
    "tem": 500,
    "month": "3月"
  }, {
    "tem": -50,
    "month": "4月"
  }, {
    "tem": 450,
    "month": "5月"
  }, {
    "tem": -40,
    "month": "6月"
  }, {
    "tem": 690,
    "month": "7月"
  }, {
    "tem": 346,
    "month": "8月"
  }, ];
  var chart = new GM.Chart({
    id: 'gmBar'
  });
  chart.source(data, {
    tem: {
      tickCount: 5,
    }
  });
  chart.axis('month', {
    label: {
      font: 'sans-serif '
    },
    line: null,
    grid: null
  });
  chart.axis('tem', {
    label: null,
    grid: {
      stroke: '#f8f8f8',
    }
  });
  chart.interval().position('month*tem').color('tem*month', function(tem, month) {
    if (month === '8月') {
      return '#f5623a';
    }
    if (tem >= 0) {
      return '#f8bdad';
    }
    if (tem < 0) {
      return '#99d6c0';
    }
  });
  // y轴方向的缩放动画
  chart.animate().scaley();
  chart.render();
};

pt.gmDoubleY = pt.gmDoubleY || {};
pt.gmDoubleY.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{
    "time": "周一",
    "tem": 6.9,
    "rain": 10
  }, {
    "time": "周二",
    "tem": 9.5,
    "rain": 13
  }, {
    "time": "周三",
    "tem": 14.5,
    "rain": 14
  }, {
    "time": "周四",
    "tem": 18.2,
    "rain": 10
  }, {
    "time": "周五",
    "tem": 21.5,
    "rain": 12
  }, {
    "time": "周六",
    "tem": 25.2,
    "rain": 16
  }, {
    "time": "周日",
    "tem": 26.5,
    "rain": 13
  }, ];
  var chart = new GM.Chart({
    id: 'gmDoubleY'
  });
  chart.source(data, {
    tem: {
      tickCount: 5,
      max: 30,
      min: 0
    },
    rain: {
      tickCount: 5,
      min: 0
    }
  });
  //配置刻度文字大小，供PC端显示用(移动端可以使用默认值20px)
  chart.axis('time', {
    label: {
      fontSize: 12
    },
    grid: null
  });
  chart.axis('tem', {
    label: {
      fontSize: 12
    }
  });
  chart.axis('rain', {
    label: {
      fontSize: 12
    }
  });
  chart.interval().position('time*tem');
  chart.line().position('time*rain').color('#5ed470').size(2).shape('smooth');
  chart.point().position('time*rain').color('#5ed470');
  chart.render();
}

pt.gmPie = pt.gmPie || {};
pt.gmPie.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{
    a: '1',
    b: 0.3,
    c: '1'
  }, {
    a: '1',
    b: 0.3,
    c: '2'
  }, {
    a: '1',
    b: 0.4,
    c: '3'
  }];
  var chart = new GM.Chart({
    id: 'gmPie'
  });
  chart.source(data);
  chart.coord('polar', {
    transposed: true,
    inner: 0
  });
  chart.axis(false);
  chart.intervalStack().position('a*b').color('c');
  chart.render();
};

pt.gmDonut = pt.gmDonut || {};
pt.gmDonut.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{
    a: '1',
    b: 0.3,
    c: '1'
  }, {
    a: '1',
    b: 0.3,
    c: '2'
  }, {
    a: '1',
    b: 0.4,
    c: '3'
  }];
  var chart = new GM.Chart({
    id: 'gmDonut'
  });
  chart.source(data);
  chart.coord('polar', {
    transposed: true,
    inner: 0.6
  });
  chart.axis(false);
  chart.intervalStack().position('a*b').color('c');
  chart.animate().wavec();
  chart.render();
};

pt.gmNested = pt.gmNested || {};
pt.gmNested.init = function() {
  GM.Global.pixelRatio = 2;
  var data = [{
    a: '1',
    b: 0.2,
    c: '1'
  }, {
    a: '2',
    b: 0.5,
    c: '1'
  }, {
    a: '3',
    b: 0.4,
    c: '1'
  }, {
    a: '1',
    b: 0.8,
    c: '2'
  }, {
    a: '2',
    b: 0.5,
    c: '2'
  }, {
    a: '3',
    b: 0.6,
    c: '2'
  }];
  var chart = new GM.Chart({
    id: 'gmNested'
  });
  chart.source(data);
  chart.coord('polar', {
    transposed: true,
    inner: 0.5
  });
  chart.axis(false);
  chart.intervalStack().position('a*b').color('c');
  chart.render();
};

pt.gmDashboard = pt.gmDashboard || {};
pt.gmDashboard.init = function() {
  GM.Global.pixelRatio = 2; //双精度
  var Shape = GM.Shape;
  var G = GM.G;
  var data = [{
    pointer: '当前收益',
    value: 5,
    length: 2,
    y: 1.05
  }];
  //自定义绘制数据的的形状
  Shape.registShape('point', 'dashBoard', {
    getShapePoints: function(cfg) {
      var x = cfg.x;
      var y = cfg.y;
      return [{
        x: x,
        y: y
      }, {
        x: x,
        y: 0.5
      }]
    },
    drawShape: function(cfg, canvas) {
      var point1 = cfg.points[0];
      var point2 = cfg.points[1];
      point1 = this.parsePoint(point1);
      point2 = this.parsePoint(point2);
      G.drawLines([point1, point2], canvas, {
        stroke: '#18b7d6',
        lineWidth: 2
      });
      var text = cfg.origin._origin.value.toString();
      G.drawText(text + '%', cfg.center, canvas, {
        fillStyle: '#f75b5b',
        font: '30px Arial',
        textAlign: 'center',
        textBaseline: 'bottom'
      });
      G.drawText(cfg.origin._origin.pointer, cfg.center, canvas, {
        fillStyle: '#ccc',
        textAlign: 'center',
        textBaseline: 'top'
      });
    }
  });
  var chart = new GM.Chart({
    id: 'gmDashboard'
  });
  chart.source(data, {
    'value': {
      type: 'linear',
      min: 0,
      max: 15,
      tickCount: 6
    },
    'length': {
      type: 'linear',
      min: 0,
      max: 10
    },
    y: {
      type: 'linear',
      min: 0,
      max: 1
    }
  });
  chart.coord('polar', {
    inner: 0,
    startAngle: -1.25 * Math.PI,
    endAngle: 0.25 * Math.PI
  });
  //配置value轴刻度线
  chart.axis('value', {
    tickLine: {
      strokeStyle: '#b9e6ef',
      lineWidth: 2,
      value: -5
    },
    label: null,
    grid: null,
    line: null
  });
  chart.axis('y', false);
  //绘制仪表盘辅助元素
  chart.guide().arc([0, 1.05], [4.8, 1.05], {
    strokeStyle: '#18b7d6',
    lineWidth: 5,
    lineCap: 'round'
  });
  chart.guide().arc([5.2, 1.05], [9.8, 1.05], {
    strokeStyle: '#ccc',
    lineWidth: 5,
    lineCap: 'round'
  });
  chart.guide().arc([10.2, 1.05], [15, 1.05], {
    strokeStyle: '#ccc',
    lineWidth: 5,
    lineCap: 'round'
  });
  chart.guide().arc([0, 1.2], [15, 1.2], {
    strokeStyle: '#ccc',
    lineWidth: 1
  });
  chart.guide().text([-0.5, 1.3], '0.00%', {
    fillStyle: '#ccc',
    font: '12px Arial',
    textAlign: 'center'
  });
  chart.guide().text([7.5, 0.7], '7.50%', {
    fillStyle: '#ccc',
    font: '12px Arial',
    textAlign: 'center'
  });
  chart.guide().text([15.5, 1.3], '15.00%', {
    fillStyle: '#ccc',
    font: '12px Arial',
    textAlign: 'center'
  });
  chart.point().position('value*y').size('length').color('#18b7d6').shape('dashBoard');
  chart.render();
};
