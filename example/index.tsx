// import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactButtonSheet } from '../.';

const App = () => {
  return (
    <div>
      <ReactButtonSheet text="test component" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
