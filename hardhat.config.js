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
  },
  migrate: {
    pathToMigrations: "./deploy/",
  },

};
