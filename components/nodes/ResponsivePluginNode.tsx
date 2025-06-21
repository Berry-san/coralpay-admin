import React from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { Edit, X } from 'lucide-react'
import { id } from 'zod/v4/locales'

const ResponsivePluginNode = ({ data, id }: { data: any; id: string }) => {
  const { setNodes, setEdges } = useReactFlow()

  const onDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id))
    setEdges((edges) =>
      edges.filter((edge) => edge.source !== id && edge.target !== id)
    )
  }

  return (
    <div className="relative">
      <div className="text-xs text-gray-500 mb-2 text-center">
        Responsive - plugin
      </div>
      <div className="bg-purple-500 text-white rounded-lg px-4 py-3 shadow-lg min-w-[180px]">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-sm">Static Jump</span>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-purple-600 rounded">
              <Edit size={12} />
            </button>
            <button
              onClick={onDelete}
              className="p-1 hover:bg-purple-600 rounded"
            >
              <X size={12} />
            </button>
          </div>
        </div>
        <div className="text-xs opacity-90">Leaf : My new leaf</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-purple-500 border-2 border-white"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-purple-500 border-2 border-white"
      />
    </div>
  )
}

export default ResponsivePluginNode
