import 'reactflow/dist/style.css';
import './index.css';

import { StyleProvider } from '@ant-design/cssinjs';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority='high'>
      <App />
    </StyleProvider>
  </React.StrictMode>,
);
