import React, { Component } from 'react';

class RunningTotals extends Component {
  constructor(props) {
    super(props);
    this.updateTotals = this.updateTotals.bind(this);
    this.whatIsThisBillFor = this.whatIsThisBillFor.bind(this);
  }

  whatIsThisBillFor() {

  }

  updateTotals(itemName, itemCost, whoWillSplit) {

    //grab the current totals

    //input new bill

var whoOwesWho = {
  //answer taken from brunch
  Maria : {
    Aliza : 11.25,
    Tony : 3.75,
    Karen : 11.25
  }
};

function balanceTotals(billPayer, bill) {
  //store each person that needs to get paid back, who needs to pay them back, and how much they need to pay them back


  var curDuesToBillPayer = {};
  curDuesToBillPayer[billPayer] = {};
  bill.forEach((item) => {
    var splitVal = item.price / item.willSplit.length;
    item.willSplit.forEach((person) => {
      if (person !== billPayer) {
        // console.log(curDuesToBillPayer[billPayer])
        curDuesToBillPayer[billPayer][person] = curDuesToBillPayer[billPayer][person] + splitVal || splitVal;
        // console.log(person)
        // console.log(curDuesToBillPayer[billPayer][person])
      }
    })
  });
    console.log("Karen: ")
    console.log(curDuesToBillPayer[billPayer])
    console.log(" ")
  for (var person in curDuesToBillPayer[billPayer]) {
    //does anyone owe the person money? (does the billPayer owe this person money?)
    //no, nobody owes this person money (the billPayer doesnt owe this person money)
    if (!whoOwesWho[person]) {
      console.log(person + " :!whoOwesWho[person]")
      //create maria if she doesnt yet exist
      whoOwesWho[billPayer] = whoOwesWho[billPayer] || {};
      //add aliza as someone who owes maria money and what aliza now owes her
      whoOwesWho[billPayer][person] = whoOwesWho[billPayer][person] + curDuesToBillPayer[billPayer][person] || curDuesToBillPayer[billPayer][person];
      console.log("whoOwesWho[billPayer][person]: " + whoOwesWho[billPayer][person]);
      // console.log(whoOwesWho)
    //if people owe aliza money
    } else if (whoOwesWho[person]) {
      console.log(person + " :whoOwesWho[person]")
      // console.log("hi")
    // if maria owes aliza money
      if (whoOwesWho[person][billPayer]) {
      //if what maria owes aliza > what aliza owes maria
        if (whoOwesWho[person][billPayer] > curDuesToBillPayer[billPayer][person]) {
          console.log(billPayer + " owes " + person + "more")
          //what maria owes aliza = what maria owes aliza - what aliza owes maria
          whoOwesWho[person][billPayer] = whoOwesWho[person][billPayer] - curDuesToBillPayer[billPayer][person];
        //if what maria owes aliza < what aliza owes maria
        } else if (whoOwesWho[person][billPayer] < curDuesToBillPayer[billPayer][person]) {
        console.log(person + " owes " + billPayer + " more")
        //what aliza owes maria = what aliza owes maria - what maria owes aliza
        whoOwesWho[billPayer] = whoOwesWho[billPayer] || {};
          whoOwesWho[billPayer][person] = curDuesToBillPayer[billPayer][person] - whoOwesWho[person][billPayer];
        }
        //delete maria from aliza
        delete whoOwesWho[person][billPayer];
        //and if aliza is empty, delete her name too
        if (Object.keys(whoOwesWho[person]).length === 0 && whoOwesWho[person].constructor === Object) {
            delete whoOwesWho[person];
        }
      //if they both owe each other the same amount, they're square
      } else if (whoOwesWho[person][billPayer] === curDuesToBillPayer[billPayer][person]) {
        console.log(person + ": ===")
      //delete maria as someone who owes aliza money, cuz she doesnt anymore
        delete whoOwesWho[person][billPayer];
        //and if nobody else owes aliza any money, delete her from whoOwesWho
        if ((Object.keys(whoOwesWho[person]).length === 0 && whoOwesWho[person].constructor === Object)) {
          delete whoOwesWho[person];
        }
      }
    }
  }
  console.log(" ");
  console.log("my answer: ")
  console.log(whoOwesWho)
}

////////////////////////////

//EXAMPLE BILL
var brunch = [
  {
    name: "French Toast",
    price: 15,
    willSplit: ["Aliza","Maria", "Tony", "Karen"]
  },
  {
    name: "Eggs Benedict",
    price: 15,
    willSplit: ["Aliza", "Karen"]
  }
]
var dinner = [
  {
    name: "Classic Spaghetti",
    price: 12,
    willSplit: ["Apurva", "Tony"]
  },
  {
    name: "Calamari",
    price: 15,
    willSplit: ["Chad", "Tony", "Maria"]
  },
  {
    name: "Baked Brussel Sprouts",
    price: 10,
    willSplit: ["Aliza", "Apurva"]
  },
  {
    name: "Lasagna",
    price: 15,
    willSplit: ["Chad"]
  },
  {
    name: "Bottle of Wine",
    price: 40,
    willSplit: ["Aliza", "Karen", "Maria", "Chad"]
  },
  {
    name: "Burger",
    price: 12,
    willSplit: ["Maria"]
  }
]

// balanceTotals("Karen", dinner);
  }

  render() {
    return (
      <div>
        <h3>
        Running Totals
        </h3>
        {!this.props.totals ? (<p>
        None yet! Please enter a bill.
        </p>) : (<p><p>-- dummy data --</p><p>Sam owes Jo $5</p><p>Bob owes Sue $7</p></p>)}
        {this.props.showAddNewBillButton && (<button onClick={this.whatIsThisBillFor}>Add New Bill</button>)}
      </div>
    );
  }
}

export default RunningTotals;