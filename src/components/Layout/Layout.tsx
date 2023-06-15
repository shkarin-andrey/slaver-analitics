import { Layout as LayoutAntd } from 'antd';
import { FC } from 'react';

import Header from '../Header';
import { ILayout } from './Layout.interface';

const { Content, Footer } = LayoutAntd;

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <LayoutAntd>
      <Header />
      <Content className='h-[calc(100vh-133px)] overflow-hidden'>{children}</Content>
      <Footer className='text-center'>Аналитика Slaver v1.0.0</Footer>
    </LayoutAntd>
  );
};

export default Layout;
