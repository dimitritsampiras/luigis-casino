import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './components/Game';
import { MemoryMaster } from './components/MemoryMaster';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
