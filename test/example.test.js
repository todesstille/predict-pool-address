const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("Test template", function () {

  let admin, alice, bob;

  before(async () => {
    [admin, alice, bob] = await ethers.getSigners();
  });

  beforeEach(async () => {
    const Calculator = await ethers.getContractFactory("PredictAddress");
    calculator = await Calculator.deploy();
  });

  describe("Predicts address", function () {
    it("Pancake v3", async () => {
      expect(await calculator.predictPancakeV3Pool(
        "0x77Cd97D8DBAd50b0644527A888Eb1dDa2DC7df7b",
        "0x55d398326f99059fF775485246999027B3197955",
        100
      )).to.equal("0xA20101189aBd987EF63E8e520553c3a6404071D1");
    });
  });
});