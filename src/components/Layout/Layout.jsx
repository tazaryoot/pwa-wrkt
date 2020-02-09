import React from 'react';
import PropTypes from 'prop-types';

import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
};


Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
