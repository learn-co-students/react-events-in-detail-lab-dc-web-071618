import React, { Component } from "react";

class CoordinatesButton extends Component {
  render() {
    return (
      <button
        onClick={event => {
          this.props.onReceiveCoordinates([event.clientX, event.clientY]);
        }}
      >
        Coordinates Button
      </button>
    );
  }
}

export default CoordinatesButton;
