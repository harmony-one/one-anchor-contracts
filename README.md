# Anchor Harmony Wrapping Contracts (`oneAnchor`)

`oneAnchor` is a set of Harmony-side contracts that wrap around Anchor’s UST deposit flow to be accessible from Harmony. It works alongside with `one-anchor-bot` to forward and automate any deposits and withdrawal requests being made on Harmony to the Terra blockchain.


## Contract List

### Core

- [Controller](./contracts/core/Controller.sol)
- [Router](./contracts/core/Router.sol)

### Operation

- [Operation](./contracts/operations/Operation.sol)
- [OperationACL](./contracts/operations/OperationACL.sol)
- [OperationFactory](./contracts/operations/OperationFactory.sol)
- [OperationStore](./contracts/operations/OperationStore.sol)

### Extension

- [ConversionPool](./contracts/extensions/ConversionPool.sol)
- [ExchangeRateFeeder](./contracts/extensions/ExchangeRateFeeder.sol)

## Setup

### deps

```bash
$ git clone https://github.com/harmony-one/one-anchor-contracts.git

$ cd one-anchor-contracts

$ yarn
```

### config

- add `local.config.ts` beside `hardhat.config.ts` with this template

```typescript
export const Networks = {
    harmony_testnet: {
      url: "https://api.s0.backup1.b.hmny.io/",
      accounts: [{PrivateKey1},{PrivateKey2}],
      chainId: 1666700000,
      live: true,
      saveDeployments: true,
      tags: ["staging"],
      gas: 2100000,
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
  };
```

### Commands

```bash
$ yarn compile      # compile project

$ yarn deploy-core --network harmony_testnet  # deploy 

```

## License

**MIT**


