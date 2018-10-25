import React from 'react';
import { render } from 'react-dom';
import App from './components/App/';
import 'reset-css';
import 'normalize.css';
import './styles/main.scss';

render(
  <App />,
  document.querySelector('#app')
);
