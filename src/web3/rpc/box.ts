import Web3 from 'web3';
import BigNumber from 'bignumber.js';
import { BoxAbi } from '../abi';
import Contract from './contract';
import { IChainID, Tokens } from '../define';

export default class BoxContract extends Contract {
  constructor(web3: Web3, chainID?: IChainID) {
    super({
      web3,
      contractAddress: Tokens[chainID!]?.BOX || '',
      abi: BoxAbi,
    });
  }

  async mint(buyNumber: number, price: number) {
    return new Promise((resolve, reject) => {
      this.contract?.methods
        .mint(buyNumber)
        .send({
          from: this.account,
          value: new BigNumber(price * buyNumber * 1e18).toString(),
        })
        .on('transactionHash', (res: string) => {
          resolve(res);
        })
        .on('error', (error: any) => {
          reject(error);
        });
    });
  }

  async getTimestamp(): Promise<number> {
    try {
      console.log('getTimestamp', this.web3, this.account);
      return await this.contract?.methods.REVEAL_TIMESTAMP().call();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getSaleStart(): Promise<number> {
    try {
      return await this.contract?.methods.SALE_START().call();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getSaleIsActive(): Promise<boolean> {
    try {
      return await this.contract?.methods.saleIsActive().call();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async totalSupply(): Promise<number> {
    try {
      return await this.contract?.methods.totalSupply().call();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async price(): Promise<number> {
    try {
      return await this.contract?.methods.price().call();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async maxSupply(): Promise<number> {
    try {
      return await this.contract?.methods.MAX_SUPPLY().call();
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
