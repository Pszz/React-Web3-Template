import Web3 from 'web3';
import { IChainID } from '../define';
import BoxContract from './box';

export const web3 = new Web3(Web3.givenProvider);

const Rpc = {
  box: new BoxContract(web3),
};

export const initConnect = (account?: string, chainID?: string | number) => {
  Object.values(Rpc).forEach((item) => {
    item?.change?.(chainID as IChainID, account!);
  });
};

export default Rpc;
