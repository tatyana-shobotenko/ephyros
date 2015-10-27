import React, {Component} from 'react';
import {RouteHandler} from 'react-router';

import Footer from './Footer';
import Header from './Header';

class Application extends Component {
  render() {
    return (
      <div>
        <div className="global-wrapper">
          <Header/>
          <RouteHandler />

          <div className="push"/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Application;
