export { default as EthereumNodes } from './eth_nodes.json';
export const TokenRegExp = /^0x[a-z0-9]{40}$/i;
export const Tokens = {
  1: {
    // Main Chain
    BOX: '0xe0dC1e0FcC1F39fd8eAD7106d57B01334F95347F',
  },
  4: {
    // Rinkeby Test Chain
    // BOX: '0xb6e9430c72dfcd56ee3f3c3115f0696c81fefcd9',
    // BOX: '0x3322C8D6dD6E32bDC0C9B22b9132d7E67483e460',
    BOX: '0xeB19D60144018d2F7dD677cf2653aDB4AFB87476',
  },
};
export const defChain = 4;
export type IChainID = keyof typeof Tokens;

export enum NetworkChain {
  Rinkeby = 4,
  Ethereum = 1,
  null = 0,
}
