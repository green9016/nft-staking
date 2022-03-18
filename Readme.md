## compile

truffle compile

## prepare
- set you wallet mnemonic to "mnemonic" variable in truffle-config.js
- config your correct network provider for ethTestnet and bscTestnet

## deploy
truffle migrate --reset --network ethTestnet
truffle migrate --reset --network bscTestnet

## Transfer
truffle exec scripts/eth-bsc-transfer.js --network ethTestnet

## Listen
node scripts/eth-bsc-bridge.js

## Fetching balances
truffle exec scripts/eth-token-balance.js --network ethTestnet
truffle exec scripts/bsc-token-balance.js --network bscTestnet