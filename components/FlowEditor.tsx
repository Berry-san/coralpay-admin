import React, { useCallback } from 'react'
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Background,
  BackgroundVariant,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import { initialNodes, initialEdges } from '../data/flowData'
import StartNode from './nodes/StartNode'
import StaticJumpNode from './nodes/StaticJumpNode'
import UnnamedLeafNode from './nodes/UnnamedLeafNode'
import InputPluginNode from './nodes/InputPluginNode'
import ResponsivePluginNode from './nodes/ResponsivePluginNode'
import EndNode from './nodes/EndNode'
import FlowToolbar from './FlowToolbar'

const nodeTypes = {
  start: StartNode,
  staticJump: StaticJumpNode,
  unnamedLeaf: UnnamedLeafNode,
  inputPlugin: InputPluginNode,
  responsivePlugin: ResponsivePluginNode,
  end: EndNode,
}

const FlowEditor = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) => addEdge({ ...params, type: 'smoothstep' }, eds)),
    [setEdges]
  )

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gray-50"
        defaultEdgeOptions={{
          type: 'smoothstep',
          style: { strokeWidth: 2, stroke: '#8B5CF6' },
        }}
      >
        <Background
          variant={BackgroundVariant.Lines}
          gap={20}
          size={1}
          color="#E5E7EB"
        />
        <FlowToolbar />
      </ReactFlow>
    </div>
  )
}

export default FlowEditor
