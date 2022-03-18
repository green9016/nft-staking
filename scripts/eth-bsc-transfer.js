const BridgeEth = artifacts.require('./Bridge.sol');
const UNFI = artifacts.require('./UNFI.sol');

module.exports = async done => {
  const accounts = await web3.eth.getAccounts();
  const bridgeEth = await BridgeEth.deployed();
  const tokenUnfi = await UNFI.deployed();
  const nonce = (await web3.eth.getTransactionCount(accounts[0], 'latest')) + 1;
  const amount = 1;
  console.log("start burning...", accounts[0]);
  await bridgeEth.burn(accounts[0], amount, nonce, tokenUnfi.address);
  console.log("done");
  done();
}
