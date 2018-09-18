// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }

  handleClick = (e) => {
    const coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)
  }
}

export default CoordinatesButton
