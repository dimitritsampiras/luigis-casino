import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../css/Card.css';
import iconSelector from '../utils/iconSelector';

export const Card = (props) => {
  const [face, setFace] = useState('front');

  return (
    <ReactCardFlip
      isFlipped={face === 'front'}
      flipDirection="horizontal"
      containerStyle={extraStyles}
    >
      <div
        className="card-front"
        onClick={() =>
          setFace((prev) => {
            return prev === 'back' ? 'front' : 'back';
          })
        }
      >
        <img src={iconSelector(props.type)}></img>
      </div>
      <div
        className="card-back"
        onClick={() =>
          setFace((prev) => {
            return prev === 'back' ? 'front' : 'back';
          })
        }
      ></div>
    </ReactCardFlip>
  );
};

const extraStyles = { width: '200px', height: '300px', margin: '10px' };
