
import React from 'react';
import { useReactFlow } from '@xyflow/react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';

const nodeTypes = [
  { type: 'start', label: 'Start' },
  { type: 'staticJump', label: 'Static Jump' },
  { type: 'unnamedLeaf', label: 'Leaf' },
  { type: 'inputPlugin', label: 'Input Plugin' },
  { type: 'responsivePlugin', label: 'Responsive Plugin' },
  { type: 'end', label: 'End' },
];

const FlowToolbar = () => {
  const { getNodes, setNodes } = useReactFlow();

  const addNode = (nodeType: string) => {
    const nodes = getNodes();
    const newId = `node-${Date.now()}`;
    
    // Calculate position to avoid overlap
    const xOffset = Math.random() * 200;
    const yOffset = Math.random() * 200;
    
    const newNode = {
      id: newId,
      type: nodeType,
      position: { x: 250 + xOffset, y: 100 + yOffset },
      data: {
        label: nodeType === 'staticJump' ? 'Jump - plugin' : 
               nodeType === 'unnamedLeaf' ? 'Leaf - main' : 
               nodeType === 'inputPlugin' ? 'Input - plugin' :
               nodeType === 'responsivePlugin' ? 'Responsive - plugin' : {},
        leafText: nodeType === 'staticJump' ? 'My new leaf' : undefined,
        leafId: nodeType === 'unnamedLeaf' ? 'No ID generated yet' : undefined,
      },
    };

    setNodes([...nodes, newNode]);
  };

  return (
    <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg p-4 border">
      <h3 className="text-sm font-semibold mb-3 text-gray-700">Add Nodes</h3>
      <div className="flex flex-col gap-2">
        {nodeTypes.map(({ type, label }) => (
          <Button
            key={type}
            variant="outline"
            size="sm"
            onClick={() => addNode(type)}
            className="justify-start gap-2"
          >
            <Plus size={14} />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FlowToolbar;
