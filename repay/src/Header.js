import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // totals: false,
      // showRunTotals : true,
      // showAddNewBillButton : true
    }
  }

  componentDidMount() {
    //put API calls here but maybe in other components, just keeping note of the method here for future use
  }

  render() {
    return (
      <div className="App">
        <h1>Repayment Calculator</h1>
      </div>
    )
  }
}

export default Header;