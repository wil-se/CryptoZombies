var MyContract = artifacts.require("ZombieFeeding");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};