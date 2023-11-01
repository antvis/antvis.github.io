import { Graph } from '@antv/g6';
import React, { useEffect, useRef, useMemo } from 'react';

import styles from '../index.module.less';

type GraphProps = {
  theme?: any;
};

const DATA = {
  nodes: [
    { id: 'node0', size: 32, style: { fill: '#2486FF' }, label: 'host', type: 0 },
    { id: 'node5', size: 32, style: { fill: '#F58C58' }, label: 'item', type: 2  },
    { id: 'node2', size: 32, style: { fill: '#00C7C7' }, label: 'file', type: 1  },
    { id: 'node6', size: 32, style: { fill: '#F58C58' }, label: 'item', type: 2  },
    { id: 'node4', size: 32, style: { fill: '#F58C58' }, label: 'item', type: 2  },
    { id: 'node1', size: 32, style: { fill: '#00C7C7' }, label: 'file', type: 1 },
    { id: 'node3', size: 32, style: { fill: '#00C7C7' }, label: 'file', type: 1  },
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

export function GraphChart(props: GraphProps) {
  const { theme } = props;
  const { value, colors10 } = theme;
  const isDark = useMemo(() => value === 'dark', [value]);

  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      const data = {
        ...DATA,
        nodes: DATA.nodes.map((item) => ({
          ...item,
          style: {
            fill: colors10[item.type],
          },
        })),
      };

      const defaultNode = {
        color: '#fff',
        labelCfg: {
          position: 'bottom',
          style: {
            fill: isDark ? 'rgba(255,255,255,0.45)' : '#86909C',
          },
        },
        icon: {
          show: true,
          img: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*qebjT6nhHBIAAAAAAAAAAAAADmJ7AQ/original'
        },
      };

      if (!plotRef.current) {
        const container = containerRef.current;
        plotRef.current = new Graph({
          container,
          width: container.scrollWidth,
          height: container.scrollHeight,
          defaultNode,
          layout: {
            type: 'force',
            edgeStrength: .1,
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

      } else {
        plotRef.current.set('defaultNode', defaultNode);
        plotRef.current.changeData(data);
      }
    }
  }, [containerRef, colors10]);

  return (
    <div className={styles.container}>
      <div ref={containerRef} />
    </div>
  )
}
