var MyContract = artifacts.require("ZombieHelper");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};