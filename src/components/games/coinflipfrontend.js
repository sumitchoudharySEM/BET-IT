import React from "react";
import "../../css/custom/coinflip.css";
import { useEffect, useState } from "react";
import Heads from "../../images/games/heads.png";
import contractABI from "../../contracts/coinflipGABI.json";
import { ethers } from "ethers";
import Tails from "../../images/games/tails.png";
import { useAccount, providers } from "wagmi";

const Coinflipfrontend = () => {
  // const account = useAccount();
  let contractAddress = "0xE2c407b34C8D96DA3b72AD04191D886032C0E017";
  const [contract, setContract] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [errorMessage, setErrorMessage] = useState(null);

  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  const [amount, setAmount] = useState("");
  const [coinSide, setCoinSide] = useState("");
  const [gameNo, setGameNo] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCoinSideChange = (side) => {
    setCoinSide(side);
  };

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    const flipBtn = document.querySelector("#flip-button");
    const coin = document.querySelector(".coin");

    const handleFlip = () => {
      const i = Math.floor(Math.random() * 2);

      coin.style.animation = "none";
      if (i) {
        setTimeout(() => {
          coin.style.animation = "spin-heads 6s forwards";
          setHeads((prevHeads) => prevHeads + 1);
        }, 100);
      } else {
        setTimeout(() => {
          coin.style.animation = "spin-tails 6s forwards";
          setTails((prevTails) => prevTails + 1);
        }, 100);
      }
      disableButton();
    };

    const disableButton = () => {
      flipBtn.disabled = true;
      setTimeout(() => {
        flipBtn.disabled = false;
      }, 3000);
    };

    flipBtn.addEventListener("click", handleFlip);

    return () => {
      flipBtn.removeEventListener("click", handleFlip);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };

  // useEffect(() => {
  //   accountChangedHandler(account.address);
  //   setConnButtonText("Wallet Connected");
  // }, [account.address]);

  window.ethereum.on("accountsChanged", accountChangedHandler);

  const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    let tempContract = new ethers.Contract(
      contractAddress,
      contractABI,
      tempSigner
    );
    setContract(tempContract);
  };

  const startPlayGame = async (event) => {
    event.preventDefault();
    console.log(
      "sending coinside as" +
        coinSide +
        "& amount" +
        amount +
        " to the contract and starting the game"
    );
    //write response of the function
    try {
      let val = await contract.StartGame(
        amount,
        coinSide,
        {
          value: amount,
          gasLimit: 100000, // Specify the gas limit you want to use
        }
      );
      await val.wait();
      console.log("Transaction successful");
      console.log(val);
      console.log(val.toString());
    } catch (error) {
      console.error("Error starting game:", error);
    }
    console.log("seted ");
  };

  const getNextGameNo = async () => {
    console.log("getting Next Game Number");
    let val = await contract.PrintNextGameNo();
    console.log(val.toNumber());
    setGameNo(val.toNumber());
  };

  return (
    <div className="coinflip-layout">
      <div className="coinflip-container">
        <div className="coinflip-game-canvas">
          <div class="game-coin-container">
            <div class="coin" id="coin">
              <div class="heads">
                <img src={Heads} />
              </div>
              <div class="tails">
                <img src={Tails} />
              </div>
            </div>
          </div>
        </div>
        <div className="coinflip-controller-container">
          <div className="wallet-info">
            <div>Your connected wallet is</div>
            <div></div>
            <div>
            {/* {account.isConnected ? account.address : "account not connected"} */}
          </div>
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
            <button className="place-bet-btn" onClick={startPlayGame}>
            Place bet
          </button>
            <hr />
            <button className="place-bet-btn" onClick={getNextGameNo}>
              Get Next Game No
            </button>
            <div>NextGameNo: {gameNo}</div>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
          </div>
          <div class="buttons">
            <button id="flip-button">Flip Coin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coinflipfrontend;
