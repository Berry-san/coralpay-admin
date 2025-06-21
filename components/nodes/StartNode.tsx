
import React from 'react';
import { Handle, Position, useReactFlow } from '@xyflow/react';
import { ArrowRight, X } from 'lucide-react';

const StartNode = ({ data, id }: { data: any; id: string }) => {
  const { setNodes, setEdges } = useReactFlow();

  const onDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg px-4 py-3 shadow-sm min-w-[100px] text-center relative">
      <button
        onClick={onDelete}
        className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs"
      >
        <X size={10} />
      </button>
      <div className="flex items-center justify-center gap-2 text-gray-700 text-sm font-medium">
        <ArrowRight size={16} />
        <span>Start</span>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-purple-500 border-2 border-white"
      />
    </div>
  );
};

export default StartNode;
