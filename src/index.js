import React from 'react';
import ReactDOM from 'react-dom';
import { PicturePoker } from './components/PicturePoker';
import PairAGone  from  './components/PairAGone';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex' }}>
      <PicturePoker />
    </div>
    <div>
      <PairAGone />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
