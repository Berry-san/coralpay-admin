import React from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { Mail, Edit, X } from 'lucide-react'

const UnnamedLeafNode = ({ data, id }: { data: any; id: string }) => {
  const { setNodes, setEdges } = useReactFlow()

  const onDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id))
    setEdges((edges) =>
      edges.filter((edge) => edge.source !== id && edge.target !== id)
    )
  }
  return (
    <div className="relative">
      {data.label && (
        <div className="text-xs text-gray-500 mb-2 text-center">
          {data.label}
        </div>
      )}
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs"
      >
        <X size={10} />
      </button>
      <div className="bg-purple-500 text-white rounded-lg px-4 py-3 shadow-lg min-w-[250px]">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-sm">
            Un-named leaf (USSD CODE)
          </span>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-purple-600 rounded">
              <Edit size={12} />
            </button>
            <button
              className="p-1 hover:bg-purple-600 rounded"
              onClick={onDelete}
            >
              <X size={12} />
            </button>
          </div>
        </div>
        <div className="text-xs opacity-90">
          Leaf ID: {data.leafId || 'No ID generated yet'}
        </div>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-purple-400">
          <button className="p-1 hover:bg-purple-600 rounded">
            <Mail size={14} />
          </button>
          <button className="p-1 hover:bg-purple-600 rounded">
            <Edit size={14} />
          </button>
          <button className="p-1 hover:bg-purple-600 rounded">
            <X size={14} />
          </button>
          <div className="ml-auto flex gap-1">
            <button className="p-1 hover:bg-purple-600 rounded">
              <Edit size={14} />
            </button>
            <button className="p-1 hover:bg-purple-600 rounded">
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-purple-500 border-2 border-white"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-purple-500 border-2 border-white"
      />
    </div>
  )
}

export default UnnamedLeafNode
