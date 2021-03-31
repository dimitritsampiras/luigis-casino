import React, { useEffect, useState } from 'react';
import { MemoryBoard } from './MemoryBoard';

import MarioIcon from '../../assets/marioicon.png';
import {createDeck} from "./MemoryDeck"

export const MemoryMatch = (props) => {
  
 
  //hooks
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  //this useEffect replaces our componentDidMount()
  //won't get called ever time app re-renders, just called once
  useEffect(() => {
    setCards(createDeck)
  }, []);

  const handleClick = (id) => setFlipped([... flipped, id])

  return (
    <div className="mini-game-container">
      <h2>Memory Match</h2>
      <MemoryBoard
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}

      />
    </div>
  );
};
