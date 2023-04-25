// import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Thing3 } from '../.';

const App = () => {
  return (
    <div>
      <p>111</p>
      <Thing3 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
