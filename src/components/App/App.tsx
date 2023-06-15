import { FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import InfoPage from '../../pages/InfoPage';
import MainPage from '../../pages/MainPage';
import { routers } from '../../routers';
import { StateContext } from '../../store';
import Layout from '../Layout';

const App: FC = () => {
  const [data, setData] = useState(null);

  return (
    <StateContext.Provider
      value={{
        data,
        setData,
      }}
    >
      <Layout>
        <Routes>
          {routers.map((item) => (
            <Route key={item.path} path={item.path} element={item.component} />
          ))}
        </Routes>
      </Layout>
    </StateContext.Provider>
  );
};

export default App;
