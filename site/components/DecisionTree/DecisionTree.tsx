import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Icon } from 'antd';
import styles from './DecisionTree.module.less';

import chartTypeData from '../../data/decision-tree-chartype.json';
import goalData from '../../data/decision-tree-goal.json';
import dataTypeData from '../../data/decision-tree-datatype.json';

let graph: any;
let showNodes: any[] = [];
let showEdges: any[] = [];
let curShowNodes: any[] = [];
let curShowEdges: any[] = [];
let nodes: any[] = [];
let edges: any[] = [];
let nodeMap = new Map();
let edgesMap = new Map();
let curShowNodesMap = new Map();
let highlighting = false;
let currentFocus: any;
let currentData: any = goalData;

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

  const [tooltipStates, setTooltipStates] = useState({
    display: 'none',
    title: '',
    imgSrc: '',
    links: [],
    names: [],
    x: 0,
    y: 0,
    buttons: <a></a>,
  });
  const [screenStates, setScreenStates] = useState({
    fullscreenDisplay: 'block',
    exitfullscreenDisplay: 'none',
  });

  const [tabStates, setTabStates] = useState({
    goalTabBackground: 'linear-gradient(0deg, #B7A1FF 37.5%, #F0F5FA 37.5%)',
    chartTypeTabBackground: '',
    dataTypeTabBackground: '',
    goalTextColor: '#0D1A26',
    chartTypeTextColor: '#697B8C',
    dataTypeTextColor: '#697B8C',
    goalTextWeight: 450,
    chartTypeTextWeight: 400,
    dataTypeTextWeight: 400,
    current: 'goal',
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

  const layoutCfg = {
    type: 'force',
    nodeSize: (d: { size: number }) => {
      return d.size / 2 + 5;
    },
    nodeStrength: 2500,
    collideStrength: 0.8,
    alphaDecay: 0.01,
    preventOverlap: true,
    onTick: () => {
      const nodeItems = graph.getNodes();
      const height = graph.get('height');
      const width = graph.get('width');
      const padding = 10;
      nodeItems.forEach((item: any) => {
        const model = item.getModel();
        if (model.x > width - padding) model.x = width - padding;
        else if (model.x < padding) model.x = padding;

        if (model.y > height - padding) model.y = height - padding;
        else if (model.y < padding) model.y = padding;
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
    const G6 = require('@antv/g6');
    const Util = G6.Util;

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
            },
          });

          const mask = group.addShape('path', {
            attrs: {
              x: 0,
              y: 0,
              path,
              opacity: 0.25,
              fill: cfg.color || 'steelblue',
              shadowColor: cfg.color.split(' ')[2].substr(2), //cfg.color,
              shadowBlur: 40,
              shadowOffsetX: 0,
              shadowOffsetY: 30,
            },
          });

          const spNum = 10; // split points number
          const directions: number[] = [],
            rs: number[] = [];
          self.changeDirections(spNum, directions);
          for (let i = 0; i < spNum; i++) {
            const rr = r + directions[i] * ((Math.random() * r) / 1000); // +-r/6, the sign according to the directions
            if (rs[i] < 0.97 * r) rs[i] = 0.97 * r;
            else if (rs[i] > 1.03 * r) rs[i] = 1.03 * r;
            rs.push(rr);
          }
          keyShape.animate(
            {
              onFrame() {
                const path = self.getBubblePath(r, spNum, directions, rs);
                return { path };
              },
              repeat: true,
            },
            10000,
          );

          const directions2: number[] = [],
            rs2: number[] = [];
          self.changeDirections(spNum, directions2);
          for (let i = 0; i < spNum; i++) {
            const rr = r + directions2[i] * ((Math.random() * r) / 1000); // +-r/6, the sign according to the directions
            if (rs2[i] < 0.97 * r) rs2[i] = 0.97 * r;
            else if (rs2[i] > 1.03 * r) rs2[i] = 1.03 * r;
            rs2.push(rr);
          }
          mask.animate(
            {
              onFrame() {
                const path = self.getBubblePath(r, spNum, directions2, rs2);
                return { path };
              },
              repeat: true,
            },
            10000,
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
        ) {
          const path = [];
          const cpNum = spNum * 2; // control points number
          const unitAngle = (Math.PI * 2) / spNum; // base angle for split points
          let angleSum = 0;
          let spAngleOffset = 0; // split point's offset
          const sps = [];
          const cps = [];
          for (let i = 0; i < spNum; i++) {
            const speed = 0.001 * Math.random();
            rs[i] = rs[i] + directions[i] * speed * r; // +-r/6, the sign according to the directions
            if (rs[i] < 0.97 * r) {
              rs[i] = 0.97 * r;
              directions[i] = -1 * directions[i];
            } else if (rs[i] > 1.03 * r) {
              rs[i] = 1.03 * r;
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
      'animate-circle',
      {
        setState(
          name: string,
          value: boolean,
          item: {
            get: Function;
            getModel: Function;
          },
        ) {
          const shape = item.get('keyShape');
          const label = shape.get('parent').get('children')[1];
          if (name === 'disappearing' && value) {
            shape.animate(
              {
                onFrame(ratio: number) {
                  return {
                    opacity: 1 - ratio,
                    r: shape.attr('r') * (1 - ratio),
                  };
                },
              },
              200,
            );
            label.animate(
              {
                onFrame(ratio: number) {
                  return {
                    opacity: 1 - ratio,
                  };
                },
              },
              500,
            );
          } else if (name === 'appearing' && value) {
            const r = item.getModel().size / 2;
            shape.animate(
              {
                onFrame(ratio: number) {
                  return {
                    opacity: ratio,
                    r: r * ratio,
                    fill: shape.attr('fill'),
                  };
                },
              },
              300,
            );
            label.animate(
              {
                onFrame(ratio: number) {
                  return {
                    opacity: ratio,
                  };
                },
              },
              500,
            );
          } else if (name === 'dark') {
            if (value) {
              if (shape.attr('fill') !== '#fff') {
                shape.oriFill = shape.attr('fill');
                const uColor = unlightColorMap.get(shape.attr('fill'));
                shape.attr('fill', uColor);
              } else {
                shape.attr('opacity', 0.2);
                label.attr('fill', '#A3B1BF');
              }
            } else {
              if (shape.attr('fill') !== '#fff') {
                shape.attr('fill', shape.oriFill || shape.attr('fill'));
              } else {
                shape.attr('opacity', 1);
                label.attr('fill', '#697B8C');
              }
            }
          }
        },
      },
      'circle',
    );

    G6.registerEdge(
      'animate-line',
      {
        drawShape(
          cfg: {
            size: number;
            color: string;
          },
          group: any,
        ) {
          const self = this;
          let shapeStyle = self.getShapeStyle(cfg);
          shapeStyle = Util.mix(shapeStyle, {
            opacity: 0,
            strokeOpacity: 0,
          });
          const keyShape = group.addShape('path', {
            attrs: shapeStyle,
          });
          return keyShape;
        },
        afterDraw(
          cfg: {
            size: number;
            color: string;
            style: {
              opacity: number;
              strokeOpacity: number;
            };
          },
          group: any,
        ) {
          const shape = group.get('children')[0];
          shape.animate(
            {
              onFrame(ratio: number) {
                const opacity = ratio * cfg.style.opacity;
                const strokeOpacity = ratio * cfg.style.strokeOpacity;
                return {
                  opacity: ratio || opacity,
                  strokeOpacity: ratio || strokeOpacity,
                };
              },
            },
            300,
          );
        },
        setState(
          name: string,
          value: boolean,
          item: {
            get: Function;
            getModel: Function;
          },
        ) {
          const shape = item.get('keyShape');
          if (name === 'disappearing' && value) {
            shape.animate(
              {
                onFrame(ratio: number) {
                  return {
                    opacity: 1 - ratio,
                    strokeOpacity: 1 - ratio,
                  };
                },
              },
              200,
            );
          } else if (name === 'dark') {
            if (value) shape.attr('opacity', 0.2);
            else shape.attr('opacity', 1);
          } else if (name === 'light') {
            if (value) shape.attr('lineWidth', 1.5);
            else shape.attr('lineWidth', 0.5);
          }
        },
      },
      'line',
    );

    setTimeout(() => {
      if (element && element.current) {
        CANVAS_WIDTH = element.current.offsetWidth; // 1320;
        CANVAS_HEIGHT = element.current.offsetHeight; // 696;
      }

      LIMIT_OVERFLOW_WIDTH = CANVAS_WIDTH - 100;
      LIMIT_OVERFLOW_HEIGHT = CANVAS_HEIGHT - 100;

      // if (!graph) {

      graph = new G6.Graph({
        container: element.current as HTMLElement,
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        linkCenter: true,
        layout: layoutCfg,
        animateCfg: {
          duration: 400,
          easing: 'easeQuadInOut',
        },
        modes: {
          default: ['drag-canvas'], //'double-finger-drag-canvas',
        },
        defaultNode: {
          shape: 'bubble',
          size: 95,
          labelCfg: {
            position: 'center',
            style: {
              fill: 'white',
              fontStyle: 'bold',
            },
          },
        },
        defaultEdge: {
          color: '#888',
          shape: 'animate-line',
        },
      });

      // }

      graph.on('node:mouseenter', (e: any) => {
        const item = e.item;
        const model = item.getModel();
        if (model.level === 0) {
          return;
        }
        highlighting = true;
        graph.setAutoPaint(false);
        const nodeItems = graph.getNodes();
        const edgeItems = graph.getEdges();
        nodeItems.forEach((node: any) => {
          graph.setItemState(node, 'dark', true);
          node.getModel().light = false;
        });
        graph.setItemState(item, 'dark', false);
        model.light = true;
        const tags = model.tags;
        const findTagsMap = new Map();
        let mid = 0;

        let fTag: string = '';
        // if the model is F node, find the leaves of it
        if (!model.isLeaf && model.level !== 0) {
          fTag = model.tag;
          nodeItems.forEach((item: any) => {
            const itemModel = item.getModel();
            if (!itemModel.isLeaf) return;
            const modelTags = itemModel.tags;
            modelTags.forEach((mt: string) => {
              const mts = mt.split('-');
              if (mts[1] === fTag) {
                graph.setItemState(item, 'dark', false);
                itemModel.light = true;
              }
            });
          });
        }

        // find the tags
        tags.forEach((t: string) => {
          const ts = t.split('-');
          findTagsMap.set(ts[0], mid);
          mid++;
          if (ts[1]) {
            findTagsMap.set(ts[1], mid);
            mid++;
          }
        });
        // find the nodes with tag === tags[?]
        nodeItems.forEach((item: any) => {
          const node = item.getModel();
          if (findTagsMap.get(node.tag) !== undefined) {
            graph.setItemState(item, 'dark', false);
            node.light = true;
          }
        });
        edgeItems.forEach((item: any) => {
          const source = item.getSource().getModel();
          const target = item.getTarget().getModel();
          if (source.light && target.light) {
            graph.setItemState(item, 'dark', false);
            graph.setItemState(item, 'light', true);
          } else {
            graph.setItemState(item, 'dark', true);
            graph.setItemState(item, 'light', false);
          }
        });
        graph.paint();
        graph.setAutoPaint(true);
      });

      graph.on('node:mouseleave', (e: any) => {
        if (highlighting) {
          const nodeItems = graph.getNodes();
          const edgeItems = graph.getEdges();
          highlighting = false;
          nodeItems.forEach((item: any) => {
            graph.setItemState(item, 'dark', false);
          });
          edgeItems.forEach((item: any) => {
            graph.setItemState(item, 'dark', false);
            graph.setItemState(item, 'light', false);
          });
        }
        setTooltipStates({
          display: 'none',
          title: '',
          imgSrc: '',
          links: [],
          names: [],
          x: 0,
          y: 0,
          buttons: <div />,
        });
      });
      currentData = goalData;
      loadData(goalData);

      // click root to expand
      graph.on('node:click', (e: any) => {
        curShowNodes = [];
        curShowEdges = [];
        const item = e.item;
        const model = item.getModel();
        if (!model.isLeaf && model.level !== 0) {
          return;
        }
        // if clicked a leaf, highlight the relative items
        if (model.isLeaf) {
          const buttons = model.linkNames ? (
            model.linkNames.map((name: string, i: number) => (
              <div
                className={styles.button}
                style={{ width: `${100 / model.linkNames.length}%` }}
                key={i}
              >
                <a
                  href={
                    i18n.language === 'zh' ? model.links[i] : model.links_en[i]
                  }
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
            display: 'block',
            title: t(model.name),
            imgSrc: model.imgSrc,
            links: model.links,
            names: model.linkNames,
            x: pos.x,
            y: pos.y,
            buttons: <div className={styles.buttons}>{buttons}</div>,
          });
        }
        // if clicked a root, hide unrelated items and show the related items
        else if (model.level === 0) {
          const layoutController = graph.get('layoutController');
          const forceLayout = layoutController.layoutMethod;
          forceLayout.forceSimulation.stop();
          // light the level 0 nodes
          showNodes.forEach(snode => {
            const item = graph.findById(snode.id);
            graph.setItemState(item, 'dark', false);
            // make the clicked root on the top of all the nodes
            if (snode.id === model.id) {
              item.toFront();
            }
            // move the other roots to the left and right side of the canvas
            // if (snode.x < 0.5 * CANVAS_WIDTH) {
            //   snode.x = 300;
            // } else {
            //   snode.x = CANVAS_WIDTH - 300;
            // }
          });
          model.x = graph.get('width') / 2;
          model.y = graph.get('height') / 2;
          // graph.layout();

          // animatively hide the items which are going to disappear
          if (curShowEdges.length) {
            curShowEdges.forEach(csedge => {
              const item = graph.findById(csedge.id);
              item && graph.setItemState(item, 'disappearing', true);
            });
          }
          curShowNodes.forEach(csnode => {
            const item = graph.findById(csnode.id);
            item && graph.setItemState(item, 'disappearing', true);
          });
          graph.positionsAnimate();

          // reset curShowNodes nad curShowEdges
          curShowNodes = [];
          curShowEdges = [];

          // click on the same node which is the current focus node, hide the small nodes, change the layout parameters to roots view
          if (currentFocus && currentFocus.id === model.id) {
            currentFocus = undefined;
            layoutController.layoutCfg.nodeStrength = 2500;
            layoutController.layoutCfg.collideStrength = 0.8;
            layoutController.layoutCfg.alphaDecay = 0.01;
          } else {
            // click other focus node, hide the current small nodes and show the related nodes
            currentFocus = model;
            // change data after the original items disappearing
            const layoutController = graph.get('layoutController');
            layoutController.layoutCfg.nodeStrength = () => {
              return -20;
            };
            layoutController.layoutCfg.collideStrength = 0.2;
            layoutController.layoutCfg.linkDistance = (d: any) => {
              if (d.source.level !== 0) return 120;
              const length = 250;
              return length;
            };
            layoutController.layoutCfg.edgeStrength = () => {
              return 0.1;
            };
            const simulation = layoutController.layoutMethod.forceSimulation;
            simulation.velocityDecay = () => {
              return 0.001;
            };

            const tag = model.tag;
            const findTags: string[] = [];
            curShowNodesMap = new Map();
            // find the nodes which are the descendants of clicked model
            nodes.forEach((node: any) => {
              if (!node.tags) return;
              const tags = node.tags;
              const tlength = tags.length;
              let isChild = false;
              const parents = [];
              for (let i = 0; i < tlength; i++) {
                const ts = tags[i].split('-');
                if (ts[0] === tag) {
                  isChild = true;
                }
                parents.push(nodeMap.get(ts[0]));
              }
              if (isChild) {
                if (!node.style) node.style = {};
                node.style.lineWidth = 0;
                node.style.opacity = 1;
                if (node.isLeaf) {
                  node.shape = 'animate-circle';
                  let color = 'l(0)';
                  const parentsNum = parents.length;
                  parents.forEach((parent, i) => {
                    const parentColor = parent.color.split(' ')[1].substr(2);
                    color += ` ${i / (parentsNum - 1)}:${parentColor}`;
                  });
                  if (parentsNum === 1) {
                    color = model.color.split(' ')[1].substr(2);
                  }
                  node.color = color;
                  node.style.fill = color;
                  node.style.fill = '#fff';
                  node.style.lineWidth = 1;
                  node.size = 60;
                  node.labelCfg = {
                    style: {
                      fontSize: 11,
                      lineHeight: 19,
                      fill: '#697B8C',
                    },
                    position: 'center',
                  };
                } else if (node.level !== 0) {
                  node.shape = 'bubble';
                  node.size = 95;
                  if (!node.style) node.style = {};
                  node.color = model.color;
                  node.style.fill = model.color;
                  node.labelCfg = {
                    style: {
                      fill: '#fff',
                      fontSize: 14,
                    },
                    position: 'center',
                  };
                }

                const randomAngle = Math.random() * 2 * Math.PI;
                node.x =
                  model.x +
                  (Math.cos(randomAngle) * model.size) / 2 -
                  (Math.cos(Math.PI + randomAngle) * node.size) / 2;
                node.y =
                  model.y +
                  (Math.sin(randomAngle) * model.size) / 2 -
                  (Math.sin(Math.PI + randomAngle) * node.size) / 2;

                curShowNodes.push(node);
                curShowNodesMap.set(node.id, node);

                // add the edge connect from model to node which exits in edges
                const edgeId = `${model.id}-${node.id}`;
                const edge = edgesMap.get(edgeId);
                if (edge) {
                  edge.color = model.color;
                  curShowEdges.push(edge);
                }
                tags.forEach((t: string) => {
                  const ts = t.split('-');
                  if (ts[0] !== tag) {
                    findTags.push(ts[0]);
                  }
                  if (ts[1]) {
                    findTags.push(ts[1]);
                  }
                });
              }
            });

            // find the nodes which are the ancestors of the current curShowNodes
            nodes.forEach((node: any) => {
              const findTagsLength = findTags.length;
              for (let i = 0; i < findTagsLength; i++) {
                if (
                  node.tag === findTags[i] &&
                  curShowNodesMap.get(node.id) === undefined
                ) {
                  curShowNodes.push(node);
                  curShowNodesMap.set(node.id, node);
                  return;
                }
              }
            });

            // find the edges whose target end source are in the curShowNodes
            curShowNodes.forEach((nu, i) => {
              const lu = nu.level;
              curShowNodes.forEach((nv, j) => {
                if (j <= i) return;
                const lv = nv.level;
                let edgeId;
                if (lu < lv) {
                  edgeId = `${nu.id}-${nv.id}`;
                } else {
                  edgeId = `${nv.id}-${nu.id}`;
                }
                let color = model.color;
                if (nu.isLeaf) {
                  if (nv.level === 0 && nv.tag !== model.tag) color = '#DFE5EB';
                  else if (!nv.isLeaf && nv.tags[0] !== model.tag)
                    color = '#DFE5EB';
                } else if (nv.isLeaf) {
                  if (nu.level === 0 && nu.tag !== model.tag) color = '#DFE5EB';
                  else if (!nu.isLeaf && nu.tags[0] !== model.tag)
                    color = '#DFE5EB';
                }
                const edge = edgesMap.get(edgeId);
                if (edge) {
                  edge.color = color;
                  curShowEdges.push(edge);
                }
              });
            });
          }
          setTimeout(() => {
            graph.changeData({
              nodes: showNodes.concat(curShowNodes),
              edges: showEdges.concat(curShowEdges),
            });
            const nodeItems = graph.getNodes();
            const edgeItems = graph.getEdges();
            edgeItems.forEach((item: any) => {
              graph.clearItemStates(item);
            });
            nodeItems.forEach((item: any) => {
              graph.clearItemStates(item);
              graph.setItemState(item, 'appearing', true);
            });
          }, 400);
        }
      });
      graph.on('canvas:click', () => {
        currentFocus = undefined;
        const forceLayout = graph.get('layoutController').layoutMethod;
        forceLayout.forceSimulation.stop();
        const nodeItems = graph.getNodes();
        const edgeItems = graph.getEdges();
        if (highlighting) {
          highlighting = false;
          nodeItems.forEach((item: any) => {
            graph.setItemState(item, 'dark', false);
          });
          edgeItems.forEach((item: any) => {
            graph.setItemState(item, 'dark', false);
            graph.setItemState(item, 'light', false);
          });
        } else {
          nodeItems.forEach((item: any) => {
            const model = item.getModel();
            if (model.level === 0) {
              graph.setItemState(item, 'dark', false);
            } else {
              graph.setItemState(item, 'disappearing', true);
            }
          });
          edgeItems.forEach((item: any) => {
            graph.setItemState(item, 'disappearing', true);
          });
          curShowNodes = [];
          curShowEdges = [];
          setTimeout(() => {
            const layoutController = graph.get('layoutController');
            layoutController.layoutCfg.nodeStrength = 2500;
            layoutController.layoutCfg.collideStrength = 0.8;
            layoutController.layoutCfg.alphaDecay = 0.01;

            graph.changeData({
              nodes: showNodes,
              edges: showEdges,
            });
          }, 400);
        }
      });

      window.onresize = () => {
        if (element && element.current) {
          CANVAS_WIDTH = element.current.offsetWidth; // 1320;
          CANVAS_HEIGHT = element.current.offsetHeight; // 696;
        }
        if (graph) {
          const layoutController = graph.get('layoutController');
          const forceLayout = layoutController.layoutMethod;
          forceLayout.center = [CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2];
          graph.changeSize(CANVAS_WIDTH, CANVAS_HEIGHT);
        }
      };

      function refreshDragedNodePosition(e: { item: any; x: any; y: any }) {
        const model = e.item.get('model');
        model.fx = e.x;
        model.fy = e.y;
      }
      graph.on('node:dragstart', (e: { item: any; x: any; y: any }) => {
        graph.layout();
        refreshDragedNodePosition(e);
      });
      graph.on('node:drag', (e: { item: any; x: any; y: any }) => {
        refreshDragedNodePosition(e);
      });
      graph.on('node:dragend', (e: { item: any }) => {
        e.item.get('model').fx = null;
        e.item.get('model').fy = null;
      });
    }, 1700);
  }, []);

  const mapNodeSize = (
    nodes: any[],
    propertyName: string,
    visualRange: number[],
  ) => {
    let minp = 9999999999;
    let maxp = -9999999999;
    nodes.forEach(node => {
      minp = node[propertyName] < minp ? node[propertyName] : minp;
      maxp = node[propertyName] > maxp ? node[propertyName] : maxp;
    });
    const rangepLength = maxp - minp;
    const rangevLength = visualRange[1] - visualRange[0];
    nodes.forEach(node => {
      node.size =
        ((node[propertyName] - minp) / rangepLength) * rangevLength +
        visualRange[0];
    });
  };

  function translate(x: number, y: number) {
    // graph.translate(-x, -y);
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

  const clickChartType = () => {
    scrollToCanvas();
    setTabStates({
      goalTabBackground: '',
      chartTypeTabBackground: 'linear-gradient(0deg, #B7A1FF 40%, #F0F5FA 40%)',
      dataTypeTabBackground: '',
      goalTextColor: '#697B8C',
      chartTypeTextColor: '#0D1A26',
      dataTypeTextColor: '#697B8C',
      goalTextWeight: 400,
      chartTypeTextWeight: 450,
      dataTypeTextWeight: 400,
      current: 'chartType',
    });
    currentData = chartTypeData;
    graph && loadData(chartTypeData);
  };
  const clickDataType = () => {
    scrollToCanvas();
    setTabStates({
      goalTabBackground: '',
      chartTypeTabBackground: '',
      dataTypeTabBackground: 'linear-gradient(0deg, #B7A1FF 40%, #F0F5FA 40%)',
      goalTextColor: '#697B8C',
      chartTypeTextColor: '#697B8C',
      dataTypeTextColor: '#0D1A26',
      goalTextWeight: 400,
      chartTypeTextWeight: 400,
      dataTypeTextWeight: 450,
      current: 'dataType',
    });
    currentData = dataTypeData;
    graph && loadData(dataTypeData);
  };
  const clickGoal = () => {
    scrollToCanvas();
    setTabStates({
      goalTabBackground: 'linear-gradient(0deg, #B7A1FF 40%, #F0F5FA 40%)',
      chartTypeTabBackground: '',
      dataTypeTabBackground: '',
      goalTextColor: '#0D1A26',
      chartTypeTextColor: '#697B8C',
      dataTypeTextColor: '#697B8C',
      goalTextWeight: 450,
      chartTypeTextWeight: 400,
      dataTypeTextWeight: 400,
      current: 'goal',
    });
    currentData = goalData;
    graph && loadData(goalData);
  };

  const hoverGoal = () => {
    setTabStates({
      goalTabBackground: tabStates.goalTabBackground,
      chartTypeTabBackground: tabStates.chartTypeTabBackground,
      dataTypeTabBackground: tabStates.dataTypeTabBackground,
      goalTextColor: '#0D1A26',
      chartTypeTextColor: tabStates.chartTypeTextColor,
      dataTypeTextColor: tabStates.dataTypeTextColor,
      goalTextWeight: tabStates.goalTextWeight,
      chartTypeTextWeight: tabStates.chartTypeTextWeight,
      dataTypeTextWeight: tabStates.dataTypeTextWeight,
      current: tabStates.current,
    });
  };

  const hoverChartType = () => {
    setTabStates({
      goalTabBackground: tabStates.goalTabBackground,
      chartTypeTabBackground: tabStates.chartTypeTabBackground,
      dataTypeTabBackground: tabStates.dataTypeTabBackground,
      goalTextColor: tabStates.goalTextColor,
      chartTypeTextColor: '#0D1A26',
      dataTypeTextColor: tabStates.dataTypeTextColor,
      goalTextWeight: tabStates.goalTextWeight,
      chartTypeTextWeight: tabStates.chartTypeTextWeight,
      dataTypeTextWeight: tabStates.dataTypeTextWeight,
      current: tabStates.current,
    });
  };
  const hoverDataType = () => {
    setTabStates({
      goalTabBackground: tabStates.goalTabBackground,
      chartTypeTabBackground: tabStates.chartTypeTabBackground,
      dataTypeTabBackground: tabStates.dataTypeTabBackground,
      goalTextColor: tabStates.goalTextColor,
      chartTypeTextColor: tabStates.chartTypeTextColor,
      dataTypeTextColor: '#0D1A26',
      goalTextWeight: tabStates.goalTextWeight,
      chartTypeTextWeight: tabStates.chartTypeTextWeight,
      dataTypeTextWeight: tabStates.dataTypeTextWeight,
      current: tabStates.current,
    });
  };

  const outGoal = () => {
    setTabStates({
      goalTabBackground: tabStates.goalTabBackground,
      chartTypeTabBackground: tabStates.chartTypeTabBackground,
      dataTypeTabBackground: tabStates.dataTypeTabBackground,
      goalTextColor:
        tabStates.current === 'goal' ? tabStates.goalTextColor : '#697B8C',
      chartTypeTextColor: tabStates.chartTypeTextColor,
      dataTypeTextColor: tabStates.dataTypeTextColor,
      goalTextWeight: tabStates.goalTextWeight,
      chartTypeTextWeight: tabStates.chartTypeTextWeight,
      dataTypeTextWeight: tabStates.dataTypeTextWeight,
      current: tabStates.current,
    });
  };

  const outChartType = () => {
    setTabStates({
      goalTabBackground: tabStates.goalTabBackground,
      chartTypeTabBackground: tabStates.chartTypeTabBackground,
      dataTypeTabBackground: tabStates.dataTypeTabBackground,
      goalTextColor: tabStates.goalTextColor,
      chartTypeTextColor:
        tabStates.current === 'chartType'
          ? tabStates.chartTypeTextColor
          : '#697B8C',
      dataTypeTextColor: tabStates.dataTypeTextColor,
      goalTextWeight: tabStates.goalTextWeight,
      chartTypeTextWeight: tabStates.chartTypeTextWeight,
      dataTypeTextWeight: tabStates.dataTypeTextWeight,
      current: tabStates.current,
    });
  };
  const outDataType = () => {
    setTabStates({
      goalTabBackground: tabStates.goalTabBackground,
      chartTypeTabBackground: tabStates.chartTypeTabBackground,
      dataTypeTabBackground: tabStates.dataTypeTabBackground,
      goalTextColor: tabStates.goalTextColor,
      chartTypeTextColor: tabStates.chartTypeTextColor,
      dataTypeTextColor:
        tabStates.current === 'dataType'
          ? tabStates.dataTypeTextColor
          : '#697B8C',
      goalTextWeight: tabStates.goalTextWeight,
      chartTypeTextWeight: tabStates.chartTypeTextWeight,
      dataTypeTextWeight: tabStates.dataTypeTextWeight,
      current: tabStates.current,
    });
  };

  const loadData = (data: any) => {
    const layoutController = graph.get('layoutController');
    layoutController.layoutCfg.nodeStrength = 2500;
    layoutController.layoutCfg.collideStrength = 0.8;
    layoutController.layoutCfg.alphaDecay = 0.01;
    nodes = data.nodes;
    edges = data.edges;

    showNodes = [];
    showEdges = [];
    nodeMap = new Map();
    edgesMap = new Map();
    // find the roots
    nodes.forEach((node: any) => {
      node.vx = 0.00001;
      node.vy = 0.00001;
      if (node.level === 0) {
        node.color = gColors[showNodes.length % gColors.length];
        node.style = {
          fill: gColors[showNodes.length % gColors.length],
          lineWidth: 0,
        };
        node.labelCfg = {
          style: {
            fontSize: 25,
            fill: '#fff',
            fontWeight: 300,
          },
        };
        node.x = Math.random() * 800;
        node.y = Math.random() * 800;
        showNodes.push(node);
      }
      if (!node.isLeaf) {
        const num = node.childrenNum ? `\n(${node.childrenNum})` : '';
        node.label = `${t(node.name)}${num}`;
      } else {
        node.label = t(node.name);
      }
      nodeMap.set(node.id, node);
    });
    mapNodeSize(showNodes, 'childrenNum', [160, 230]);

    // map the color to F nodes, same to its parent
    nodes.forEach((node: any) => {
      if (node.level !== 0 && !node.isLeaf) {
        const parent = nodeMap.get(node.tags[0]);
        node.color = parent.color;
        node.style = {
          fill: parent.color,
        };
      }
    });
    edges.forEach((edge: any) => {
      // map the id
      edge.id = `${edge.source}-${edge.target}`;
      edge.style = {
        lineWidth: 0.5,
        opacity: 1,
        strokeOpacity: 1,
      };
      edgesMap.set(edge.id, edge);
    });
    graph.data({
      nodes: showNodes,
      edges: showEdges,
    });
    graph.render();
  };

  const tooltip = (
    <div
      className={styles.tooltip}
      style={{
        display: tooltipStates.display,
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
        const layoutController = graph.get('layoutController');
        const forceLayout = layoutController.layoutMethod;
        forceLayout.center = [
          window.screen.width / 2,
          window.screen.height / 2,
        ];
        loadData(currentData);
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
        const layoutController = graph.get('layoutController');
        const forceLayout = layoutController.layoutMethod;
        forceLayout.center = [
          window.screen.width / 2,
          window.screen.height / 2,
        ];
        loadData(currentData);
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
        <div id="decisionTree" className={styles.tabsContaner}>
          <div
            className={(styles.goalTab, styles.tab)}
            style={{ background: tabStates.goalTabBackground }}
          >
            <div
              style={{
                color: tabStates.goalTextColor,
                fontWeight: tabStates.goalTextWeight,
              }}
              onClick={clickGoal}
              onMouseOver={hoverGoal}
              onMouseOut={outGoal}
            >
              {t('按使用目的维度')}
            </div>
          </div>
          <div
            className={classNames(styles.chartTypeTab, styles.tab)}
            style={{ background: tabStates.chartTypeTabBackground }}
          >
            <div
              style={{
                color: tabStates.chartTypeTextColor,
                fontWeight: tabStates.chartTypeTextWeight,
              }}
              onClick={clickChartType}
              onMouseOver={hoverChartType}
              onMouseOut={outChartType}
            >
              {t('按图表类型维度')}
            </div>
          </div>
          <div
            className={classNames(styles.dataTypeTab, styles.tab)}
            style={{ background: tabStates.dataTypeTabBackground }}
          >
            <div
              style={{
                color: tabStates.dataTypeTextColor,
                fontWeight: tabStates.dataTypeTextWeight,
              }}
              onClick={clickDataType}
              onMouseOver={hoverDataType}
              onMouseOut={outDataType}
            >
              {t('按数据类型维度')}
            </div>
          </div>
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
              href="/g6/zh"
              target="g6newtag"
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
