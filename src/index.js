import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextData from './components/HandleData/ContextData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextData>
        <App />
      </ContextData>
    </BrowserRouter>
  </React.StrictMode>
);


