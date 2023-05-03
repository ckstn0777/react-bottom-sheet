// import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactButtomSheet } from 'chan-bottom-sheet';

//import { ReactButtomSheet } from '../../dist';
// import '../../dist/tailwind.css';

const App = () => {
  return (
    <main className="w-screen h-screen bg-slate-200 flex justify-end items-center">
      <div className="md:w-[768px] lg:w-[1024px] mx-auto p-16 bg-slate-300 rounded-lg">
        <h2 className="text-center text-4xl my-8">Chan Bottom Sheet</h2>

        <div className="h-64 flex-1 flex justify-center items-center">
          <ReactButtomSheet>Show Buttom Sheet</ReactButtomSheet>
        </div>
      </div>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
