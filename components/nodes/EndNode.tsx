import React from 'react'
import { Handle, Position, useReactFlow } from '@xyflow/react'
import { X } from 'lucide-react'

const EndNode = ({ data, id }: { data: any; id: string }) => {
  const { setNodes, setEdges } = useReactFlow()

  const onDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id))
    setEdges((edges) =>
      edges.filter((edge) => edge.source !== id && edge.target !== id)
    )
  }

  return (
    <div className="bg-white border-2 border-red-300 rounded-lg px-4 py-3 shadow-sm min-w-[80px] text-center relative">
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs"
      >
        <X size={10} />
      </button>
      <div className="flex items-center justify-between">
        <span className="text-red-600 font-semibold text-sm">End</span>
        <button className="p-1 hover:bg-red-50 rounded">
          <X size={12} className="text-red-500" />
        </button>
        <button onClick={onDelete} className="p-1 hover:bg-red-50 rounded">
          Delete Button
        </button>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-3 h-3 bg-red-500 border-2 border-white"
      />
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-red-500 border-2 border-white"
      />
    </div>
  )
}

export default EndNode
