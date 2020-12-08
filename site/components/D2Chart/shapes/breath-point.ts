const { G2 } = require('@antv/g2plot/dist/g2plot.min.js');

G2.registerShape('point', 'breath-point', {
  draw(shapeInfo, container) {
    const point = { x: shapeInfo.x, y: shapeInfo.y };
    const group = container.addGroup();
    const r = shapeInfo.style?.r || 2;
    const r1 = r * 0.8;
    const r2 = r1 * 0.9;
    const opacity = shapeInfo.style?.fillOpacity || 0.5;
    const fill = shapeInfo.fill || shapeInfo.color;
    const point1 = group.addShape('circle', {
      attrs: {
        x: point.x,
        y: point.y,
        r,
        fill,
        opacity,
      },
    });
    point1.animate(
      {
        r: r * 1.2,
        opacity: 0,
      },
      {
        duration: 4500,
        easing: 'easeLinear',
        repeat: true,
      },
    );
    const point2 = group.addShape('circle', {
      attrs: {
        x: point.x,
        y: point.y,
        r: r1,
        fill,
        opacity,
      },
    });
    point2.animate(
      {
        r: r1 * 1.2,
        opacity: 0.1,
      },
      {
        duration: 4500,
        easing: 'easeLinear',
        repeat: true,
        delay: 600,
      },
    );
    const point3 = group.addShape('circle', {
      attrs: {
        x: point.x,
        y: point.y,
        r: r2,
        fill,
        opacity,
      },
    });
    point3.animate(
      {
        r: r2 * 1.2,
        opacity: 0.1,
      },
      {
        duration: 4500,
        easing: 'easeLinear',
        repeat: true,
        delay: 1200,
      },
    );
    return group;
  },
});
