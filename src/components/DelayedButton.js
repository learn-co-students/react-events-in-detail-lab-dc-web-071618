import React, { Component } from "react";

class DelayedButton extends Component {
  render() {
    return (
      <button
        onClick={event => {
          event.persist();
          setTimeout(() => {
            this.props.onDelayedClick(event);
          }, this.props.delay);
        }}
      >
        Delayed Button
      </button>
    );
  }
}

export default DelayedButton;
