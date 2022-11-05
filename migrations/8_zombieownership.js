var MyContract = artifacts.require("ZombieOwnership");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};