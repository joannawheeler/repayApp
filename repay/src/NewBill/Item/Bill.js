import React, { Component } from 'react';
import ItemList from '../ItemList';

class Bill extends Component {
  render() {
    return (
      <div>
        <h3>--Bill--</h3>
        <p>paid by Maria</p>
        <ItemList />
      </div>
    );
  }
}

export default Bill;