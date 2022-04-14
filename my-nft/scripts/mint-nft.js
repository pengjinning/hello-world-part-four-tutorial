require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
//
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
//
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
// console.log(JSON.stringify(contract.abi));
const contractAddress = "0xBCD747e7d859846cEde4BC8BCE78D5C7F005d791";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
//
async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

    //the transaction
    const tx = {
        'from': PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'maxPriorityFeePerGas': 1999999987,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    signPromise.then((signedTx) => {

        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function (err, hash) {
            if (!err) {
                // The hash of your transaction is:  0xf78724ff978b2c64dc98c720e19aa2d5314a00392f5316b2008f1440d7f6b6e2 
                // https://dashboard.alchemyapi.io/mempool
                console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!");
            } else {
                console.log("Something went wrong when submitting your transaction:", err)
            }
        });
    }).catch((err) => {
        console.log("Promise failed:", err);
    });
}

mintNFT("https://gateway.pinata.cloud/ipfs/QmQvUTsdE9bgzN8oXZfqc6kTXdmc3sqj7pnUBbhrRLjQMj")
