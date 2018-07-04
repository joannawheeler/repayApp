import React, { Component } from 'react';
import Header from '../Header';

class WhatIsThisBillFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount() {
    //put API calls here but maybe in other components, just keeping note of the method here for future use
  }

  render() {
    return (
      <div className="WhatIsThisBillFor">
        <Header />
        <h1>What is this bill for?</h1>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />
          <button onClick="">Next</button>
      </div>
    )
  }
}

export default WhatIsThisBillFor;