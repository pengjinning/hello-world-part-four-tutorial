# truffle

- <https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract>
- <https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/submitting-your-smart-contract-to-etherscan>
- export http_proxy=http://127.0.0.1:10818
- export https_proxy=http://127.0.0.1:10818

```bash
truffle init
#   $ truffle create contract YourContractName # scaffold a contract
#   $ truffle create test YourTestName         # scaffold a test
# http://trufflesuite.com/docs
yarn add @truffle/hdwallet-provider
yarn add dotenv
yarn add truffle-plugin-verify
truffle compile
# deploy
truffle migrate --network ropsten
# 

```
