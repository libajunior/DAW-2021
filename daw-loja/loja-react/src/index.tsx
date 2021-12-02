import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Bootstrap CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Bootstrap Icons CSS
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

//Global CSS styles
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);