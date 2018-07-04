import React, { Component } from 'react';

class ItemName extends Component {
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
        <label>
          Item Name:
          <input type="text" value= {this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default ItemName;