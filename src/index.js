import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom'
import Tablas from "./components/Tablas";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Router>
      <App />
      <Route path='/tablas' component={Tablas}/>
    </Router>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('.principal')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
