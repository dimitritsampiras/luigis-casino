import React, { Component } from 'react';
import MarioIcon from '../assets/marioicon.png';
import MushroomIcon from '../assets/mushroomicon.png';
import StarIcon from '../assets/staricon.png';
import LuigiIcon from '../assets/luigiicon.png';
import CloudIcon from '../assets/cloudicon.png';

import './../css/PairCard.css';

class PairCard extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.onChange = props.onChange;
        this.value = props.value;
        this.id = props.id;
    }

    iconMatcher(cardName) {
        switch (cardName) {
            case 1:
              return MarioIcon;
        
            case 2:
              return MushroomIcon;
        
            case 3:
              return StarIcon;
        
            case 4:
              return LuigiIcon;
        
            case 5:
              return CloudIcon;
        
            default:
              return CloudIcon;
          }
    }

    render() {
        return (
            <button className="card" name={this.name} id={this.id} style={this.cardStyle} value={this.value} onClick={this.onChange}>
                <img className="icon" src={this.iconMatcher(this.name)}/>
            </button>
        )
    }
}

export default PairCard;