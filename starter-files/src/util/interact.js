// require('dotenv').config();
// const alchemyKey = process.env.ALCHEMY_WEBSOCKETS_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey);
const web3 = createAlchemyWeb3("wss://eth-ropsten.alchemyapi.io/v2/U-cLjbpbgZrkwbOFmh7loNkG1AV6MN9J");
// https://dashboard.alchemyapi.io/apps/3kp4sf9kstnx2ux9

// https://ropsten.etherscan.io/address/0x6f3f635a9762b47954229ea479b4541eaf402a6a#code
const contractABI = require("../contract-abi.json");
const contractAddress = "0x6f3f635a9762b47954229ea479b4541eaf402a6a";

//export const helloWorldContract;
export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => { 
    const message = await helloWorldContract.methods.message().call();
    return message;
};

export const connectWallet = async () => {
  
};

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};
