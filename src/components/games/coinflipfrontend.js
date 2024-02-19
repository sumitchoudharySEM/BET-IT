import React, { useEffect, useState } from "react";
import "../../css/custom/coinflip.css";

class Coinflipgamefront extends React.Component {
//   const [amount, setAmount] = useState("");
//   const [coinSide, setCoinSide] = useState("");
//   const [gameNo, setGameNo] = useState(0);

//   const [heads, setHeads] = useState(0);
//   const [tails, setTails] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);

  constructor(props) {
    super(props);
    this.state = {
      result: "",
      nader: "nader"
    };
    this.coinToss = this.coinToss.bind(this);
  }
  coinToss() {
    this.setState({ nader: "" }, () => {
      if (Math.random() < 0.5) {
        this.setState({ result: "heads" });
        console.log("heads");
      } else {
        this.setState({ result: "tails" });
        console.log("tails");
      }
    });
  }

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleCoinSideChange = (side) => {
//     setCoinSide(side);
//   };
render() {
  return (
    <div>
      <div className="game-layout">
        <div className="blue-area">
        <div className="App">
        <div id="coin" className={this.state.result} key={+new Date()}>
          <div class="side-a">
            <h2>TAIL</h2>
          </div>
          <div className="side-b">
            <h2>HEAD</h2>
          </div>
        </div>
        <h1>Flip a coin</h1>
        <button id="btn" onClick={this.coinToss}>
          Coin Toss
        </button>
      </div>
    
        </div>
        {/* <div className="wallet-info">
          <div>Your connected wallet is</div>
          <br />
          <input
            type="text"
            placeholder="Amount you want to stack in ETH"
            value={amount}
            onChange={handleAmountChange}
          />
          <div>Place your bet on</div>
          <button onClick={() => handleCoinSideChange("true")}>HEADS</button>
          <button onClick={() => handleCoinSideChange("false")}>TAILS</button>
          print stuff
          <hr />
          {coinSide}
          <hr />
          {amount}
          <button className="place-bet-btn">Place bet</button>
          <hr />
          <button className="place-bet-btn">Get Next Game No</button>
          <div>NextGameNo: </div>
        </div> */}
      </div>
    </div>
  );}
};

export default Coinflipgamefront;
