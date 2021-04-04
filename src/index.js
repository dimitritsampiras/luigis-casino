import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/Card';
import { MemoryMatch } from './components/MemoryMatch/MemoryMatch';
import { PicturePoker } from './components/PicturePoker';
import PairAGone  from  './components/pairAGone/PairAGone';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <div style={{ display: 'flex' }}>
      <MemoryMatch />
      
    </div> */}
    <div>
      <PairAGone />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
