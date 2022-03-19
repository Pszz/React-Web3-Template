import Web3 from 'web3';
import type { Contract as IContractType } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';
import { IChainID } from '../define';

export interface IContractConstructor {
  abi: AbiItem;
  contractAddress: string;
  web3: Web3;
}

export default class Contract {
  protected account: string = '';
  protected chainID?: IChainID;
  protected web3: Web3 | null = null;
  protected contractAddress: string = '';
  protected contract: IContractType | null = null;
  protected abi?: AbiItem;

  constructor({ abi, web3, contractAddress }: IContractConstructor) {
    this.abi = abi;
    this.web3 = web3;
    this.contractAddress = contractAddress;
    this.contract = new this.web3.eth.Contract(abi, this.contractAddress);
  }

  changeContract(contractAddress: string, abi?: any) {
    if (!this.web3) {
      return new Error('not init web3');
    }

    this.contractAddress = contractAddress;
    this.contract = new this.web3.eth.Contract(
      abi || this.abi,
      contractAddress,
    );
  }

  change(chainID: IChainID, account: string) {
    if (account) {
      this.account = account;
    }
    if (chainID) {
      this.chainID = chainID;
    }
  }
}
