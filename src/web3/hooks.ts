import Web3 from 'web3';
import { WalletNames, Wallets } from './wallets';
import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'umi';

export interface IEthereumNodeItem {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored.
}

export const useWalletConnection = () => {
  const dispatch = useDispatch();
  const { activate, deactivate } = useWeb3React();
  return {
    connect: (name: WalletNames) => {
      return activate(Wallets[name]()).then(
        () => {
          console.log('Connect:', name);
        },
        (err) => {
          console.error('connect err:', err);
          dispatch({
            type: 'Network/setNetwork',
            payload: {
              walletName: '',
              isConnected: false,
            },
          });
          throw err;
        },
      );
    },
    disconnect: () => {
      deactivate();
      dispatch({
        type: 'Network/setNetwork',
        payload: {
          walletName: '',
          isConnected: false,
        },
      });
    },
  };
};
export const switchNetwork = async (config: IEthereumNodeItem) => {
  const provider = Web3.givenProvider;

  try {
    return await provider
      ?.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: config.chainId }],
      })
      .then((res: any) => {
        console.log('switchNetwork', res);
      });
  } catch (error: any) {
    if (error.code === 4902) {
      try {
        return await provider
          .request({
            method: 'wallet_addEthereumChain',
            params: [config],
          })
          .then((res: any) => {
            console.log('switchNetwork success', res);
          });
      } catch (addError) {}
    }
  }
};
