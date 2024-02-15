import React from "react";
import { useState } from "react";
import "../../css/custom/game-layout.css";
import { useAccount } from "wagmi";

const Coinflipgame = () => {
  const account = useAccount();

  const [amount, setAmount] = useState("");
  const [coinSide, setCoinSide] = useState("");

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
          {/* Simplistic representation of a spinning coin */}
          <div className="coin">{/* {coinSide === 'HEADS' ? 'H' : 'T'} */}</div>
        </div>
        <div className="wallet-info">
          <div>Your connected wallet is</div>
          <div>{account.isConnected ? account.address : "account not connected"}</div> <br />
          {/* <div>{account.}</div> */}
          <input
            type="text"
            placeholder="Amount you want to stack in ETH"
            value={amount}
            onChange={handleAmountChange}
          />
          <div>Place your bet on</div>
          <button onClick={() => handleCoinSideChange("HEADS")}>HEADS</button>
          <button onClick={() => handleCoinSideChange("TAILS")}>TAILS</button>
          print stuff
          <hr />
          {coinSide}
          <hr />
          {amount}
          <button className="place-bet-btn">Place bet</button>
        </div>
      </div>
    </div>
  );
};

export default Coinflipgame;
