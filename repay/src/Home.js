import React, { Component } from 'react';
import RunningTotals from './RunningTotals';
import Header from './Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: false,
      showRunTotals : true,
      showAddNewBillButton : true
    }
  }

  componentDidMount() {
    //put API calls here but maybe in other components, just keeping note of the method here for future use
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.showRunTotals && <RunningTotals totals={this.state.totals} showAddNewBillButton={this.state.showAddNewBillButton} /> }
      </div>
    )
  }
}

export default Home;