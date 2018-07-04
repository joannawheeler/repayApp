import React, { Component } from 'react';
import AddItemButton from './AddItemButton';

class WhoWillSplit extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
          <p>Who Will Split The Cost</p>
          <p>Please separate each name with a comma</p>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />
          <AddItemButton />
      </div>
    );
  }
}

export default WhoWillSplit;