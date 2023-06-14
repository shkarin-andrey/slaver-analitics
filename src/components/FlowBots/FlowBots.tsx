import { FC, useCallback, useContext, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import { StateContext } from '../../store';
import Graphic from '../Graphic';
import { markerEnd, nodeTypes, snapGrid } from './FlowBots.config';

const FlowBots: FC = () => {
  const { data } = useContext(StateContext);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const transformDateToGraph = useCallback((data: any) => {
    const newData: any = {
      data: [],
      labels: [],
    };

    data.forEach((item: any, index: number) => {
      if (index === 0) return;

      newData.labels.push(item[0]);
      newData.data.push(item[1]);
    });

    return newData;
  }, []);

  useEffect(() => {
    if (!data) return;

    const screen_1_pict = transformDateToGraph(data.screen_1_pict_time);
    const screen_2_pict = transformDateToGraph(data.screen_2_pict_time);
    const screen_3_pict = transformDateToGraph(data.screen_3_pict_time);
    const screen_3_subs = transformDateToGraph(data.screen_3_subs_time);
    const screen_4_pict = transformDateToGraph(data.screen_4_pict_time);
    const screen_4_subs = transformDateToGraph(data.screen_4_subs_time);
    const screen_5_pict = transformDateToGraph(data.screen_5_pict_time);
    const screen_5_subs = transformDateToGraph(data.screen_5_subs_time);
    const screen_6_pict = transformDateToGraph(data.screen_6_pict_time);
    const screen_6_subs = transformDateToGraph(data.screen_6_subs_time);
    const screen_7_pict = transformDateToGraph(data.screen_7_pict_time);
    const screen_7_subs = transformDateToGraph(data.screen_7_subs_time);

    setNodes([
      {
        id: '1',
        type: 'selectorNode',
        data: {
          title: 'Всего пользователей в боте',
          description: (
            <>
              <p>
                Количество лидов на бота всего - <b>{data.screen_1_stat[1][2]}</b>
                <br />
                Медиана 80 время использования бота - <b>{data.screen_1_stat[2][2]}</b>
                <br />
                Среднее количество циклов - <b>{data.screen_1_stat[3][2]}</b>
                <br />
                На графике время использования бота в минутах <br />
              </p>
              <Graphic data={screen_1_pict.data} labels={screen_1_pict.labels} />
            </>
          ),
          targetPosition: Position.Bottom,
        },
        position: { x: 300, y: -200 },
      },
      {
        id: '2',
        type: 'selectorNode',
        data: {
          title: 'Пользователи не подписавшиеся на канал',
          description: (
            <>
              <p>
                Количество пользователей - <b>{data.screen_2_stat[1][2]}</b>
                <br />
                Медиана 80 время использования бота - <b>{data.screen_2_stat[2][2]}</b>
                <br />
                Среднее количество циклов - <b>{data.screen_2_stat[3][2]}</b> <br />
                На графике время использования бота в минутах <br />
              </p>
              <Graphic data={screen_2_pict.data} labels={screen_2_pict.labels} />
            </>
          ),
          sourcePosition: Position.Right,
        },
        position: { x: -50, y: 200 },
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
        position: { x: 650, y: 250 },
      },
      {
        id: '4',
        type: 'selectorNode',
        data: {
          title: 'Пользователи отписавшиеся от канала',
          description: (
            <>
              <p>
                Количество пользователей - <b>{data.screen_4_stat[1][2]}</b>
                <br />
                Медиана 80 время использования бота - <b>{data.screen_4_stat[2][2]}</b>
                <br />
                Среднее количество циклов - <b>{data.screen_4_stat[3][2]}</b>
              </p>
              <Graphic data={screen_4_pict.data} labels={screen_4_pict.labels} />
              <Graphic data={screen_4_subs.data} labels={screen_4_subs.labels} />
            </>
          ),
          sourcePosition: Position.Right,
        },
        position: { x: 400, y: 400 },
      },
      {
        id: '5',
        type: 'selectorNode',
        data: {
          title: 'Пользователи подписавшиеся на канал',
          description: (
            <>
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
              <Graphic data={screen_3_pict.data} labels={screen_3_pict.labels} />
              <Graphic data={screen_3_subs.data} labels={screen_3_subs.labels} />
            </>
          ),
          sourcePosition: Position.Left,
          targetPosition: Position.Bottom,
        },
        position: { x: 1000, y: -100 },
      },
      {
        id: '6',
        type: 'selectorNode',
        data: {
          title: 'Пользователи подписавшиеся на канал без отписок (ЦА)',
          description: (
            <>
              <p>
                Количество пользователей - <b>{data.screen_5_stat[1][2]}</b>
                <br />
                Медиана 80 время использования бота - <b>{data.screen_5_stat[2][2]}</b>
                <br />
                Среднее количество циклов - <b>{data.screen_5_stat[3][2]}</b>
              </p>
              <Graphic data={screen_5_pict.data} labels={screen_5_pict.labels} />
              <Graphic data={screen_5_subs.data} labels={screen_5_subs.labels} />
            </>
          ),
          sourcePosition: Position.Top,
          targetPosition: Position.Bottom,
        },
        position: { x: 1100, y: 650 },
      },
      {
        id: '7',
        type: 'selectorNode',
        data: {
          title: 'ЦА с подпиской после взаимодействий с ботом',
          description: (
            <>
              <p>
                Количество пользователей - <b>{data.screen_7_stat[1][2]}</b>
                <br />
                Медиана 80 время использования бота - <b>{data.screen_7_stat[2][2]}</b>
                <br />
                Среднее количество циклов - <b>{data.screen_7_stat[3][2]}</b>
              </p>
              <Graphic data={screen_7_pict.data} labels={screen_7_pict.labels} />
              <Graphic data={screen_7_subs.data} labels={screen_7_subs.labels} />
            </>
          ),
          sourcePosition: Position.Right,
        },
        position: { x: 500, y: 1100 },
      },
      {
        id: '8',
        type: 'selectorNode',
        data: {
          title: 'ЦА с подпиской во время работы с ботом',
          description: (
            <>
              <p>
                Количество пользователей - <b>{data.screen_6_stat[1][2]}</b>
                <br />
                Медиана 80 время использования бота - <b>{data.screen_6_stat[2][2]}</b>
                <br />
                Среднее количество циклов - <b>{data.screen_6_stat[3][2]}</b>
              </p>
              <Graphic data={screen_6_pict.data} labels={screen_6_pict.labels} />
              <Graphic data={screen_6_subs.data} labels={screen_6_subs.labels} />
            </>
          ),
          sourcePosition: Position.Top,
        },
        position: { x: 1000, y: 1500 },
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
