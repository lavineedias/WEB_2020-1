import React, { Component } from 'react';

import img_heroi from './images/superman.jpg'

class Hero extends Component{
    render(){
        return (
          <div align ="center">
          <h1> Herói: {this.props.name} </h1>
          <div className="img">
          <img src={img_heroi} height="400" width ="400"/>
          </div>
        </div>
        );
    }
}

export default Hero;