import { FC, memo } from 'react';
import { Handle } from 'reactflow';

import { ICustomNode } from './CustomNode.interface';

const CustomNode: FC<ICustomNode> = ({ data, isConnectable }) => {
  return (
    <>
      {data.targetPosition && (
        <Handle
          type='target'
          position={data.targetPosition}
          style={{ background: '#555' }}
          isConnectable={isConnectable}
        />
      )}
      <div className='flex flex-col bg-white p-3 border border-gray-400'>
        {data.title && <strong className='w-full text-center mb-2'>{data.title}</strong>}
        {data.description}
      </div>

      {data.sourcePosition && (
        <Handle
          type='source'
          position={data.sourcePosition}
          id='a'
          isConnectable={isConnectable}
        />
      )}
    </>
  );
};

export default memo(CustomNode);
