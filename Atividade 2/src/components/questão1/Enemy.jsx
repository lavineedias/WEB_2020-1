import React, { Component } from 'react';

import img_inimigo from './images/lexluthor.jpg'



class Enemy extends Component{
    render(){
        return(
          <div align="center">
          <h1> Inimigo: {this.props.name} </h1>
          <div className="img_inimigo">
            <img src={img_inimigo} height="400" width ="400"/>
          </div>
        </div>
        );
    }
  }

  export default Enemy;