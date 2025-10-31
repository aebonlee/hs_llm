import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.css';

console.log('Teaching AI App starting...');

const root = document.getElementById('root');
if (!root) {
  console.error('Root element not found!');
} else {
  console.log('Root element found, rendering app...');
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}