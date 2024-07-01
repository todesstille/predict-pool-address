require("@nomicfoundation/hardhat-toolbox");
// require("@solarity/hardhat-migrate");
// require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
    },
    chapel: {
      url: process.env.BSC_TESTNET_URL,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 6000000000,
    },
    bsc: {
      url: process.env.BSC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    arbitrum: {
      url: process.env.ARBITRUM_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    optimism: {
      url: process.env.OPTIMISM_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    amoy: {
      url: process.env.AMOY_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      sepolia: `${process.env.ETHERSCAN_KEY}`,
      bscTestnet: `${process.env.BSCSCAN_KEY}`,
      polygonAmoy: `${process.env.POLYGONSCAN_KEY}`,
    },
    customChains: [
      {
        network: "polygonAmoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com"
        },
      }
    ]
  },
  migrate: {
    pathToMigrations: "./deploy/",
  },

};
