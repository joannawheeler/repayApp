import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1,2,3]
    }
  }
  render() {
    var items = this.state.items.map((item) => { return <p>{item}</p> });
    return (
      <div>
        {!this.state.items ? (<p>
        No items added yet. Please add an item to the bill.
        </p>) : items }
      </div>
    );
  }
}

export default ItemList;