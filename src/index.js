import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from './components/Card';
import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex' }}>
      <Card type="mario" />
      <Card type="mushroom" />
      <Card type="star" />
      <Card type="luigi" />
      <Card type="fireflower" />
      <Card type="cloud" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
