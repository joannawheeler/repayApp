import React, { Component } from 'react';
import ItemCost from './ItemCost';
import ItemName from './ItemName';
import WhoWillSplit from './WhoWillSplit';

class AddNewItem extends Component {
  render() {
    return (
      <div>
        <h3>--Add New Item--</h3>
        <ItemName />
        <ItemCost />
        <WhoWillSplit />
      </div>
    );
  }
}

export default AddNewItem;