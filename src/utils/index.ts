import BigNumber from 'bignumber.js';

// 格式化数字千分位
export function toThousands(num: number | string) {
  const strs = (num || 0).toString().split('.');
  return strs[1] ? `${strs[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')}.${strs[1]}` : `${strs[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')}`;
}
// account 地址缩写
export function toOmitAccount(account: string) {
  return `${account?.substr(0, 6)}...${account?.substr(account?.length - 4, 4)}`;
}
// 去精度
export const fromWei = (value: BigNumber, decimals: number = 18) => {
  return new BigNumber(value).dividedBy(new BigNumber(10).pow(decimals));
};
// 加精度
export const toWei = (value: number, decimals: number = 18) => {
  return new BigNumber(value).multipliedBy(new BigNumber(10).pow(decimals));
};

export const toHex = (value: string | number) => {
  const str = parseInt(value as string).toString(16);
  return `0x${str.length > 1 ? str : `0${str}`}`;
};

export const toFixzero = (s: number | string, size: number) => {
  s = s.toString();
  if (s.length === size) return s;
  var dest = '';
  for (var i = 0; i < size - s.length; i++) {
    dest += '0';
  }
  return dest + s;
};

export const toTime = (value: string | number) => {
  const time = Number(value);
  const h = time / 3600; // 小时
  const m = (time % 3600) / 60; //分钟
  const s = (time % 3600) % 60;
  return [h, m, s].map((v) => toFixzero(parseInt(v.toString()), 2));
};
