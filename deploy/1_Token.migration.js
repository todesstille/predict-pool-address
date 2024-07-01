const hre = require("hardhat");
const { Deployer, Reporter } =require("@solarity/hardhat-migrate");

// Comment toolbox and uncomment migrate and waffle inside hardhat.config.js
module.exports = async (deployer) => {
  const Token = await hre.ethers.getContractFactory("MockToken");
  
  const token = await deployer.deploy(Token);
};
