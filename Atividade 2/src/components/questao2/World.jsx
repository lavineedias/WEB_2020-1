import React, { Component } from 'react';


class World extends Component{
    render(){
    return <div align ='center'> <h1>Estas são minhas arenas{this.props.children}</h1></div>
    }
}

export default World;