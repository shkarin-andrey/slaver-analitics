import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  Tooltip,
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

import { options } from './Graphic.config';

interface IGraphic {
  data: any[];
  labels: any[];
}

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Tooltip);

const Graphic: FC<IGraphic> = ({ data, labels }) => {
  const datasets =
    [
      {
        label: 'Пользователи',
        data: data,
        fill: true,
        backgroundColor: 'rgba(75,124,243,0.2)',
        borderColor: 'rgba(75,124,243,1)',
        pointStyle: 'rect',
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ] || [];

  const graphicData = {
    labels,
    datasets,
  };

  return (
    <Bar
      height={200}
      options={
        {
          // scales: {
          //   x: {
          //     stacked: true,
          //   },
          //   y: {
          //     beginAtZero: false,
          //     min: 0,
          //     ticks: {
          //       stepSize: 1,
          //     },
          //   },
          // },
        }
      }
      data={graphicData}
      className='z-50'
    />
  );
};

export default Graphic;
