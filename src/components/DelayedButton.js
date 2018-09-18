// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{

  constructor(props){
    super(props);
    // this.clickerThing = this.clickerThing.bind(this)
  }

  clickerThing = (event) => {
    event.persist()
    setTimeout( () => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.clickerThing.bind(this)}>delayed click</button>
    )
  }

}

export default DelayedButton
