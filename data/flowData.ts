
import { Node, Edge } from '@xyflow/react';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'start',
    position: { x: 200, y: 50 },
    data: {},
  },
  {
    id: '2',
    type: 'staticJump',
    position: { x: 450, y: 50 },
    data: {
      label: 'Jump - plugin',
      leafText: 'My new leaf',
      hasTopHandle: true,
      hasBottomHandle: true,
    },
  },
  {
    id: '3',
    type: 'unnamedLeaf',
    position: { x: 50, y: 180 },
    data: {
      label: 'Leaf - main',
      leafId: 'No ID generated yet',
    },
  },
  {
    id: '4',
    type: 'unnamedLeaf',
    position: { x: 750, y: 180 },
    data: {
      label: 'Leaf - main',
      leafId: 'No ID generated yet',
    },
  },
  {
    id: '5',
    type: 'inputPlugin',
    position: { x: 200, y: 350 },
    data: {},
  },
  {
    id: '6',
    type: 'inputPlugin',
    position: { x: 550, y: 350 },
    data: {},
  },
  {
    id: '7',
    type: 'responsivePlugin',
    position: { x: 50, y: 520 },
    data: {},
  },
  {
    id: '8',
    type: 'end',
    position: { x: 650, y: 520 },
    data: {},
  },
];

export const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#8B5CF6' },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#8B5CF6' },
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#DC2626' },
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: 'e3-5',
    source: '3',
    target: '5',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#8B5CF6' },
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#8B5CF6' },
  },
  {
    id: 'e5-7',
    source: '5',
    target: '7',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#8B5CF6' },
  },
  {
    id: 'e6-4',
    source: '6',
    target: '4',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#8B5CF6' },
    sourceHandle: 'bottom',
    targetHandle: 'bottom',
  },
  {
    id: 'e7-8',
    source: '7',
    target: '8',
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: '#8B5CF6' },
    sourceHandle: 'right',
    targetHandle: 'left',
  },
];
