import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GuestProvider } from './context/guest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GuestProvider>
      <App />
    </GuestProvider>
  </React.StrictMode>
);
