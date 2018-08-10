//module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
 // networks: {
 //   development: {
 //     host: "127.0.0.1",
  //    port: 7545,
 //     network_id: "*" // Match any network id
  //  }
//  }
//};
  const HDWalletProvider = require("truffle-hdwallet-provider");
const memonic = "snake clip kite slice switch fatigue like scorpion exit never crop check"
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(memonic, "https://rinkeby.infura.io/7fbf3fd2735e438c94b12d2a71c01cbd")
      },
      network_id: 3
    }
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};