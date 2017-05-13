import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
    <div>
      <div className="global-wrapper">
        <Header />
        {props.children}

        <div className="push" />
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
