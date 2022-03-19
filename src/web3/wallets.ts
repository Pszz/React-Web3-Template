import { InjectedConnector } from '@web3-react/injected-connector';
import { NetworkChain } from './define';

export const Wallets = {
  MetaMask: () => {
    return new InjectedConnector({
      supportedChainIds: [NetworkChain.Ethereum, NetworkChain.Rinkeby],
    });
  },
};
export type WalletNames = keyof typeof Wallets;
