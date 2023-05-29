import { Chain, Config, DEFAULT_SUPPORTED_CHAINS } from "@usedapp/core";

export const NUMB_FAUCET_LINK = "https://faucet-testnet.numblock.org/";
export const BNB_FAUCET_LINK = "https://testnet.bnbchain.org/faucet-smart";

export const NUMB_CHAIN: Chain = {
  chainId: 100,
  chainName: "NUMB Chain",
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: "0xd722174C25A980dA3c25Bd5780ADeA578dF5237A",
  getExplorerAddressLink: (address: string) => `https://testnet.numblock.org/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://testnet.numblock.org/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: "https://rpc-testnet.numblock.org",
  blockExplorerUrl: "https://testnet.numblock.org",
  nativeCurrency: {
    name: "NUMB",
    symbol: "NUMB",
    decimals: 18,
  },
};

const configCustomChain: Config = {
  readOnlyChainId: NUMB_CHAIN.chainId,
  readOnlyUrls: {
    [NUMB_CHAIN.chainId]: "https://rpc-testnet.numblock.org",
  },
  networks: [...DEFAULT_SUPPORTED_CHAINS, NUMB_CHAIN],
};

// IMPORTANT: Fill that object with your own data.

const config = {
  basename: "/",
  defaultPath: "/",
  DEFAULT_TOKEN_ID: 1,
  chainConfig: configCustomChain,
};

export default config;
