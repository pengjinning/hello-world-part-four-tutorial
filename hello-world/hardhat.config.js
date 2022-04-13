/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config()
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_HTTP_URL, PRIVATE_KEY } = process.env;

// console.log(ALCHEMY_HTTP_URL);

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: ALCHEMY_HTTP_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}
