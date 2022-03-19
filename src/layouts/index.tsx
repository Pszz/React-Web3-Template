import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';

// import InjectAuth from './components/InjectAuth';
import InjectWeb3 from './components/InjectWeb3';

import { Web3ReactProvider } from '@web3-react/core';

// import { ThemeProvider } from '@material-ui/core/styles';
// import { initConnect } from '@/web3/rpc';

const LayoutBody: React.FC<ILayoutProps> = ({ children, location }) => {
  // const { pathname } = location;

  // if (pathname === '/') {
  //   return <section>{children}</section>;
  // }

  // if (pathname === '/ido') {
  //   return <Redirect to="/" />;
  // }

  return (
    <section className="layout">
      <Header />
      <section>{children}</section>
      {/* <Footer /> */}
    </section>
  );
};
interface ILayoutProps {
  children: React.ReactNode;
  location: Location;
}
const Layout: React.FC<ILayoutProps> = (props) => {
  // logs
  const getLibrary = (provider: any, connector: any) => {
    console.log('getLibrary-->>', provider, connector);
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <InjectWeb3 />
      {/* <ThemeProvider theme={defaultTheme}> */}
      <LayoutBody {...props} />
      {/* <InjectAuth /> */}
      <ToastContainer />
      {/* </ThemeProvider> */}
    </Web3ReactProvider>
  );
};

export default Layout;
