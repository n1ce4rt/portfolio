import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {HashRouter as Router} from 'react-router-dom';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
