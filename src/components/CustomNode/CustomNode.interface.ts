import { Position } from 'reactflow';

export interface ICustomNode {
  data: {
    title?: string;
    description: JSX.Element;
    targetPosition: Position;
    sourcePosition: Position;
  };
  isConnectable: boolean;
}
