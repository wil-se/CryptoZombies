var MyContract = artifacts.require("ZombieAttack");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};