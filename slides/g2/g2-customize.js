pt.customized = pt.customized || {};

pt.customized.init = function() {
  var self = this;
  var imageMap = {
    tortoise: 'https://zos.alipayobjects.com/rmsportal/tmZkyNUyXtParbdvGgLD.png',
    house_mouse: 'https://zos.alipayobjects.com/rmsportal/joqGGxdJjrUjteEOzGth.png',
    squirrel: 'https://zos.alipayobjects.com/rmsportal/YjAHQtdMbJWMQwKJeURE.png',
    human: 'https://zos.alipayobjects.com/rmsportal/zdedKSflSJByABTFXXrG.png',
    cat: 'https://zos.alipayobjects.com/rmsportal/RdMqxOJcVzsrNTmFprfF.png',
    rabbit: 'https://zos.alipayobjects.com/rmsportal/CNYCRSWqxrDHoOjYplYI.png',
    grizzly_bear: 'https://zos.alipayobjects.com/rmsportal/gbwjstijrvcgTWOPCirr.png',
    greyhound: 'https://zos.alipayobjects.com/rmsportal/lnLRQrKqggPNQiWnJNWd.png',
    ostrich: 'https://zos.alipayobjects.com/rmsportal/kBBZnTHjTbbtEGLVjTpn.png',
    lion: 'https://zos.alipayobjects.com/rmsportal/YZsqDCAvphpUzpNHMqvv.png',
    horse: 'https://zos.alipayobjects.com/rmsportal/bYfZYsYQNgWaGcvNuLLY.png',
    cheetah: 'https://zos.alipayobjects.com/rmsportal/kuoQCnfnrfmdLopXWtca.png'
  };
  var Shape = G2.Shape;
  Shape.registShape('point', 'imagePoint', {
    drawShape: function(cfg, container) {
      var image = cfg.origin._origin.image;
      var coord = this._coord;

      cfg.points = this.parsePoints(cfg.points);
      var shape = container.addShape('image', {
        attrs: {
          y: cfg.points[0].y - 12,
          x: coord.get('start').x - 12,
          width: 24,
          height: 24,
          img: imageMap[image]
        }
      });

      shape.animate({
        x: cfg.points[0].x - 12,
        y: cfg.points[0].y - 12,
        delay: 0
      }, 2000, 'easeInCubic');

      return shape;
    }
  });

  var animals = [
    {id: 1, animal: 'Cheetah', speed: 120, image: 'cheetah'},
    {id: 2, animal: 'Horse', speed: 88, image: 'horse'},
    {id: 3, animal: 'Lion', speed: 80, image: 'lion'},
    {id: 4, animal: 'Ostrich', speed: 70, image: 'ostrich'},
    {id: 5, animal: 'Greyhound', speed: 63.5, image: 'greyhound'},
    {id: 6, animal: 'Grizzly bear', speed: 56, image: 'grizzly_bear'},
    {id: 7, animal: 'Rabbit', speed: 48, image: 'rabbit'},
    {id: 8, animal: 'Cat', speed: 48, image: 'cat'},
    {id: 9, animal: 'Usain Bolt', speed: 45, image: 'human'},
    {id: 10, animal: 'Squirrel', speed: 20, image: 'squirrel'},
    {id: 11, animal: 'House mouse', speed: 13, image: 'house_mouse'},
    {id: 12, animal: 'Giant tortoise', speed: 0.3, image: 'tortoise'}
  ];

  var chart = new G2.Chart({
    id: 'c1',
    width: 800,
    // forceFit: true,
    height: 800,
    plotCfg: {
      margin: [80, 100, 40]
    }
  });

  var draw = function() {
    chart.source(animals, {
      speed: {
        alias: 'Speed [km/h]'
      }
    });
    chart.coord().transpose().reflect('y');
    chart.axis('animal', {
      title: null,
      titleOffset: 100,
      tickLine: null,
      line: null,
      labels: {
        custom: true, // 表示使用自定义 html 显示文本标签
        renderer: function(value){
          var color = '#8C8C8C';
          if (value === 'Usain Bolt') {
            color = '#F92672'
          }
          return '<p style="width: 80px;font-size:12px;color: ' + color + '; vertical-align: middle;text-align: right;font-weight:lighter;"/>' + value + '</p>';
        }
      }
    });
    chart.axis('speed', {
      title: {
        fill: '#6B6B6B',
        textAlign: 'center',
        fontWeight: 300
      },
      titleOffset: 30,
      labels: {
        label: {
          fill: '#8C8C8C',
          fontWeight: 300
        }
      },
      grid: null
    });
    chart.point().position('animal*speed').shape('imagePoint');
    chart.render();
    self.chart = chart;
  }
  draw();

  this.interval = setInterval(function() {
    chart.clear();
    draw();
  }, 3000);
};

pt.customized.destroy = function() {
  clearTimeout(this.interval);
  this.chart && this.chart.destroy();
}
