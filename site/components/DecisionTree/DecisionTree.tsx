import React, { useEffect, useState, Children } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import styles from './DecisionTree.module.less';
import { CKBJson } from '@antv/knowledge';
import uniqueId from '@antv/util/lib/unique-id';
import clone from '@antv/util/lib/clone';
import { transform } from '@antv/matrix-util';
import chartUrls from '../../data/chart-urls.json';

let graph: any;
let decoGraph: any;
let data: any;
let purposeMap: any = {};
let graphAnimating: boolean = false;
let aftercollapse: boolean = false;
let animateShapes: any = [];

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
  let ckbData = CKBJson('zh-CN');
  if (i18n.language === 'en') {
    ckbData = CKBJson();
  }

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

  const [heightStates, setHeightStates] = useState({
    height: '800px',
  });

  const lightColors = [
    '#FFC9E3',
    '#7CDBF2',
    '#5FE1E7',
    '#A1E71D',
    '#FFE269',
    '#FFA8A8',
    '#FFA1E3',
    '#A7C2FF',
  ];
  const darkColors = [
    '#FF68A7',
    '#5B63FF',
    '#44E6C1',
    '#1BE6B9',
    '#FF5A34',
    '#F76C6C',
    '#AE6CFF',
    '#7F86FF',
  ];

  const shadowColors = [
    '#f89fc9',
    '#9ba9ff',
    '#56d4d1',
    '#87e240',
    '#ffbe81',
    '#ffb0b0',
    '#d19fff',
    '#b4bfff',
  ];

  const gColors: string[] = [];
  const shadowColorMap: any = {};
  lightColors.forEach((lcolor, i) => {
    gColors.push('l(0) 0:' + lcolor + ' 1:' + darkColors[i]);
    shadowColorMap[lcolor] = shadowColors[i];
  });

  const fadeOutItem = (item: any) => {
    const nodeGroup = item.get('group');
    const children = nodeGroup.get('children');
    children.forEach((child: any, i: number) => {
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
    getHeight: (d: any) => {
      if (d.tag === 'purpose') {
        return 72;
      }
      return 24;
    },
    getWidth: (d: any) => {
      if (d.id === 'antv') {
        return 10;
      }
      return 16;
    },
    getVGap: () => {
      return 0;
    },
    getHGap: (d: any) => {
      if (d.id === 'antv') {
        return 160;
      }
      return 140;
    },
  };

  const collapseExpandCfg = {
    type: 'collapse-expand',
    shouldBegin: (e: any) => {
      const model = e.item.getModel();
      if (graphAnimating) return false;

      if (model.tag === 'purpose') {
        animateShapes.forEach((shape: any) => {
          if (shape && !shape.destroyed) shape.pauseAnimate();
        });
        graphAnimating = true;
        return true;
      }
      return false;
    },
    onChange: (item: any, collapsed: boolean) => {
      const model = item.getModel();
      const itemId = model.id;
      const nodes = graph.getNodes();
      nodes.forEach((node: any) => {
        const nodeModel = node.getModel();
        // collapse others
        if (nodeModel.tag === 'purpose' && nodeModel.id !== itemId)
          nodeModel.collapsed = true;
        if (nodeModel.tag === 'leaf' || nodeModel.tag === 'midpoint') {
          fadeOutItem(node);
        }
      });
      const edges = graph.getEdges();
      edges.forEach((edge: any) => {
        const targetNode = edge.get('targetNode');
        if (
          targetNode.getModel().tag === 'leaf' ||
          targetNode.getModel().tag === 'midpoint'
        ) {
          fadeOutItem(edge);
        }
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
    const G6 = require('@antv/g6/es');

    G6.registerEdge(
      'tree-edge',
      {
        afterDraw(cfg: any, group: any) {
          const keyShape = group.get('children')[0];
          const sourceModel = cfg.source.getModel();
          if (sourceModel.tag === 'purpose') {
            keyShape.attr({
              opacity: 0,
            });
            keyShape.animate(
              (ratio: number) => {
                return {
                  opacity: ratio,
                };
              },
              {
                duration: 300,
                delay: 100,
              },
            );
          }
        },
      },
      'cubic-horizontal',
    );

    G6.registerNode('bubble', {
      drawShape(
        cfg: {
          size: number;
          color: string;
          label: string | undefined;
          labelCfg: any | undefined;
        },
        group: any,
      ) {
        const hwRatio = 0.31;
        const r = cfg.size / 2;
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
            shadowColor: shadowColorMap[cfg.color.split(' ')[1].substr(2)],
            shadowBlur: 0,
            matrix: [1, 0, 0, 0, hwRatio, 0, 0, 0, 1],
          },
        });

        animateShapes.push(keyShape);

        let maskMatrix = [1, 0, 0, 0, hwRatio + 0.05, 0, 0, 0, 1];
        maskMatrix = transform(maskMatrix, [
          ['r', 0.13 * (Math.random() * 2 - 1)],
        ]);
        group.addShape('path', {
          attrs: {
            x: 0,
            y: 0,
            path,
            opacity: 0.15,
            fill: cfg.color || 'steelblue',
            matrix: maskMatrix,
          },
        });

        const height = 0.31 * 2 * r + 30;
        const width = 2 * r + 20;
        const rect = group.addShape('rect', {
          attrs: {
            x: -width / 2,
            y: -height / 2,
            width,
            height,
            fill: '#fff',
            opacity: 0,
            cursor: 'pointer',
          },
          className: 'bubble-bbox-mask',
        });
        return rect;
      },
      afterDraw(cfg: any, group: any) {
        const self = this;
        const r = cfg.size / 2;

        if (cfg.label) {
          const labelCfg = cfg.labelCfg || {};
          const labelStyle = labelCfg.style || {};
          const label = group.addShape('text', {
            attrs: {
              text: cfg.label,
              x: 0,
              y: 0,
              fontSize: labelStyle.fontSize || 14,
              fontWeight: labelStyle.fontWeight || 'bold',
              fill: labelStyle.fill || '#fff',
              cursor: 'pointer',
            },
          });
          const labelBBox = label.getBBox();
          label.attr({
            x: -labelBBox.width / 2,
            y: labelBBox.height / 2,
          });
        }

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
        const children = group.get('children');
        const bubble = children[0];
        bubble.animate(
          (ratio: number) => {
            const path = self.getBubblePath(
              r,
              spNum,
              directions,
              rs,
              floatRange,
              speedConst,
            );
            return {
              path,
            };
          },
          {
            repeat: true,
            duration: 10000,
            delay: Math.random() * 1000,
          },
        );

        // const directions2: number[] = [],
        //   rs2: number[] = [];
        // self.changeDirections(spNum, directions2);
        // const maskR = r * 1.03;
        // for (let i = 0; i < spNum; i++) {
        //   const rr =
        //     maskR + directions2[i] * (Math.random() * maskR * speedConst); // +-r/6, the sign according to the directions
        //   if (rs2[i] < (1 - floatRange) * maskR)
        //     rs2[i] = (1 - floatRange) * maskR;
        //   else if (rs2[i] > (1 + floatRange) * maskR)
        //     rs2[i] = (1 + floatRange) * maskR;
        //   rs2.push(rr);
        // }
        // children[1].animate(
        //   () => {
        //     const path = self.getBubblePath(
        //       maskR,
        //       spNum,
        //       directions2,
        //       rs2,
        //       floatRange,
        //       speedConst,
        //     );
        //     return { path };
        //   },
        //   {
        //     repeat: true,
        //     duration: 10000,
        //     delay: Math.random() * 1000,
        //   },
        // );
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
            const cpAngleRand = unitAngle / 3;
            const cpR = rs[i] / Math.cos(cpAngleRand);
            const sign = j === 0 ? -1 : 1;
            const x = cpR * Math.cos(angleSum + sign * cpAngleRand);
            const y = cpR * Math.sin(angleSum + sign * cpAngleRand);
            cps.push({ x, y });
          }
          spAngleOffset = (Math.random() * unitAngle) / 3 - unitAngle / 6;
          angleSum += unitAngle;
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
      update(cfg: any, group: any) {},
      setState(name: string, value: boolean, item: any) {
        if (name === 'highlight') {
          const group = item.get('group');
          const keyShape = group.get('children')[0];
          if (value) {
            keyShape.animate(
              {
                shadowBlur: 30,
              },
              {
                duration: 150,
                callback: () => {
                  graphAnimating = false;
                },
              },
            );
          } else {
            keyShape.animate(
              {
                shadowBlur: 0,
              },
              {
                duration: 150,
                callback: () => {
                  graphAnimating = false;
                },
              },
            );
          }
        }
      },
    });

    G6.registerNode(
      'leaf',
      {
        afterDraw(cfg: any, group: any) {
          graphAnimating = true;
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
                fill: '#8C8C8C',
                fontSize: 10,
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
                fill: '#fff',
                stroke: '#d8d8d8',
                lineWidth: 1,
                opacity: 0,
                fontSize: 10,
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
                delay: 200,
                callback: () => {
                  graphAnimating = false;
                },
              },
            );
          });

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
        setState(name: string, value: boolean, item: any) {
          if (name === 'dark') {
            const group = item.get('group');
            group.stopAnimate();
            if (value) {
              group.animate({ opacity: 0.5 }, { duration: 150 });
            } else {
              group.animate({ opacity: 1 }, { duration: 150 });
            }
          }
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
          graphAnimating = true;
          label.animate(
            (ratio: number) => {
              return {
                opacity: ratio,
              };
            },
            {
              duration: 200,
              repeat: false,
              delay: 200,
              callback: () => {
                graphAnimating = false;
              },
            },
          );
          // transparent rect for hover responsing
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
            className: 'bubble-bbox-mask',
          });
        },
        setState(name: string, value: boolean, item: any) {
          if (name === 'dark') {
            const group = item.get('group');
            group.stopAnimate();
            if (value) {
              group.animate({ opacity: 0.5 }, { duration: 150 });
            } else {
              group.animate({ opacity: 1 }, { duration: 150 });
            }
          }
        },
      },
      'circle',
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
      height: CANVAS_HEIGHT * 2,
      defaultNode: {
        type: 'circle',
        shape: 'circle',
        style: {
          lineWidth: 0,
          opacity: 0.1,
          fill: 'l(1.6) 0:#FFA1E3 1:#AE6CFF',
        },
      },
    });
    decoGraph.data(decoData);
    decoGraph.render();

    graph = new G6.TreeGraph({
      container: element.current as HTMLElement,
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT * 2,
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
        duration: 300,
        easing: 'easeQuadInOut',
        callback: () => {
          graphAnimating = false;
        },
      },
    });

    loadData(data);
    const group = graph.get('group');
    const graphBBox = group.getBBox();
    graph.moveTo(Math.abs(graphBBox.x) + 200, Math.abs(graphBBox.y) + 60);

    let currentPurpose: any;
    graph.on('itemcollapsed', (e: any) => {
      const { item } = e;
      currentPurpose = item;
      aftercollapse = true;
    });

    const paddingTop = 40;
    const oriGroupBBoxHeight =
      graph.get('group').getCanvasBBox().height + 2 * paddingTop;
    graph.on('afteranimate', () => {
      if (!currentPurpose || !aftercollapse) return;
      aftercollapse = false;
      const model = currentPurpose.getModel();
      let matrix = graph.get('group').getMatrix();
      if (!matrix) matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      const canvasBBox = graph.get('group').getCanvasBBox();
      const minY = canvasBBox.minY;
      const height = canvasBBox.height + paddingTop * 2;
      const move = -(minY - paddingTop);

      graphAnimating = true;
      let lastY = 0;
      graph.get('group').animate(
        (ratio: number) => {
          matrix = transform(matrix, [['t', 0, ratio * move - lastY]]);
          lastY = ratio * move;
          graph.get('group').setMatrix(matrix);
        },
        {
          duration: 300,
          callback: () => {
            graphAnimating = false;
          },
        },
      );
      CANVAS_HEIGHT = (800 * height) / oriGroupBBoxHeight + 2 * paddingTop;
      setHeightStates({
        height: `${CANVAS_HEIGHT}px`,
      });
    });

    graph.on('afteranimate', () => {
      animateShapes.forEach((shape: any) => {
        if (shape && !shape.destroyed) shape.resumeAnimate();
      });
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
              duration: 200,
              delay: 100,
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

      // update the colors for decoration circles
      decoGraph.getNodes().forEach((node: any) => {
        node.update({
          style: {
            fill: model.color,
          },
        });
      });

      // highlight
      const nodes = graph.getNodes();
      if (model.tag === 'leaf' || model.tag === 'midpoint') {
        nodes.forEach((node: any) => {
          const nodeModel = node.getModel();
          if (nodeModel.tag !== 'leaf' && nodeModel.tag !== 'midpoint') return;
          if (nodeModel.id === model.id) {
            graph.setItemState(node, 'dark', false);
          } else {
            graph.setItemState(node, 'dark', true);
          }
        });
      } else if (model.tag === 'purpose') {
        nodes.forEach((node: any) => {
          const nodeModel = node.getModel();
          if (nodeModel.id === model.id) {
            graph.setItemState(node, 'highlight', true);
          } else {
            graph.setItemState(node, 'highlight', false);
          }
        });
      }

      // tooltip
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
      const labelShape = item.get('group').findByClassName('node-label');
      const shapeBBox = labelShape.getBBox();
      const pos = graph.getCanvasByPoint(
        model.x + shapeBBox.maxX,
        model.y + shapeBBox.minY,
      );
      setTooltipStates({
        title: t(model.name),
        imgSrc: urls.imgSrc,
        links: urls.links,
        names: urls.linkNames,
        x: pos.x + 8,
        y: pos.y,
        buttons: <div className={styles.buttons}>{buttons}</div>,
      });
      setTooltipDisplayStates({
        opacity: 1,
        display: 'block',
      });
    });
    graph.on('node:mouseleave', (e: any) => {
      // cancel highlight
      const nodes = graph.getNodes();
      nodes.forEach((node: any) => {
        graph.setItemState(node, 'dark', false);
        graph.setItemState(node, 'highlight', false);
      });

      setTooltipDisplayStates({
        opacity: 0,
        display: 'none',
      });
    });

    graph.on('canvas:click', () => {
      if (graphAnimating) return;
      Object.keys(purposeMap).forEach((purposeName: any) => {
        const purpose = purposeMap[purposeName];
        if (purpose.tag !== 'purpose') return;
        purpose.collapsed = true;
      });

      const nodes = graph.getNodes();
      nodes.forEach((node: any) => {
        const nodeModel = node.getModel();
        if (nodeModel.tag !== 'leaf') return;
        fadeOutItem(node);
      });
      const edges = graph.getEdges();
      edges.forEach((edge: any) => {
        const targetNode = edge.get('targetNode');
        if (targetNode.getModel().tag !== 'leaf') return;
        fadeOutItem(edge);
      });

      aftercollapse = true;
      graph.layout();
    });

    window.onresize = () => {
      if (element && element.current) {
        CANVAS_WIDTH = element.current.offsetWidth; // 1320;
        CANVAS_HEIGHT = element.current.offsetHeight; // 696;
      }
      if (graph) {
        graph.changeSize(CANVAS_WIDTH, CANVAS_HEIGHT * 2);
        decoGraph.changeSize(window.screen.width, window.screen.height * 2);
      }
    };
  }, []);

  const loadData = (data: any) => {
    graph.data(data);
    graph.render();
  };

  const processData = (data: any) => {
    const root: any = {
      id: 'antv',
      children: [],
      type: 'image',
      shape: 'image',
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
      shape: 'bubble',
      tag: 'purpose',
      size: 165,
      anchorPoints: [
        [-0.08, 0.5],
        [1.1, 0.5],
      ],
      labelCfg: {
        style: {
          fontSize: 16,
          fill: '#fff',
          fontWeight: 350,
        },
      },
    };
    purposeMap = {};
    let purposeCount = 0;
    const relationMidPoints: any = [];
    Object.keys(data).forEach((chartId: any) => {
      const chart = data[chartId];
      // remove the dulplicated parent-child tag such as Relation and Hierarchy
      let childExist = false,
        parentExist = false,
        parentIdx = -1;
      chart.purpose.forEach((pur: string, i: number) => {
        if (pur === t('层级') || pur === t('流向')) {
          childExist = true;
        } else if (pur === t('关系')) {
          parentExist = true;
          parentIdx = i;
        }
      });
      if (childExist && parentExist) {
        delete chart.purpose[parentIdx];
      }
      chart.purpose.forEach((pur: string) => {
        if (pur === t('聚类') || !pur) return; // temperal
        if (pur === t('层级') || pur === t('流向')) {
          if (!purposeMap[t('关系')]) {
            purposeCount++;
            const purpose = {
              id: t('关系'),
              label: t('关系'),
              children: [],
              color: gColors[purposeCount % gColors.length],
              gradientColor: gColors[purposeCount % gColors.length],
              ...bubbleCfg,
              labelCfg: bubbleCfg.labelCfg,
            };
            root.children.push(purpose);
            purposeMap[t('关系')] = purpose;
          }
          if (!purposeMap[pur]) {
            const color = purposeMap[t('关系')].color.split(' ')[2].substr(2);
            const midPoint = {
              id: pur,
              type: 'midpoint',
              tag: 'midpoint',
              size: 6,
              label: pur,
              color,
              gradientColor: purposeMap[t('关系')].color,
              children: [],
              style: {
                fill: '#fff',
                stroke: '#d8d8d8',
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
                [9, 0.5],
              ],
            };
            relationMidPoints.push(midPoint);
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
            labelCfg: bubbleCfg.labelCfg,
          };
          root.children.push(purpose);
          purposeMap[pur] = purpose;
        }
        const leaf = processLeaf(chart, purposeMap[pur]);
        purposeMap[pur].children.push(leaf);
      });
    });
    relationMidPoints.forEach((midpoint: any) => {
      purposeMap[t('关系')].children.push(midpoint);
    });
    Object.keys(purposeMap).forEach((purposeName: any) => {
      const purpose = purposeMap[purposeName];
      const children = purpose.children;
      let childNum = children.length;
      children.forEach((child: any) => {
        const cc = child.children;
        if (cc) {
          childNum += cc.length;
        }
      });
      purpose.label = `${purpose.label} (${childNum})`;
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
      size: 6,
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
        stroke: '#d8d8d8',
        lineWidth: 2,
        opacity: 0,
      },
    };
    return Object.assign({}, cloneChart, cfg);
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
        graph.changeSize(window.screen.width, window.screen.height * 2);
        decoGraph.changeSize(window.screen.width, window.screen.height * 2);
        loadData(data);
        const group = graph.get('group');
        const graphBBox = group.getBBox();
        graph.moveTo(Math.abs(graphBBox.x) + 200, Math.abs(graphBBox.y) + 60);
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
        graph.changeSize(window.screen.width, window.screen.height * 2);
        decoGraph.changeSize(window.screen.width, window.screen.height * 2);
        loadData(data);
        const group = graph.get('group');
        const graphBBox = group.getBBox();
        graph.moveTo(Math.abs(graphBBox.x) + 200, Math.abs(graphBBox.y) + 60);
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
      <div
        className={styles.contentWrapper}
        style={{ height: heightStates.height }}
      >
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
