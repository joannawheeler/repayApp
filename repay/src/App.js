import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './Home';
import WhatIsThisBillFor from './NewBill/WhatIsThisBillFor';
import WhoPaid from './NewBill/WhoPaid';
import BillItemInputForm from './NewBill/BillItemInputForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/whatIsThisBillFor' component={WhatIsThisBillFor} />
          <Route path='/whoPaid' component={WhoPaid} />
          <Route path='/billItemInputForm' component={BillItemInputForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
