import React, {useState} from 'react'
import BackIcon from '../../assets/back.png';
import '../../css/MemoryMatch.css';
import '../../css/Card.css';
import ReactCardFlip from 'react-card-flip'
import iconSelector from '../../utils/iconSelector'

export const MemoryCard = ({id, icon, width, height, flipped, handleClick}) => {

    return(
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" containerStyle={extraStyles}>
        <div style={{width, height}} onClick={() => handleClick(id)}>
          <img style={{width, height}}
                    src={BackIcon}
            />
        </div>
        <div style={{width, height}}>
            <img style={{width, height}} src={iconSelector(icon)}></img>
        </div>
      </ReactCardFlip>
        // <div 
        // className={`flip-container ${flipped ? 'flipped' : ''}`}
        // style={{width, height}}
        // onClick={() => handleClick(id)}
        // >
        //     <div className="flipper">
        //         <img style={{width, height}}
        //             className={flipped ? 'front' : 'back'}
        //             src={flipped ? front : back}
        //         />
        //     </div>
        // </div>
    );
};
const extraStyles = { width: '150px', height: '225px', margin: '40px', marginBottom: '-25px' };
