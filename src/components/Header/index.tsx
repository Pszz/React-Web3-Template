import { useWalletConnection } from '@/web3/hooks';
import React from 'react';
import styles from './index.less';

export type IHeaderProps = {};

const Header: React.FC<IHeaderProps> = ({}) => {
  const { connect } = useWalletConnection();
  return (
    <div className={styles['header']}>
      Header
      <div
        style={{ border: '1px solid red', width: 200 }}
        onClick={() => {
          connect('MetaMask');
        }}
      >
        Connect
      </div>
    </div>
  );
};

export default Header;
