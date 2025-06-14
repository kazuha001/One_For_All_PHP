/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    coretestnet: {
      url: "https://rpc.test2.btcs.network",
      chainId: 1114,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

console.log("Connecting")