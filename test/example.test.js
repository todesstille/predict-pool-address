const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");
const {predictPancakePoolV3Address} = require("./helpers.js");

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
        "0xb02541995F317Fd47c5dF8E8Fba7284b502b5D7B",
        "0x55d398326f99059fF775485246999027B3197955",
        100
      )).to.equal("0xB2eeDbA0B8F86C0d8F7BDDB5B7A0e0B21f1233B2");
    });

    it("NodeJs helper works correctly", async () => {
      let predictedAddress = predictPancakePoolV3Address(
          "0xb02541995F317Fd47c5dF8E8Fba7284b502b5D7B",
          "0x55d398326f99059fF775485246999027B3197955",
          100
        );
      expect(predictedAddress).to.equal("0xB2eeDbA0B8F86C0d8F7BDDB5B7A0e0B21f1233B2")

      predictedAddress = predictPancakePoolV3Address(
        "0x55d398326f99059fF775485246999027B3197955",
        "0xb02541995F317Fd47c5dF8E8Fba7284b502b5D7B",
        100
      );
    expect(predictedAddress).to.equal("0xB2eeDbA0B8F86C0d8F7BDDB5B7A0e0B21f1233B2")


      predictedAddress = predictPancakePoolV3Address(
        "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
        10000
      );
      expect(predictedAddress).to.equal("0x3b7cB5Fa69D4ADA0274a17dE7BCcAe455197d034")
    })
  });
});