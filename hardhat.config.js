require("@nomicfoundation/hardhat-toolbox");
// require("@solarity/hardhat-migrate");
// require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("pancakeV3", "Predicts pancake v3 pool")
  .addParam("token0", "The first token")
  .addParam("token1", "The second token")
  .addParam("fee", "The pool fee")
  .setAction(async (taskArgs) => {
    const Calculator = await ethers.getContractFactory("PredictAddress");
    const calculator = await Calculator.deploy();

    console.log("Pancake V3 pool address:", await calculator.predictPancakeV3Pool(
      taskArgs.token0,
      taskArgs.token1,
      taskArgs.fee
    ))

  });

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
