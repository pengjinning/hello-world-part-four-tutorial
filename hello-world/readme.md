# 说明 hardhat

- <https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract>
- <https://ropsten.etherscan.io/>
- <https://ropsten.etherscan.io/address/0xA39dEC4F469cbc54Cdf23a7B137C162246DE46bB>
- <https://ropsten.etherscan.io/tx/0xeed161d7f9c261d3c2ecf2a8b09427b57ce3957253b2547275d5043508cfc7c2>
- <https://dashboard.alchemyapi.io/explorer>
- <https://dashboard.alchemyapi.io/mempool>

```bash
# 使用步骤
yarn init
yarn add hardhat --dev
yarn add dotenv
yarn add @nomiclabs/hardhat-ethers "ethers@^5.0.0"
npx hardhat
npx hardhat compile
npx hardhat run scripts/deploy.js --network ropsten
# Contract deployed to address: 0xA39dEC4F469cbc54Cdf23a7B137C162246DE46bB
npx hardhat run scripts/interact.js
# node interact.js # truffle
npx hardhat run scripts/interact.js --network ropsten
# 提交代码到etherscan
npx hardhat verify --network ropsten '0xA39dEC4F469cbc54Cdf23a7B137C162246DE46bB' 'Hello World!'
```
