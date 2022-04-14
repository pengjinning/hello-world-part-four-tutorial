async function main() {
    // Grab the contract factory
    const MyNFT = await ethers.getContractFactory("MyNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy(); // Instance of the contract
    // Contract deployed to address: 0xBCD747e7d859846cEde4BC8BCE78D5C7F005d791
    // https://ropsten.etherscan.io/address/0xbcd747e7d859846cede4bc8bce78d5c7f005d791
    // https://ropsten.etherscan.io/tx/0xa59de1cc9d7c12379b17ee21e4aa2feff6853e929cd91bf2d055e7ab78c69af4
    console.log("Contract deployed to address:", myNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
