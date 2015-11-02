import React, {Component} from 'react';

import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="global-wrapper">
          <Header/>
          {this.props.children}

          <div className="push"/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
