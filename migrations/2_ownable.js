var MyContract = artifacts.require("Ownable");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};