import InfoPage from '../pages/InfoPage';
import MainPage from '../pages/MainPage';

export const routers = [
  {
    path: '/',
    component: <MainPage />,
    title: 'График',
  },
  {
    path: 'info',
    component: <InfoPage />,
    title: 'Таблица',
  },
];
