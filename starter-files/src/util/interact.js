// require('dotenv').config();
// const alchemyKey = process.env.ALCHEMY_WEBSOCKETS_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey);
const web3 = createAlchemyWeb3("wss://eth-ropsten.alchemyapi.io/v2/U-cLjbpbgZrkwbOFmh7loNkG1AV6MN9J");
// https://dashboard.alchemyapi.io/apps/3kp4sf9kstnx2ux9

// https://ropsten.etherscan.io/address/0x6f3f635a9762b47954229ea479b4541eaf402a6a#code
const contractABI = require("../contract-abi.json");
const contractAddress = "0xA39dEC4F469cbc54Cdf23a7B137C162246DE46bB" //"0x6f3f635a9762b47954229ea479b4541eaf402a6a";

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
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "👆🏽 Write a message in the text-field above.",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: "😥",
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "👆🏽 Write a message in the text-field above.",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: "😥",
        };
    }
};

export const updateMessage = async (address, message) => {
    if (!window.ethereum || address === null) {
        return {
            status:
                "💡 Connect your Metamask wallet to update the message on the blockchain.",
        };
    }

    if (message.trim() === "") {
        return {
            status: "❌ Your message cannot be an empty string.",
        };
    }

    //set up transaction parameters
    const transactionParameters = {
        to: contractAddress, // Required except during contract publications.
        from: address, // must match user's active address.
        data: helloWorldContract.methods.update(message).encodeABI(),
    };

    //sign the transaction
    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        });
        return {
            status: " ",
        };
  } catch (error) {
    return {
        status: "😥 " + error.message,
    };
}
};
