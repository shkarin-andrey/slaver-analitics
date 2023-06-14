import { FC, useContext, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import { StateContext } from '../../store';
import { markerEnd, nodeTypes, snapGrid } from './FlowBots.config';

const FlowBots: FC = () => {
  const { data } = useContext(StateContext);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (!data) return;

    setNodes([
      {
        id: '1',
        type: 'selectorNode',
        data: {
          title: 'Всего пользователей в боте',
          description: (
            <p>
              Количество лидов на бота всего - <b>{data.screen_1_stat[1][2]}</b>
              <br />
              Медиана 80 время использования бота - <b>{data.screen_1_stat[2][2]}</b>
              <br />
              Среднее количество циклов - <b>{data.screen_1_stat[3][2]}</b>
              <br />
              На графике время использования бота в минутах <br />
            </p>
          ),
          targetPosition: Position.Bottom,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 300, y: 0 },
      },
      {
        id: '2',
        type: 'selectorNode',
        data: {
          title: 'Пользователи не подписавшиеся на канал',
          description: (
            <p>
              Количество пользователей - <b>{data.screen_2_stat[1][2]}</b>
              <br />
              Медиана 80 время использования бота - <b>{data.screen_2_stat[2][2]}</b>
              <br />
              Среднее количество циклов - <b>{data.screen_2_stat[3][2]}</b> <br />
              На графике время использования бота в минутах <br />
            </p>
          ),
          sourcePosition: Position.Right,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 0, y: 200 },
      },
      {
        id: '3',
        type: 'selectorNode',
        data: {
          description: (
            <p>
              Пользователи которые подписались
              <br />
              на канал при этом ни разу
              <br />
              не прошли игровой цикл - <b>{data.screen_8_stat[1][1]}</b>
            </p>
          ),
          sourcePosition: Position.Left,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 550, y: 250 },
      },
      {
        id: '4',
        type: 'selectorNode',
        data: {
          title: 'Пользователи отписавшиеся от канала',
          description: (
            <p>
              Количество пользователей - <b>{data.screen_4_stat[1][2]}</b>
              <br />
              Медиана 80 время использования бота - <b>{data.screen_4_stat[2][2]}</b>
              <br />
              Среднее количество циклов - <b>{data.screen_4_stat[3][2]}</b>
            </p>
          ),
          sourcePosition: Position.Right,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 400, y: 400 },
      },
      {
        id: '5',
        type: 'selectorNode',
        data: {
          title: 'Пользователи подписавшиеся на канал',
          description: (
            <p>
              Количество пользователей - <b>{data.screen_3_stat[1][2]}</b>
              <br />
              Медиана 80 время использования бота - <b>{data.screen_3_stat[2][2]}</b>
              <br />
              Среднее количество циклов - <b>{data.screen_3_stat[3][2]}</b>
              <br />
              Первый график - время использования бота <br />
              Второй график - Цикл на котором была подписка <br />
            </p>
          ),
          sourcePosition: Position.Left,
          targetPosition: Position.Bottom,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 1000, y: 150 },
      },
      {
        id: '6',
        type: 'selectorNode',
        data: {
          title: 'Пользователи подписавшиеся на канал без отписок (ЦА)',
          description: (
            <p>
              Количество пользователей - <b>{data.screen_5_stat[1][2]}</b>
              <br />
              Медиана 80 время использования бота - <b>{data.screen_5_stat[2][2]}</b>
              <br />
              Среднее количество циклов - <b>{data.screen_5_stat[3][2]}</b>
            </p>
          ),
          sourcePosition: Position.Top,
          targetPosition: Position.Bottom,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 1000, y: 500 },
      },
      {
        id: '7',
        type: 'selectorNode',
        data: {
          title: 'ЦА с подпиской после взаимодействий с ботом',
          description: (
            <p>
              Количество пользователей - <b>{data.screen_7_stat[1][2]}</b>
              <br />
              Медиана 80 время использования бота - <b>{data.screen_7_stat[2][2]}</b>
              <br />
              Среднее количество циклов - <b>{data.screen_7_stat[3][2]}</b>
            </p>
          ),
          sourcePosition: Position.Right,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 500, y: 600 },
      },
      {
        id: '8',
        type: 'selectorNode',
        data: {
          title: 'ЦА с подпиской во время работы с ботом',
          description: (
            <p>
              Количество пользователей - <b>{data.screen_6_stat[1][2]}</b>
              <br />
              Медиана 80 время использования бота - <b>{data.screen_6_stat[2][2]}</b>
              <br />
              Среднее количество циклов - <b>{data.screen_6_stat[3][2]}</b>
            </p>
          ),
          sourcePosition: Position.Top,
        },
        style: { border: '1px solid #777', padding: 10 },
        position: { x: 1000, y: 800 },
      },
    ]);
  }, [data]);

  useEffect(() => {
    setEdges([
      {
        id: '3-1',
        source: '3',
        target: '1',
        markerEnd,
      },
      {
        id: '2-1',
        source: '2',
        target: '1',
        markerEnd,
      },
      {
        id: '5-1',
        source: '5',
        target: '1',
        markerEnd,
      },
      {
        id: '4-5',
        source: '4',
        target: '5',
        markerEnd,
      },
      {
        id: '6-5',
        source: '6',
        target: '5',
        markerEnd,
      },
      {
        id: '8-6',
        source: '8',
        target: '6',
        markerEnd,
      },
      {
        id: '7-6',
        source: '7',
        target: '6',
        markerEnd,
      },
    ]);
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      nodeTypes={nodeTypes}
      snapToGrid={true}
      snapGrid={snapGrid}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default FlowBots;
