import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/Card';
import { MemoryMatch } from './components/MemoryMatch/MemoryMatch';
import { PicturePoker } from './components/PicturePoker';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex' }}>
      <MemoryMatch />
      
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
