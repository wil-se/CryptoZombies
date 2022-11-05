const HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Mainnet address and Token
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/")
      },
      network_id: "1"
    },
    // Configuration for goerli network
    goerli: {
      // Special function to setup the provider
      networkCheckTimeout: 10000,
      provider: function () {
        // Setting the provider with the Infura Goerli address and Token
        return new HDWalletProvider(mnemonic, "https://goerli.infura.io/v3/")
      },
      // Network id is 4 for Goerli
      network_id: 5
    },
    sepolia: {
      // Special function to setup the provider
      networkCheckTimeout: 10000,
      provider: function () {
        // Setting the provider with the Infura Goerli address and Token
        return new HDWalletProvider(mnemonic, "https://sepolia.infura.io/v3/")
      },
      // Network id is 4 for Goerli
      network_id: 11155111
    }
  },
  compilers: {
    solc: {
      version: "^0.6.0"
    }
  },
  db: {
    enabled: false,
    host: "127.0.0.1"
  }
};
