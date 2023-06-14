import { MarkerType } from 'reactflow';

import CustomNode from '../CustomNode';

export const snapGrid: [number, number] = [20, 20];
export const nodeTypes = {
  selectorNode: CustomNode,
};

export const markerEnd = {
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
};
