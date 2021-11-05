import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";
import "solidity-coverage";

import { Networks } from "./local.config";

export default {
  default: "hardhat",
  networks: {
    hardhat: {
      mining: {
        auto: true,
        interval: 1000,
      },
    },
    local: {
      url: "http://localhost:8545",
    },
    ...Networks,
  },
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
  },
  gasReporter: {
    currency: "USD",
  },
};
