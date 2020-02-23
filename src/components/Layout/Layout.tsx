import React from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
};


Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
