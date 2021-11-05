import { utils } from "ethers";
import { network } from "hardhat";
import { isLocalNetwork } from "./utils";

export const GAS_PRICE = utils.parseUnits("50", "gwei");

let confirmation = 0;
if (!isLocalNetwork()) {
  confirmation = 2;
}

export const CONFIRMATION = confirmation;

export type Contracts = { [name: string]: string };
export const CONTRACTS = {
  harmony_testnet: {
    // uniswap
    UniRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    UniFactory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    // terra
    aUST: "0x3F68CdB166dE3E5e13b6c2081A16AED9140d8891",
    UST: "0x224e64ec1BDce3870a6a6c777eDd450454068FEC",
    // harmony
    DAI: "0x9F2f52c82Bed721149bC4BA5E3c90353B7166B26",
    USDT: "0x3021492E4570656333bF6A53A887FB0D6E309E33",
    BUSD: "0xc4860463c59d59a9afac9fde35dff9da363e8425",
    CrvUSTPool: "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
    CrvBUSDPool: "0x4807862AA8b2bF68830e4C8dc86D0e9A998e085a",
  },
} as { [network: string]: Contracts };
