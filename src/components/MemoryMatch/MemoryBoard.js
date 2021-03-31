import React, {useState} from 'react'
import "../../css/MemoryMatch.css"
import {MemoryCard} from './MemoryCard.js'

export const MemoryBoard = ({cards, flipped, handleClick}) =>{
    return(
        <div className="wrapper">
            {
                cards.map((card) => (
                <MemoryCard
                    id={card.id} //card unique id
                    icon={card.icon}
                    width={200}
                    height={200}
                    flipped={flipped.includes(card.id)} //check flipped state of card in array, if it includes card id
                    handleClick = {() => handleClick(card.id)} //handle click event 
                  />))
            }
        </div>
        // <div className="board">

        // </div>   
    );
}