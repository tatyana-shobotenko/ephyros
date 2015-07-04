'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  hideMenu() {
    this.setState({
      isMenuOpen: false
    });
  }

  render() {
    return (
      <div className="header header_home">
        <div className="center-wrapper">
          <div className="header__logo">
            <Link to="/">
              <img src="/images/logo@2x.png" title="Ephyros" alt="Ephyros"/>
            </Link>
          </div>
          <a className="header__menu-btn" onClick={this.toggleMenu.bind(this)}><i className="icon-down"/></a>
          {/*
           <div class="lang-select">
           <div class="lang-select__current lang-select_eng"></div>
           </div>
           */}
          <ul className={'header__nav' + (this.state.isMenuOpen ? ' header__nav_opened' : '')}>
            <li><Link onClick={this.hideMenu.bind(this)} to="cases">Work</Link></li>
            <li><Link onClick={this.hideMenu.bind(this)} to="services">Services</Link></li>
            <li><Link onClick={this.hideMenu.bind(this)} to="team">Team</Link></li>
            <li><Link onClick={this.hideMenu.bind(this)} to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
