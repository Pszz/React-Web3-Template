import { NetworkChain } from '@/web3/define';
import React, { useEffect, useState } from 'react';
import { INetWorkStateType, useSelector, useLocation } from 'umi';

export type IInjectAuthProps = {
  onClose?: () => void;
};
// 需要鉴权的路由
const AuthPages = ['/account/wallet'];

const InjectAuth: React.FC<IInjectAuthProps> = ({ onClose }) => {
  const [showDialog, toggle] = useState<boolean>(true);
  const { pathname } = useLocation();
  const { isConnected, chainID } = useSelector<any, INetWorkStateType>(
    (state) => state?.Network,
  );
  const hasAuth = AuthPages.some((v) => v === pathname);
  const handleClose = () => {
    location.replace('/');
    toggle(false);
  };
  // 无需校验权限
  if (!hasAuth || pathname === '/') {
    return null;
  }
  // 未安装MetaMask
  if (!window.ethereum) {
    // return <MetaMaskUnstall open={showDialog} onClose={handleClose} />;
    return <div>no install wallet.</div>;
  }
  // 未连接 MetaMask
  if (!isConnected || !NetworkChain[chainID!]) {
    // return <MetaMaskNotConnected open={showDialog} onClose={handleClose} />;
    return <div>no connect wallet.</div>
  }
  return null;
};

export default InjectAuth;
