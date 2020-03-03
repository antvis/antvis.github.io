import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import styles from './DecisionTree.module.less';
import { CKBJson } from '@antv/knowledge';
import uniqueId from '@antv/util/lib/unique-id';
import clone from '@antv/util/lib/clone';
import { transform } from '@antv/matrix-util';
import chartUrls from '../../data/chart-urls.json';
import { remove } from '_@types_lodash-es@4.17.3@@types/lodash-es';

let graph: any;
let decoGraph: any;
let data: any;
let backPaths: any = [];
let purposeMap: any = {};

declare global {
  interface HTMLElement {
    requestFullscreen?(): void;
    mozRequestFullscreen?(): void;
    msRequestFullscreen?(): void;
    webkitRequestFullscreen?(): void;

    webkitExitFullscreen?(): void;
    mozCancelFullscreen?(): void;
    msExitFullscreen?(): void;
    exitFullscreen?(): void;
  }
  interface Document extends HTMLElement {}
}

const DecisionTree = () => {
  const { t, i18n } = useTranslation();
  const ckbData = CKBJson();

  const [tooltipStates, setTooltipStates] = useState({
    title: '',
    imgSrc: '',
    links: [],
    names: [],
    x: 0,
    y: 0,
    buttons: <a></a>,
  });
  const [tooltipDisplayStates, setTooltipDisplayStates] = useState({
    opacity: 0,
    display: 'none',
  });

  const [screenStates, setScreenStates] = useState({
    fullscreenDisplay: 'block',
    exitfullscreenDisplay: 'none',
  });

  const lightColors = [
    '#8FE9FF',
    '#87EAEF',
    '#FFC9E3',
    '#A7C2FF',
    '#FFA1E3',
    '#FFE269',
    '#BFCFEE',
    '#FFA0C5',
    '#D5FF86',
  ];
  const darkColors = [
    '#7DA8FF',
    '#44E6C1',
    '#FF68A7',
    '#7F86FF',
    '#AE6CFF',
    '#FF5A34',
    '#5D7092',
    '#FF6565',
    '#6BFFDE',
  ];
  const uLightColors = [
    '#CFF6FF',
    '#BCFCFF',
    '#FFECF5',
    '#ECFBFF',
    '#EAD9FF',
    '#FFF8DA',
    '#DCE2EE',
    '#FFE7F0',
    '#EEFFCE',
  ];
  const uDarkColors = [
    '#CADBFF',
    '#A9FFEB',
    '#FFC4DD',
    '#CACDFF',
    '#FFD4F2',
    '#FFD3C9',
    '#EBF2FF',
    '#FFCBCB',
    '#CAFFF3',
  ];

  const gColors: string[] = [];
  const unlightColorMap = new Map();
  lightColors.forEach((lcolor, i) => {
    gColors.push('l(0) 0:' + lcolor + ' 1:' + darkColors[i]);
    unlightColorMap.set(
      gColors[i],
      'l(0) 0:' + uLightColors[i] + ' 1:' + uDarkColors[i],
    );
  });

  const fadeOutItem = (item: any) => {
    const nodeGroup = item.get('group');
    nodeGroup.get('children').forEach((child: any) => {
      child.animate(
        (ratio: number) => {
          let opacity = 1 - 3 * ratio;
          if (opacity < 0) opacity = 0;
          return {
            opacity,
          };
        },
        {
          duration: 500,
          repeat: false,
        },
      );
    });
  };

  const layoutCfg = {
    type: 'compactBox',
    direction: 'LR',
    getHeight: () => 10,
    getWidth: () => 16,
    getVGap: (d: any) => {
      if (d.tag === 'purpose') {
        return 33;
      }
      return 10;
    },
    getHGap: (d: any) => {
      if (d.id === 'antv') {
        return 160;
      }
      return 120;
    },
  };

  const collapseExpandCfg = {
    type: 'collapse-expand',
    shouldBegin: (e: any) => {
      const model = e.item.getModel();
      if (model.tag === 'purpose') {
        return true;
      }
      return false;
    },
    onChange: (item: any, collapsed: boolean) => {
      if (collapsed) return;
      const itemId = item.getModel().id;
      const nodes = graph.getNodes();
      nodes.forEach((node: any) => {
        const nodeModel = node.getModel();
        // collapse others
        if (nodeModel.tag === 'purpose' && nodeModel.id !== itemId)
          nodeModel.collapsed = true;
        if (nodeModel.tag !== 'leaf' || nodeModel.parentId === itemId) return;
        fadeOutItem(node);
      });
      const edges = graph.getEdges();
      edges.forEach((edge: any) => {
        const edgeModel = edge.getModel();
        const targetNode = edge.get('targetNode');
        if (targetNode.getModel().tag !== 'leaf' || edgeModel.source === itemId)
          return;
        fadeOutItem(edge);
      });
    },
  };

  let LIMIT_OVERFLOW_WIDTH = 1418.4;
  let LIMIT_OVERFLOW_HEIGHT = 650;

  let element = React.useRef<HTMLDivElement>(null);
  let wrapperElement = React.useRef<HTMLDivElement>(null);

  let CANVAS_WIDTH = 1320;
  let CANVAS_HEIGHT = 696;

  useEffect(() => {
    data = processData(ckbData);
    const G6 = require('@antv/g6');

    G6.registerBehavior('double-finger-drag-canvas', {
      getEvents: function getEvents() {
        return {
          wheel: 'onWheel',
        };
      },

      onWheel: (ev: {
        ctrlKey: any;
        clientX: any;
        clientY: any;
        wheelDelta: number;
        deltaX: any;
        movementX: any;
        deltaY: any;
        movementY: any;
        preventDefault: () => void;
      }) => {
        if (ev.ctrlKey) {
          const canvas = graph.get('canvas');
          const pixelRatio = canvas.get('pixelRatio');
          const point = canvas.getPointByClient(ev.clientX, ev.clientY);
          let ratio = graph.getZoom();
          if (ev.wheelDelta > 0) {
            ratio = ratio + ratio * 0.05;
          } else {
            ratio = ratio - ratio * 0.05;
          }
          graph.zoomTo(ratio, {
            x: point.x / pixelRatio,
            y: point.y / pixelRatio,
          });
        } else {
          const x = ev.deltaX || ev.movementX;
          const y = ev.deltaY || ev.movementY;
          translate(x, y);
        }
        ev.preventDefault();
      },
    });

    G6.registerNode(
      'bubble',
      {
        drawShape(
          cfg: {
            size: number;
            color: string;
          },
          group: any,
        ) {
          const self = this;
          const r = cfg.size / 2; //cfg.size / 2;
          // a circle by path
          const path = [
            ['M', -r, 0],
            ['C', -r, r / 2, -r / 2, r, 0, r],
            ['C', r / 2, r, r, r / 2, r, 0],
            ['C', r, -r / 2, r / 2, -r, 0, -r],
            ['C', -r / 2, -r, -r, -r / 2, -r, 0],
            ['Z'],
          ];
          const keyShape = group.addShape('path', {
            attrs: {
              x: 0,
              y: 0,
              path,
              fill: cfg.color || 'steelblue',
              matrix: [1, 0, 0, 0, 0.357, 0, 0, 0, 1],
              cursor: 'pointer',
            },
          });

          let maskMatrix = [1, 0, 0, 0, 0.357, 0, 0, 0, 1];
          maskMatrix = transform(maskMatrix, [
            ['r', 0.1 * (Math.random() * 2 - 1)],
          ]);
          const mask = group.addShape('path', {
            attrs: {
              x: 0,
              y: 0,
              path,
              opacity: 0.25,
              fill: cfg.color || 'steelblue',
              shadowColor: cfg.color.split(' ')[2].substr(2),
              shadowBlur: 40,
              shadowOffsetX: 0,
              shadowOffsetY: 30,
              matrix: maskMatrix,
              cursor: 'pointer',
            },
          });

          const spNum = 10; // split points number
          const directions: number[] = [],
            rs: number[] = [];
          const floatRange = 0.1;
          const speedConst = 0.0015;
          self.changeDirections(spNum, directions);
          for (let i = 0; i < spNum; i++) {
            const rr = r + directions[i] * (Math.random() * r * speedConst); // +-r/6, the sign according to the directions
            if (rs[i] < (1 - floatRange) * r) rs[i] = (1 - floatRange) * r;
            else if (rs[i] > (1 + floatRange) * r) rs[i] = (1 + floatRange) * r;
            rs.push(rr);
          }
          keyShape.animate(
            () => {
              const path = self.getBubblePath(
                r,
                spNum,
                directions,
                rs,
                floatRange,
                speedConst,
              );
              return { path };
            },
            {
              repeat: true,
              duration: 10000,
              delay: Math.random() * 1000,
            },
          );

          const directions2: number[] = [],
            rs2: number[] = [];
          self.changeDirections(spNum, directions2);
          const maskR = r * 1.03;
          for (let i = 0; i < spNum; i++) {
            const rr =
              maskR + directions2[i] * (Math.random() * maskR * speedConst); // +-r/6, the sign according to the directions
            if (rs2[i] < (1 - floatRange) * maskR)
              rs2[i] = (1 - floatRange) * maskR;
            else if (rs2[i] > (1 + floatRange) * maskR)
              rs2[i] = (1 + floatRange) * maskR;
            rs2.push(rr);
          }
          mask.animate(
            () => {
              const path = self.getBubblePath(
                maskR,
                spNum,
                directions2,
                rs2,
                floatRange,
                speedConst,
              );
              return { path };
            },
            {
              repeat: true,
              duration: 10000,
              delay: Math.random() * 1000,
            },
          );

          return keyShape;
        },
        changeDirections(num: number, directions: number[]) {
          for (let i = 0; i < num; i++) {
            if (!directions[i]) {
              const rand = Math.random();
              const dire = rand > 0.5 ? 1 : -1;
              directions.push(dire);
            } else {
              directions[i] = -1 * directions[i];
            }
          }
          return directions;
        },
        getBubblePath(
          r: number,
          spNum: number,
          directions: number[],
          rs: number[],
          floatRange: number = 0.3,
          speedConst: number = 0.001,
        ) {
          const path = [];
          const cpNum = spNum * 2; // control points number
          const unitAngle = (Math.PI * 2) / spNum; // base angle for split points
          let angleSum = 0;
          let spAngleOffset = 0; // split point's offset
          const sps = [];
          const cps = [];
          for (let i = 0; i < spNum; i++) {
            const speed = speedConst * Math.random();
            rs[i] = rs[i] + directions[i] * speed * r; // +-r/6, the sign according to the directions
            if (rs[i] < (1 - floatRange) * r) {
              rs[i] = (1 - floatRange) * r;
              directions[i] = -1 * directions[i];
            } else if (rs[i] > (1 + floatRange) * r) {
              rs[i] = (1 + floatRange) * r;
              directions[i] = -1 * directions[i];
            }
            const spX = rs[i] * Math.cos(angleSum);
            const spY = rs[i] * Math.sin(angleSum);
            sps.push({ x: spX, y: spY });
            for (let j = 0; j < 2; j++) {
              const cpAngleRand = unitAngle / 3; //Math.random() * unitAngle / 2; // [0, unitAngle / 3]
              const cpR = rs[i] / Math.cos(cpAngleRand);
              const sign = j === 0 ? -1 : 1;
              const x = cpR * Math.cos(angleSum + sign * cpAngleRand);
              const y = cpR * Math.sin(angleSum + sign * cpAngleRand);
              cps.push({ x, y });
            }
            spAngleOffset = (Math.random() * unitAngle) / 3 - unitAngle / 6; // [ -unitAngle/6, unitAngle/6 ]
            angleSum += unitAngle; //(unitAngle + spAngleOffset);
          }
          path.push(['M', sps[0].x, sps[0].y]);
          for (let i = 1; i < spNum; i++) {
            path.push([
              'C',
              cps[2 * i - 1].x,
              cps[2 * i - 1].y,
              cps[2 * i].x,
              cps[2 * i].y,
              sps[i].x,
              sps[i].y,
            ]);
          }
          path.push([
            'C',
            cps[cpNum - 1].x,
            cps[cpNum - 1].y,
            cps[0].x,
            cps[0].y,
            sps[0].x,
            sps[0].y,
          ]);
          path.push(['Z']);
          return path;
        },
        setState(
          name: string,
          value: boolean,
          item: {
            get: Function;
          },
        ) {
          const shape = item.get('keyShape');
          if (name === 'dark') {
            if (value) {
              if (shape.attr('fill') !== '#fff') {
                shape.oriFill = shape.attr('fill');
                const uColor = unlightColorMap.get(shape.attr('fill'));
                shape.attr('fill', uColor);
              } else {
                shape.attr('opacity', 0.2);
              }
            } else {
              if (shape.attr('fill') !== '#fff') {
                shape.attr('fill', shape.oriFill || shape.attr('fill'));
              } else {
                shape.attr('opacity', 1);
              }
            }
          }
        },
      },
      'single-shape',
    );

    G6.registerNode(
      'leaf',
      {
        afterDraw(cfg: any, group: any) {
          const label = group.get('children')[1];
          label.attr('opacity', 0);
          const shapes: any = [label];
          let leftShapeBBox = group.getBBox();
          const tagOffset = 8,
            textPadding = [4, 8];
          let tags = clone(cfg.category);
          tags = tags.concat(cfg.family);
          // tags
          tags.forEach((cat: string) => {
            // tag text
            const text = group.addShape('text', {
              attrs: {
                text: cat,
                fill: '#fff',
                fontSize: 10, //10
                textAlign: 'start',
                textBaseline: 'middle',
                x: leftShapeBBox.maxX + tagOffset + textPadding[1],
                y: 0,
                opacity: 0,
              },
            });
            shapes.push(text);
            const textBBox = text.getBBox();
            // back rect
            const rect = group.addShape('rect', {
              attrs: {
                radius: (textBBox.height + textPadding[0]) / 2,
                width: textBBox.width + textPadding[1] * 2,
                height: textBBox.height + textPadding[0],
                x: leftShapeBBox.maxX + tagOffset,
                y: leftShapeBBox.minY,
                fill: cfg.parentColor,
                opacity: 0,
                // shadowColor: cfg.style.stroke,
                // shadowBlur: 50,
                // shadowOffsetX: 0,
                // shadowOffsetY: 20
              },
            });
            shapes.push(rect);
            text.toFront();
            leftShapeBBox = rect.getBBox();
          });
          shapes.forEach((shape: any) => {
            shape.animate(
              (ratio: number) => {
                return {
                  opacity: ratio,
                };
              },
              {
                duration: 200,
                repeat: false,
                delay: 500,
              },
            );
          });

          const groupBBox = group.getBBox();
          const mask = group.addShape('rect', {
            attrs: {
              x: groupBBox.minX,
              y: groupBBox.minY,
              width: groupBBox.width,
              height: groupBBox.height,
              opacity: 0,
              fill: '#fff',
              cursor: 'pointer',
            },
          });
        },
      },
      'circle',
    );

    G6.registerNode(
      'midpoint',
      {
        afterDraw(cfg: any, group: any) {
          const label = group.get('children')[1];
          label.attr('opacity', 0);
          label.animate(
            (ratio: number) => {
              return {
                opacity: ratio,
              };
            },
            {
              duration: 200,
              repeat: false,
              delay: 500,
            },
          );
          const groupBBox = group.getBBox();
          group.addShape('rect', {
            attrs: {
              x: groupBBox.minX,
              y: groupBBox.minY,
              width: groupBBox.width,
              height: groupBBox.height,
              opacity: 0,
              fill: '#fff',
              cursor: 'pointer',
            },
          });
        },
      },
      'circle',
    );

    G6.registerEdge(
      'tree-edge',
      {
        afterDraw(cfg: any, group: any) {
          setTimeout(() => {
            const curve = group.get('children')[0];
            const backPath = group.get('parent').addShape('path', {
              attrs: {
                ...curve.attr(),
                stroke: '#fff',
                lineWidth: 3,
              },
            });
            backPath.source = cfg.source;
            backPath.toBack();
            backPaths.push(backPath);
          }, 500);
        },
      },
      'cubic-horizontal',
    );

    if (element && element.current) {
      CANVAS_WIDTH = element.current.offsetWidth; // 1320;
      CANVAS_HEIGHT = element.current.offsetHeight; // 696;
    }

    LIMIT_OVERFLOW_WIDTH = CANVAS_WIDTH - 100;
    LIMIT_OVERFLOW_HEIGHT = CANVAS_HEIGHT - 100;

    const decoData = {
      nodes: [
        { id: 'deco1', size: 290, x: 0, y: 0 },
        { id: 'deco2', size: 200, x: 1000, y: 0 },
        { id: 'deco3', size: 160, x: 1300, y: 250 },
        { id: 'deco4', size: 160, x: 100, y: 610 },
        { id: 'deco5', size: 160, x: 1000, y: 630 },
      ],
    };
    decoGraph = new G6.Graph({
      container: element.current as HTMLElement,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      defaultNode: {
        type: 'circle',
        style: {
          lineWidth: 0,
          opacity: 0.32,
          fill: 'l(1.6) 0:#FFA1E3 1:#AE6CFF',
        },
      },
    });
    decoGraph.data(decoData);
    decoGraph.render();

    graph = new G6.TreeGraph({
      container: element.current as HTMLElement,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      layout: layoutCfg,
      modes: {
        default: [
          {
            type: 'drag-canvas',
            direction: 'y',
          },
          collapseExpandCfg,
        ], //'double-finger-drag-canvas',
      },
      defaultEdge: {
        type: 'tree-edge',
        color: '#D8D8D8',
        sourceAnchor: 1,
        targetAnchor: 0,
      },
      animate: true,
      animateCfg: {
        duration: 500,
        easing: 'linearEasing',
      },
    });

    loadData(data);
    graph.get('canvas').set('localRefresh', false);
    const group = graph.get('group');
    const graphBBox = group.getBBox();
    graph.moveTo(Math.abs(graphBBox.x) + 200, Math.abs(graphBBox.y) + 60);

    graph.on('itemcollapsed', () => {
      // remove the white background of current leaf edges
      removeBackPaths();
    });
    // click root to expand
    graph.on('node:click', (e: any) => {
      const item = e.item;
      const model = item.getModel();
      if (model.tag === 'purpose') {
        // update the colors for decoration circles
        decoGraph.getNodes().forEach((node: any) => {
          node.update({
            style: {
              fill: model.color,
            },
          });
        });
        graph.getNodes().forEach((node: any) => {
          const tag = node.getModel().tag;
          if (tag !== 'leaf' && tag !== 'midpoint') return;
          const circle = node.getKeyShape();
          circle.animate(
            (ratio: number) => {
              return {
                opacity: ratio,
              };
            },
            {
              duration: 500,
            },
          );
        });
        graph.getEdges().forEach((edge: any) => {
          if (edge.getModel().source === model.id) {
            const curve = edge.getKeyShape();
            curve.animate(
              (ratio: number) => {
                return {
                  opacity: ratio,
                };
              },
              {
                duration: 500,
              },
            );
          }
        });
      }
    });

    graph.on('node:mouseenter', (e: any) => {
      const { item } = e;
      const model = item.getModel();
      if (model.tag !== 'leaf') {
        return;
      }
      const urls = (chartUrls as any)[model.id.split('-')[0]];
      if (!urls || !urls.linkNames) {
        return;
      }
      const links: string[] = [];
      const links_en: string[] = [];
      urls.linkNames.forEach((name: string, i: number) => {
        const pro = urls.links[i].split('/')[1];
        const pro_en = urls.links[i].split('/')[1];
        const link =
          'https://' +
          pro +
          '.antv.vision' +
          urls.links[i].substr(pro.length + 1);
        const link_en =
          'https://' +
          pro_en +
          '.antv.vision' +
          urls.links_en[i].substr(pro_en.length + 1);
        links.push(link);
        links_en.push(link_en);
      });
      const buttons = urls.linkNames ? (
        urls.linkNames.map((name: string, i: number) => (
          <div
            className={styles.button}
            style={{ width: `${100 / urls.linkNames.length}%` }}
            key={i}
          >
            <a
              href={i18n.language === 'zh' ? links[i] : links_en[i]}
              target="frame1"
            >
              {name}
            </a>
          </div>
        ))
      ) : (
        <div />
      );
      const point = graph.getPointByClient(e.clientX, e.clientY);
      const pos = graph.getCanvasByPoint(point.x, point.y);
      setTooltipStates({
        title: t(model.name),
        imgSrc: urls.imgSrc,
        links: urls.links,
        names: urls.linkNames,
        x: pos.x + 10,
        y: pos.y,
        buttons: <div className={styles.buttons}>{buttons}</div>,
      });
      setTooltipDisplayStates({
        opacity: 1,
        display: 'block',
      });
    });
    graph.on('node:mouseleave', (e: any) => {
      setTooltipDisplayStates({
        opacity: 0,
        display: 'none',
      });
    });

    graph.on('canvas:click', () => {
      Object.keys(purposeMap).forEach((purposeName: any) => {
        const purpose = purposeMap[purposeName];
        purpose.collapsed = true;
      });
      graph.layout();
      removeBackPaths();
    });

    window.onresize = () => {
      if (element && element.current) {
        CANVAS_WIDTH = element.current.offsetWidth; // 1320;
        CANVAS_HEIGHT = element.current.offsetHeight; // 696;
      }
      if (graph) {
        graph.changeSize(CANVAS_WIDTH, CANVAS_HEIGHT);
      }
    };
  }, []);

  function translate(x: number, y: number) {
    let moveX = x;
    let moveY = y;

    const containerWidth = graph.get('width');
    const containerHeight = graph.get('height');

    /* 获得当前偏移量*/
    const group = graph.get('group');
    const bbox = group.getBBox();
    const leftTopPoint = graph.getCanvasByPoint(bbox.minX, bbox.minY);
    const rightBottomPoint = graph.getCanvasByPoint(bbox.maxX, bbox.maxY);
    /* 如果 x 轴在区域内，不允许左右超过100 */
    if (x < 0 && leftTopPoint.x - x > LIMIT_OVERFLOW_WIDTH) {
      moveX = 0;
    }
    if (
      x > 0 &&
      rightBottomPoint.x - x < containerWidth - LIMIT_OVERFLOW_WIDTH
    ) {
      moveX = 0;
    }

    if (y < 0 && leftTopPoint.y - y > LIMIT_OVERFLOW_HEIGHT) {
      moveY = 0;
    }
    if (
      y > 0 &&
      rightBottomPoint.y - y < containerHeight - LIMIT_OVERFLOW_HEIGHT
    ) {
      moveY = 0;
    }
    graph.translate(-moveX, -moveY);
  }

  const loadData = (data: any) => {
    graph.data(data);
    graph.render();
  };

  const processData = (data: any) => {
    const root: any = {
      id: 'antv',
      children: [],
      type: 'image',
      size: 66,
      img: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      anchorPoints: [
        [-0.1, 0.5],
        [1.1, 0.5],
      ],
      tag: 'root',
    };
    const bubbleCfg = {
      collapsed: true,
      type: 'bubble',
      tag: 'purpose',
      size: 170,
      anchorPoints: [
        [-0.08, 0.5],
        [1.1, 0.5],
      ],
      labelCfg: {
        style: {
          fontSize: 14,
          fill: '#fff',
          fontWeight: 300,
          fontStyle: 'bold',
        },
      },
    };
    purposeMap = {};
    let purposeCount = 0;
    Object.keys(data).forEach((chartId: any) => {
      const chart = data[chartId];
      // remove the dulplicated parent-child tag such as Relation and Hierarchy
      let childExist = false,
        parentExist = false,
        parentIdx = -1;
      chart.purpose.forEach((pur: string, i: number) => {
        if (pur === 'Hierarchy' || pur === 'Flow') {
          childExist = true;
        } else if (pur === 'Relation') {
          parentExist = true;
          parentIdx = i;
        }
      });
      if (childExist && parentExist) {
        delete chart.purpose[parentIdx];
      }
      chart.purpose.forEach((pur: string) => {
        if (pur === 'Cluster' || !pur) return; // temperal
        if (pur === 'Hierarchy' || pur === 'Flow') {
          if (!purposeMap['Relation']) {
            purposeCount++;
            const purpose = {
              id: pur,
              label: pur,
              children: [],
              color: gColors[purposeCount % gColors.length],
              gradientColor: gColors[purposeCount % gColors.length],
              ...bubbleCfg,
            };
            root.children.push(purpose);
            purposeMap[pur] = purpose;
          }
          if (!purposeMap[pur]) {
            const color = purposeMap['Relation'].color.split(' ')[2].substr(2);
            const midPoint = {
              id: pur,
              type: 'midpoint',
              tag: 'midpoint',
              size: 12,
              label: pur,
              color,
              gradientColor: purposeMap['Relation'].color,
              children: [],
              style: {
                fill: '#fff',
                stroke: color,
                lineWidth: 2,
              },
              labelCfg: {
                position: 'right',
                offset: 9,
                style: {
                  fill: color,
                  fontSize: 14,
                },
              },
              anchorPoints: [
                [-0.5, 0.5],
                [1.1, 0.5],
              ],
            };
            purposeMap['Relation'].children.push(midPoint);
            purposeMap[pur] = midPoint;
          }
        }

        if (!purposeMap[pur]) {
          purposeCount++;
          const purpose = {
            id: pur,
            label: pur,
            children: [],
            gradientColor: gColors[purposeCount % gColors.length],
            color: gColors[purposeCount % gColors.length],
            ...bubbleCfg,
          };
          root.children.push(purpose);
          purposeMap[pur] = purpose;
        }
        const leaf = processLeaf(chart, purposeMap[pur]);
        purposeMap[pur].children.push(leaf);
      });
    });
    return root;
  };

  const processLeaf = (chart: any, parent: any) => {
    const cloneChart = clone(chart);
    let color = parent.color;
    if (color.split(' ').length > 2) {
      color = color.split(' ')[2].substr(2);
    }
    const cfg = {
      id: `${cloneChart.id}-${uniqueId()}`,
      shape: 'leaf',
      type: 'leaf',
      label: chart.name,
      tag: 'leaf',
      size: 12,
      parentId: parent.id,
      parentColor: parent.gradientColor,
      anchorPoints: [
        [-0.5, 0.5],
        [1.1, 0.5],
      ],
      labelCfg: {
        position: 'right',
        offset: 9,
        style: {
          fill: color,
          fontSize: 14,
        },
      },
      style: {
        fill: '#fff',
        stroke: color,
        lineWidth: 2,
        opacity: 0,
      },
    };
    return Object.assign({}, cloneChart, cfg);
  };

  const removeBackPaths = () => {
    backPaths.forEach((path: any) => {
      path.remove(true);
    });
  };
  const tooltip = (
    <div
      className={styles.tooltip}
      style={{
        opacity: tooltipDisplayStates.opacity,
        display: tooltipDisplayStates.display,
        left: tooltipStates.x,
        top: tooltipStates.y,
      }}
    >
      <div className={styles.tooltipTitle}>
        {tooltipStates.title.replace('\n', '')}
      </div>
      <div className={styles.tooltipContent}>
        <img
          className={styles.tooltipImg}
          src={tooltipStates.imgSrc}
          alt="tooltip"
        />
        <div className={styles.tooltipBtnsContainer}>
          <p className={styles.demoDescription}>demo</p>
          {tooltipStates.buttons}
        </div>
      </div>
    </div>
  );

  const scrollToCanvas = () => {
    const element = document.getElementById('decisionTree');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFullScreen = () => {
    const fullscreenDom: HTMLDivElement = wrapperElement.current as HTMLDivElement;
    if (fullscreenDom) {
      setScreenStates({
        fullscreenDisplay: 'none',
        exitfullscreenDisplay: 'block',
      });
      if (fullscreenDom.requestFullscreen) {
        fullscreenDom.requestFullscreen();
      } else if (fullscreenDom.mozRequestFullscreen) {
        fullscreenDom.mozRequestFullscreen();
      } else if (fullscreenDom.msRequestFullscreen) {
        fullscreenDom.msRequestFullscreen();
      } else if (fullscreenDom.webkitRequestFullscreen) {
        fullscreenDom.webkitRequestFullscreen();
      }
      if (graph && window.screen) {
        graph.changeSize(window.screen.width, window.screen.height);
        loadData(ckbData);
      }
    }
  };
  const handleExitFullscreen = () => {
    if (document) {
      setScreenStates({
        fullscreenDisplay: 'block',
        exitfullscreenDisplay: 'none',
      });
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullscreen) {
        document.mozCancelFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      if (graph && window.screen) {
        graph.changeSize(window.screen.width, window.screen.height);
        loadData(ckbData);
      }
    }
  };

  return (
    <div
      className={classNames(styles.wrapper, 'decisionTreePage')}
      ref={wrapperElement}
    >
      <div className={styles.topContaner}>
        <div className={styles.title} onClick={scrollToCanvas}>
          {t('图表分类')}
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.rightbottom} />
        <div className={styles.content}>
          <div key="block" className={styles.lefttop}>
            <div
              className={classNames(styles.mountNode, 'mountNode')}
              ref={element}
            />
            <a
              href="https://github.com/antvis/G6"
              target="_blank"
              className={styles.canvasDescription}
            >
              Powered by G6
            </a>
            <div
              onClick={handleFullScreen}
              className={classNames(
                styles.fullscreenExitIcon,
                styles.screenButton,
              )}
              style={{ display: screenStates.fullscreenDisplay }}
            >
              <Icon
                type="fullscreen"
                className={classNames(
                  styles.fullscreenExitButton,
                  styles.screenIcon,
                )}
              />
            </div>
            <div
              onClick={handleExitFullscreen}
              className={classNames(
                styles.fullscreenExitButton,
                styles.screenButton,
              )}
              style={{ display: screenStates.exitfullscreenDisplay }}
            >
              <Icon
                type="fullscreen-exit"
                className={classNames(
                  styles.fullscreenExitIcon,
                  styles.screenIcon,
                )}
              />
            </div>
          </div>
        </div>
        {tooltip}
      </div>
    </div>
  );
};

export default DecisionTree;
