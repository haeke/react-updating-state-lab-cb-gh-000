// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0,
    };
  }
  handleClick = () => {
    this.setState({
      timesClicked: timesClicked++,
    });
  }
  render() {
    return (
      <div>
        <h4>{this.state.timesClicked}</h4>
        <button onClick={this.handleClick}>Click it</button>
      </div>
    );
  }
}

export default DigitalClicker;