// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
  render(){
    return (<button onClick={this.handleClick}>Coordinates</button>)
  }

  handleClick = (e) => {
    const coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)}
    }
