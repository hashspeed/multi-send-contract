const hre = require("hardhat");

async function ERC721Func() {
  const ERC712 = await hre.ethers.getContractFactory("MERC712");
  const erc721 = await ERC712.deploy();
  await erc721.deployed();
  return erc721.address;
}

async function ERC1155Func() {
  const ERC1155 = await hre.ethers.getContractFactory("MERC1155");
  const erc1155 = await ERC1155.deploy();
  await erc1155.deployed();
  return erc1155.address;
}

async function ERC20Func() {
  const ERC20 = await hre.ethers.getContractFactory("MERC20");
  const erc20 = await ERC20.deploy();
  await erc20.deployed();
  return erc20.address;
}

async function multiSendFunc() {
  const MultiSend = await hre.ethers.getContractFactory("MultiSend");
  const multiSend = await MultiSend.deploy();
  await multiSend.deployed();
  return multiSend.address;
}

async function main() {
  const multiSend = await multiSendFunc();
  console.log("multiSend deployed to:", multiSend);
  const erc721 = await ERC721Func();
  console.log("erc721 deployed to:", erc721);
  const erc1155 = await ERC1155Func();
  console.log("erc1155 deployed to:", erc1155);
  const erc20 = await ERC20Func();
  console.log("erc20 deployed to:", erc20);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
