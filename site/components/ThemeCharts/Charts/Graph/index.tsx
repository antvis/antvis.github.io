import React, { useEffect, useRef } from 'react';
import { Graph } from '@antv/g6';

import styles from '../index.module.less';

type GraphProps = {
  theme?: any;
};

const data = {
  nodes: [
    { id: 'node0', size: 25, style: { fill: '#2486FF' } },
    { id: 'node1', size: 25, style: { fill: '#00C7C7' } },
    { id: 'node2', size: 25, style: { fill: '#00C7C7' } },
    { id: 'node3', size: 25, style: { fill: '#00C7C7' } },
    { id: 'node4', size: 25, style: { fill: '#F58C58' } },
    { id: 'node5', size: 25, style: { fill: '#F58C58' } },
    { id: 'node6', size: 25, style: { fill: '#F58C58' } },
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
  const containerRef = useRef<HTMLDivElement>(null);
  const plotRef = React.useRef<any>(null);

  useEffect(() => {
    if (containerRef.current) {
      if (!plotRef.current) {
        const container = containerRef.current;
        plotRef.current = new Graph({
          container,
          width: container.scrollWidth,
          height: container.scrollHeight,
          defaultNode: {
            color: '#fff',
          },
          layout: {
            type: 'force',
            edgeStrength: .1,
          },
        });

        const nodes = data.nodes;
        plotRef.current.data({
          nodes,
          edges: data.edges.map((edge: any, i) => {
            edge.id = 'edge' + i;
            return Object.assign({}, edge);
          }),
        });


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
        plotRef.current.update();
      }
    }
  }, [containerRef]);

  return (
    <div className={styles.container}>
      <div ref={containerRef} />
    </div>
  )
}
