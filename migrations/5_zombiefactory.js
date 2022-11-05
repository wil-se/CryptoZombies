var MyContract = artifacts.require("ZombieFactory");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};