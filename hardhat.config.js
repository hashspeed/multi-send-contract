require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "maticTestNet",
  networks: {
    hardhat: {},
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

