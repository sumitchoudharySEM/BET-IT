import React, { useEffect } from "react";
import { useState } from "react";
import "../../css/custom/game-layout.css";
import { useAccount, providers } from "wagmi";
import contractABI from "../../contracts/coinflipABI.json";
import { ethers } from "ethers";

const Coinflipgame = () => {
  //const account = useAccount();
  //const providers 


  let contractAddress = "0xfb093c519696739900e116ed1d4fa3316c78ae0d";

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const [currentContractVal, setCurrentContractVal] = useState(null);
  const [contract, setContract] = useState(null);

  const [amount, setAmount] = useState("");
  const [coinSide, setCoinSide] = useState("");
  const [gameNo, setGameNo] = useState(0);

  const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

  

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCoinSideChange = (side) => {
    setCoinSide(side);
  };

  // useEffect(() => {
  //   accountChangedHandler(account.address);
  //   setConnButtonText("Wallet Connected");
  // }, [account.address]);

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    updateEthers();
  };


 

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

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
      let val = await contract.StartGame(ethers.utils.parseUnits(amount,"ether"), coinSide, {
        value: ethers.utils.parseUnits(amount,"ether"),
        gasLimit: 90000 // Specify the gas limit you want to use
      }) ;
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
    <div>
      <div className="App">
        <div className="blue-area">
          {/* Simplistic representation of a spinning coin */}
          <div className="coin">{/* {coinSide === 'HEADS' ? 'H' : 'T'} */}</div>
        </div>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div className="wallet-info">
          <div>Your connected wallet is</div>
          <div></div>
          {/* <div>
            {account.isConnected ? account.address : "account not connected"}
          </div> */}
          <br />
          {/* <div>{account.}</div> */}
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
        </div>
      </div>
    </div>
  );
};

export default Coinflipgame;
