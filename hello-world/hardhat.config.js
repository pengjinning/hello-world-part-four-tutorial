/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config()
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_HTTP_URL, ALCHEMY_KEY } = process.env;

// console.log(ALCHEMY_HTTP_URL);
// console.log(ALCHEMY_KEY);

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: ALCHEMY_HTTP_URL,
      accounts: [`0x${ALCHEMY_KEY}`]
    }
  },
}
