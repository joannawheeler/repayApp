import React, { Component } from 'react';
import Header from '../Header';

class WhoPaid extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
      <div>
        <Header />
        <h1>Who paid the bill?</h1>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />
          <button onClick="">Next</button>
      </div>
    )
  }
}

export default WhoPaid;