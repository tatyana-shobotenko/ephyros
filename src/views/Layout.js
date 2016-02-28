import React from 'react';

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
  children: React.PropTypes.any.isRequired,
};

export default Layout;
