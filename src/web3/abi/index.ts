import { AbiItem } from 'web3-utils';

import { default as BoxRaw } from './box.json';
import { default as ERC20Raw } from './box.json';

const abiType = (abi: unknown): AbiItem => abi as AbiItem;

export const BoxAbi = abiType(BoxRaw);
export const ERC20Abi = abiType(ERC20Raw);

export default {
  BoxAbi,
  ERC20Abi
};
