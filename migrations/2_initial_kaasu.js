const Kaasu = artifacts.require("Kaasu");

module.exports = function(deployer) {
  deployer.deploy(Kaasu, 'KAASU', 'KAS');
};
