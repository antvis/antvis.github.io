import { Graph } from '@antv/g6';
import { debounce } from 'lodash';
import React, { useEffect, useRef, useMemo, useCallback } from 'react';

import styles from '../index.module.less';

type GraphProps = {
  theme?: any;
};

const DATA = {
  nodes: [
    { id: 'node0', size: 32, style: { fill: '#2486FF' }, label: 'host', type: 0, x: 150, y: 150 },
    { id: 'node1', size: 32, style: { fill: '#00C7C7' }, label: 'item', type: 1, x: 400, y: 0 },
    { id: 'node2', size: 32, style: { fill: '#00C7C7' }, label: 'item ', type: 1, x: 400, y: 150 },
    { id: 'node3', size: 32, style: { fill: '#00C7C7' }, label: 'item', type: 1, x: 400, y: 300 },
    { id: 'node4', size: 32, style: { fill: '#F58C58' }, label: 'file', type: 2, x: 0, y: 0 },
    { id: 'node5', size: 32, style: { fill: '#F58C58' }, label: 'file', type: 2, x: 0, y: 150 },
    { id: 'node6', size: 32, style: { fill: '#F58C58' }, label: 'file', type: 2, x: 0, y: 300 },
  ],
  edges: [
    { source: 'node0', target: 'node1' },
    { source: 'node0', target: 'node2' },
    { source: 'node0', target: 'node3' },
    { source: 'node0', target: 'node4' },
    { source: 'node0', target: 'node5' },
    { source: 'node0', target: 'node6' },
  ],
};

// 力导向图布局
export function GraphChart(props: GraphProps) {
  const { theme = {} } = props;
  const { value, categorical } = theme;
  const colors10 = categorical.colors;
  const isDark = useMemo(() => value === 'dark', [value]);

  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  const data = useMemo(() => ({
    ...DATA,
    nodes: DATA.nodes.map((item) => ({
      ...item,
      style: {
        fill: colors10[item.type],
      },
      icon: {
        show: true,
        img: [
          'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Q2piT7W5HCMAAAAAAAAAAAAADmJ7AQ/original',
          'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*I-Q8Ta_r9T4AAAAAAAAAAAAADmJ7AQ/original',
          'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mNDaSa5JIuQAAAAAAAAAAAAADmJ7AQ/original',
        ][item.type],
      },
    })),
  }), [colors10]);

  const defaultNode = useMemo(() => ({
    color: '#fff',
    labelCfg: {
      position: 'bottom',
      style: {
        fill: isDark ? 'rgba(255,255,255,0.45)' : '#86909C',
      },
    },
  }), [isDark]);

  const create = useCallback((container: HTMLDivElement | null) => {
    if (!container) return;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 限制范围
    const onTick = () => {
      data.nodes.forEach((node) => {
        node.x = Math.min(Math.max(5, node.x), width - 10);
        node.y = Math.min(Math.max(18, node.y), height - 36);
      });
    };

    plotRef.current = new Graph({
      container,
      width,
      height,
      defaultNode,
      layout: {
        type: 'force',
        linkDistance: (d: any) => {
          if (['node2', 'node5'].includes(d.target.id)) return 130;
          return 100;
        },
        onTick,
      },
    });

    plotRef.current.data(data);

    plotRef.current.render();

    function refreshDragedNodePosition(e: any) {
      const model = e.item.get('model');
      model.fx = e.x;
      model.fy = e.y;
    }

    plotRef.current.on('node:dragstart', (e: any) => {
      plotRef.current.layout();
      refreshDragedNodePosition(e);
    });
    plotRef.current.on('node:drag', (e: any) => {
      refreshDragedNodePosition(e);
    });
    plotRef.current.on('node:dragend', (e: any) => {
      e.item.get('model').fx = null;
      e.item.get('model').fy = null;
    });
  }, [data, defaultNode]);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      if (!plotRef.current) {
        create(container);
      } else {
        plotRef.current.set('defaultNode', defaultNode);
        plotRef.current.changeData(data);
      }
    }
  }, [containerRef, data, defaultNode]);

  // g6 不能自动更新以及手动更新而更新图的位置在最中心。 重新进行创建
  useEffect(() => {
    const container = containerRef?.current;
    const onResize = debounce(() => {
      plotRef.current.destroy();
      create(container);
    }, 100);

    if (container) {
      window.addEventListener('resize', onResize);
    }
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [containerRef]);

  return (
    <div className={styles.container}>
      <div ref={containerRef} />
    </div>
  )
}
