// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  handleClickDelay = (event) => {
    //keep the event object around, able to use it even after the click is over
    event.persist()

    // setTimeout(function() {
    //   //this = window
    //   console.log(this)
    //   this.props.onDelayedClick(event)}, this.props.delay)

    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }



  render() {
    return (
      <button onClick={this.handleClickDelay}>
      Delay Time</button>
    )
  }
}
