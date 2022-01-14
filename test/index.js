const { expect } = require("chai");
const { ethers } = require("hardhat");


let bulkMintContract, erc721Contract, erc1155ContractAddress, erc20ContractAddress, multiSendContractAddress;

describe("Contract deployment", function() {
  it("deploy ERC721 Contract", async function() {
    const MERC721 = await ethers.getContractFactory("MERC721");
    const erc721 = await MERC721.deploy();
    await erc721.deployed();
    console.log(erc721.address);
    erc721Contract = erc721;
  });

  it("deploy BulkMint Contract", async function() {
    const BulkMint = await ethers.getContractFactory("BulkMint");
    const bulkMint = await BulkMint.deploy();
    await bulkMint.deployed();
    console.log(bulkMint.address);
    bulkMintContract = bulkMint;
  });
});

describe("Final", function() {
  it("bulkMintERC721 Func", async function() {
    const minterRole = await erc721Contract.MINTER_ROLE();
    console.log(minterRole);
    const grantRoleTrans = await erc721Contract.grantRole(minterRole, bulkMintContract.address);
    await grantRoleTrans.wait();
    const setTx = await bulkMintContract.bulkMintERC721(erc721Contract.address, 0, 150);
    await setTx.wait();
  });
});
