import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hooks1 from './Hooks1';
import Hooks2 from './Hooks2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Hooks1 />
    <Hooks2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
