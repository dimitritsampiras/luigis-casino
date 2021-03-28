import React, { useEffect, useState } from 'react';
import randomCard from '../utils/randomCard';
import { Card } from './Card';

export const PicturePoker = (props) => {
  const initialGameState = {
    round: 0,
    roundStage: 'betting' // betting | result
  };
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
  const initialAction = 'hold';

  // hooks
  const [gameState, setGameState] = useState(initialGameState);
  const [board, setBoard] = useState(initialBoard);
  const [coins, setCoins] = useState(initialCoins);
  const [bet, setBet] = useState(initialBet);
  const [action, setAction] = useState(initialAction);

  // methods

  /**
   * Handles the event when the bet button is clicked
   */
  const handleBetClick = () => {
    setCoins(coins - 1);
    setBet(bet + 1);
  };

  const handleActionClick = () => {
    if (action === 'draw') {
      setBoard((prev) => {
        // make new array
        const newArray = prev.usrHand.map((card, index) => {
          // if card is focused
          if (card[2]) {
            return [randomCard(), card[1], false];
          } else {
            return card;
          }
        });
        return {
          ...prev,
          usrHand: newArray
        };
      });
      setGameState({
        round: 0,
        roundStage: 'result' // betting | result
      });
    } else {
      setGameState({
        round: 0,
        roundStage: 'result' // betting | result
      });
    }
    setBoard((prev) => {
      const newArray = prev.luigisHand.map((card) => {
        return [card[0], 'front'];
      });
      console.log('new array', newArray);
      return {
        ...prev,
        luigisHand: newArray
      };
    });
  };

  /**
   * Handles a click of card
   * @param {number} key index of react card
   * @returns new state
   */
  const handleCardClick = (key) => {
    if (gameState.roundStage === 'betting') {
      setBoard((prev) => {
        // make new array
        const newArray = prev.usrHand.map((card, index) => {
          // if index is the card that's clicked on
          if (index === key) {
            // if itsa lready clicked on
            if (prev.usrHand[index][2]) {
              // unfocus it
              return [card[0], card[1], false];
            } else {
              // focus it
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
    }
  };

  // use effect since we need to know the boards state for this
  useEffect(() => {
    setAction((prev) => {
      const isOneSelected = board.usrHand.some((card) => {
        return card[2] === true;
      });
      if (isOneSelected) {
        return 'draw';
      } else {
        return 'hold';
      }
    });
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
              face={card[1]}
              key={key}
              onClick={() => console.log('yo')}
            />
          );
        })}
      </div>
      {/* 
        users's cards
      */}
      <div className="cards-container users">
        {board.usrHand.map((card, key) => {
          return (
            <Card
              type={card[0]}
              face={card[1]}
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
              {gameState.roundStage === 'betting' ? (
                <>
                  <button className="btn bet" onClick={handleBetClick}>
                    Bet Coins
                  </button>
                  <button onClick={handleActionClick} className="btn action">
                    {action}
                  </button>
                </>
              ) : (
                <>
                  <button className="btn bet disabled" onClick={handleBetClick}>
                    Bet Coins
                  </button>
                  <button
                    onClick={handleActionClick}
                    className="btn action disabled"
                  >
                    {action}
                  </button>
                </>
              )}
            </div>
          </>
        ) : (
          <h1>You lose :(</h1>
        )}
      </div>
    </div>
  );
};
