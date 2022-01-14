require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ganache");
require('dotenv').config();

module.exports = {
  solidity: "0.8.2",
  defaultNetwork: "maticTestNet",
  networks: {
    hardhat: {},
    ganache: {
      // gasLimit: 6000000000,
      defaultBalanceEther: 10,
      url: "HTTP://127.0.0.1:7545"
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
      accounts: [process.env.PRIVATE_KEY]
    },
    maticTestNet:{
      chainId:80001,
      url: "https://polygon-mumbai.g.alchemy.com/v2/4nAcRCaih85vrP44VgnEIaNrEPdfw70d",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

