import { useState } from 'react';

export default function USSDPreview({ nodes, edges }) {
  const [currentNodeId, setCurrentNodeId] = useState('start');

  const getNextNode = () => {
    const edge = edges.find((e) => e.source === currentNodeId);
    return edge?.target;
  };

  const currentNode = nodes.find((n) => n.id === currentNodeId);

  return (
    <div className="border rounded p-4 bg-gray-100 mt-6">
      <h4 className="text-sm font-bold">USSD Emulator</h4>
      <p className="text-xs mt-2">Current Node: <strong>{currentNode?.data?.label || 'None'}</strong></p>
      <p className="text-xs">Leaf ID: {currentNode?.data?.leafId || 'None'}</p>
      <button
        onClick={() => {
          const next = getNextNode();
          if (next) setCurrentNodeId(next);
        }}
        className="mt-2 text-xs bg-blue-600 text-white px-3 py-1 rounded"
      >
        Next
      </button>
    </div>
  );
}
