import React, { useEffect } from 'react';
import { useDispatch } from 'umi';
import { initConnect } from '@/web3/rpc';
import { useWeb3React } from '@web3-react/core';
import { useWalletConnection } from '@/web3/hooks';

const InjectComponets: React.FC = () => {
  const { connect } = useWalletConnection();
  // Web3React唯一监听入口
  const { chainId, account, library } = useWeb3React();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      connect('MetaMask');
    }, 200);
  }, []);

  useEffect(() => {
    console.log('-------------------------------', account, chainId);
    if (account && chainId) {
      initConnect(account, chainId);
      dispatch({
        type: 'Network/setNetwork',
        payload: {
          isConnected: true,
          account: account,
          chainID: chainId,
        },
      });
    }
    library?.provider?.on('accountsChanged', (accounts: string[]) => {
      if (account !== accounts[0]) {
        location.reload();
      }
    });
    library?.provider?.on('chainChanged', (chains: string[]) => {
      location.reload();
    });
  }, [chainId, account, library]);

  return <></>;
};
export default InjectComponets;
