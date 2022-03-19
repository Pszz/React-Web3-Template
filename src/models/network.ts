import { IChainID } from '@/web3/define';
import { Reducer } from 'react';

export interface INetWorkStateType {
  walletName: string;
  isConnected: boolean;
  chainID?: IChainID;
  account?: string;
}

export interface INetWorkReducersType {
  setNetwork: Reducer<
    INetWorkStateType,
    { type: string; payload: INetWorkStateType }
  >;
}
export interface INetworkModelType {
  namespace: 'Network';
  state: INetWorkStateType;
  reducers: INetWorkReducersType;
}

const NetworkModel: INetworkModelType = {
  namespace: 'Network',

  state: {
    walletName: '',
    isConnected: false,
    chainID: undefined,
    account: '',
  },

  reducers: {
    setNetwork(state, { type, payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

export default NetworkModel;
