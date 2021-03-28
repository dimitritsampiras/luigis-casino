import React, { useEffect, useState } from 'react';
import randomCard from '../utils/randomCard';
import { Card } from './Card';

export const PicturePoker = (props) => {
  const initialBoard = {
    luigisHand: [
      [randomCard(), 'back'],
      [randomCard(), 'back'],
      [randomCard(), 'back'],
      [randomCard(), 'back'],
      [randomCard(), 'back']
    ],
    usrHand: [
      [randomCard(), 'front', false],
      [randomCard(), 'front', false],
      [randomCard(), 'front', false],
      [randomCard(), 'front', false],
      [randomCard(), 'front', false]
    ]
  };

  const initialCoins = 10;
  const initialBet = 5;

  // hooks
  const [board, setBoard] = useState(initialBoard);
  const [coins, setCoins] = useState(initialCoins);
  const [bet, setBet] = useState(initialBet);

  // methods
  // const handleCardClick = () => {};

  const handleBetClick = () => {
    setCoins(coins - 1);
    setBet(bet + 1);
  };

  const handleCardClick = (key) => {
    setBoard((prev) => {
      const newArray = prev.usrHand.map((card, index) => {
        if (index === key) {
          if (prev.usrHand[index][2]) {
            return [card[0], card[1], false];
          } else {
            return [card[0], card[1], true];
          }
        } else {
          return card;
        }
      });

      return {
        ...prev,
        usrHand: newArray
      };
    });
  };

  useEffect(() => {
    console.log(board.usrHand);
  }, [board]);

  return (
    <div className="mini-game-container">
      {/*
        luigi's cards
      */}
      <div className="cards-container">
        {board.luigisHand.map((card, key) => {
          return (
            <Card
              type={card[0]}
              face="back"
              key={key}
              onClick={() => console.log('yo')}
            />
          );
        })}
      </div>
      {/* 
        users's cards
      */}
      <div className="cards-container">
        {board.usrHand.map((card, key) => {
          return (
            <Card
              type={card[0]}
              face="front"
              key={key}
              isFocused={card[2]}
              onClick={() => handleCardClick(key)}
            />
          );
        })}
      </div>
      <div className="actions-container">
        {coins > 0 ? (
          <>
            <div className="game-feed">
              <h3>Your coins: {coins}</h3>
              <h3>Current Bet: {bet}</h3>
            </div>
            <div className="action-btns">
              <button className="btn bet" onClick={handleBetClick}>
                Bet Coins
              </button>
              <button className="btn action">Hold</button>
            </div>
          </>
        ) : (
          <h1>You lose :(</h1>
        )}
      </div>
    </div>
  );
};
