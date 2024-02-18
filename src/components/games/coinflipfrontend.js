import React, { useEffect, useState } from "react";
import "../../css/custom/coinflip.css";

const Coinflipgamefront = () => {
  const [amount, setAmount] = useState("");
  const [coinSide, setCoinSide] = useState("");
  const [gameNo, setGameNo] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCoinSideChange = (side) => {
    setCoinSide(side);
  };

  return (
    <div>
      <div className="App">
        <div className="blue-area">
          <div className="coin">{/* {coinSide === 'HEADS' ? 'H' : 'T'} */}</div>
        </div>
        <div className="wallet-info">
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
        </div>
      </div>
    </div>
  );
};

export default Coinflipgamefront;
