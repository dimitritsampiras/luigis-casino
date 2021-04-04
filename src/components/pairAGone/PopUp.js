import React from 'react';
import './../../css/pairAGone/PopUp.css';

export const PopUp = (props) => {
    return (
        <div class="pair-modal">
          <p class="pair-message">Times Up! Your Score is {props.score}</p>
          <div class="pair-options">
            <button class="pair-btn" onClick={props.handleReplay}>Replay</button>
            <button class="pair-btn">Exit</button>
          </div>
        </div>
    )
}