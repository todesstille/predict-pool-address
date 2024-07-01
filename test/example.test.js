const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("Test template", function () {

  let admin, alice, bob;

  before(async () => {
    [admin, alice, bob] = await ethers.getSigners();
  });

  beforeEach(async () => {
    const MockToken = await ethers.getContractFactory("MockToken");
    token = await MockToken.deploy();
  });

  describe("Tokens", function () {
    it("balance", async () => {
      expect(await token.balanceOf(admin.address)).to.equal("1000000000000000000000000000");
    });
  });
});