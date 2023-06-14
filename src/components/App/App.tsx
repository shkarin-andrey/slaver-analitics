import { FC, useState } from 'react';

import { StateContext } from '../../store';
import FlowBots from '../FlowBots';
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
        <FlowBots />
      </Layout>
    </StateContext.Provider>
  );
};

export default App;
