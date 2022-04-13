// interact.js
require('dotenv').config()
// 
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
// For Truffle
// const contract = require("./build/contracts/HelloWorld.json");
// For Hardhat 
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
// 
// console.log(JSON.stringify(contract.abi));
// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network = "ropsten", ALCHEMY_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
// 
async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message.");
    await tx.wait();
}
main();
