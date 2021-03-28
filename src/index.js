import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/Card';
import { PicturePoker } from './components/PicturePoker';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex' }}>
      <PicturePoker />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
