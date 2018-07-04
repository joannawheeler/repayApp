import React, { Component } from 'react';
import WhoPaid from './WhoPaid';
import AddNewItem from './Item/AddNewItem';
import Bill from './Item/Bill';
import FinishedAddingItemsButton from './FinishedAddingItemsButton';
import Header from '../Header'

class BillItemInputForm extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Brunch</h2>
        <Bill />
        <FinishedAddingItemsButton />
        <AddNewItem />
      </div>
    );
  }
}

export default BillItemInputForm;