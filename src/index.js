import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { IdProvider } from 'components/contexts/IdContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdProvider>
      <App />
    </IdProvider>
  </React.StrictMode>
);
