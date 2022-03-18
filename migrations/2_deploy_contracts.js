const NftStaking = artifacts.require('NftStake');
const AssetsInventory = artifacts.require('AssetsInventoryMock');
const ERC20WithOperators = artifacts.require('ERC20WithOperatorsMock');
const { DefaultNFMaskLength } = require('@animoca/ethereum-contracts-assets_inventory').constants;

const RewardsTokenInitialBalance = web3.utils.toWei(100000);
const CycleLengthInSeconds = 86400;
const PeriodLengthInCycles = 7;
const Rarities = {
  Common: 1,
  Epic: 2,
  Legendary: 3,
  Apex: 4,
};
const RarityWeights = [
  {
      rarity: Rarities.Common,
      weight: 1,
  },
  {
      rarity: Rarities.Epic,
      weight: 10,
  },
  {
      rarity: Rarities.Legendary,
      weight: 100,
  },
  {
      rarity: Rarities.Apex,
      weight: 500,
  },
];

module.exports = async function (deployer, network, addresses) {
  const creator = addresses[0];

  await deployer.deploy(AssetsInventory, DefaultNFMaskLength);
  const nftContract = await AssetsInventory.deployed();
  await deployer.deploy(ERC20WithOperators, RewardsTokenInitialBalance);
  const rewardsToken = await ERC20WithOperators.deployed();
  await deployer.deploy(NftStaking, 
    CycleLengthInSeconds,
    PeriodLengthInCycles,
    nftContract.address,
    rewardsToken.address,
    RarityWeights.map((x) => x.rarity),
    RarityWeights.map((x) => x.weight),
  );
  const stakingContract = await NftStaking.deployed();

  await rewardsToken.approve(stakingContract.address, RewardsTokenInitialBalance);

  const stakerTokens = {};
  const rarities = RarityWeights.map((item) => item.rarity);

  for (const staker of stakers) {
      const tokens = [];

      for (const rarity of rarities) {
          const tokenId = TokenHelper.makeTokenId(rarity, TokenHelper.Types.Car);
          tokens.push(tokenId);
          await this.nftContract.mintNonFungible(staker, tokenId, {from: creator});
      }

      stakerTokens[staker] = tokens;
  }

  if(network === 'ethTestnet') {
    
  }
  else if(network === 'bscTestnet') {
    
  }
  else {
    
  }
};
