# 学习nft

- [教程](https://www.web3.university/article/how-to-create-an-nft)
- <https://www.web3.university/article/how-to-mint-an-nft-using-web3-js>
- <https://ropsten.etherscan.io/address/0xbcd747e7d859846cede4bc8bce78d5c7f005d791>
- <https://ropsten.etherscan.io/tx/0xa59de1cc9d7c12379b17ee21e4aa2feff6853e929cd91bf2d055e7ab78c69af4>
- <https://www.pinata.cloud/>

```bash
yarn init
yarn add hardhat
yarn add dotenv
yarn add @nomiclabs/hardhat-ethers "ethers@^5.0.0"
yarn add @alch/alchemy-web3
npx hardhat
mkdir contracts
mkdir scripts
npx hardhat compile
npx hardhat run scripts/deploy.js --network ropsten
npx hardhat run scripts/mint-nft.js --network ropsten
```
