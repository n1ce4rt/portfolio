import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {HashRouter as Router} from 'react-router-dom';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import {theme, ThemeContext} from './ThemeContext/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeContext.Provider value={theme}>
        <App/>
      </ThemeContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
