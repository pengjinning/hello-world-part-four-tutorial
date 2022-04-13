async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    // Start deployment, returning a promise that resolves to a contract object
    const hello_world = await HelloWorld.deploy("Hello World!");
    // Contract deployed to address: 0xA39dEC4F469cbc54Cdf23a7B137C162246DE46bB
    console.log("Contract deployed to address:", hello_world.address);
    // https://ropsten.etherscan.io/
    // https://ropsten.etherscan.io/address/0xA39dEC4F469cbc54Cdf23a7B137C162246DE46bB
    // https://ropsten.etherscan.io/tx/0xeed161d7f9c261d3c2ecf2a8b09427b57ce3957253b2547275d5043508cfc7c2
    // https://dashboard.alchemyapi.io/explorer
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
