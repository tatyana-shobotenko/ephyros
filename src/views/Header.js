import React, { Component } from 'react';
import { Link } from 'router1-react';
import cx from 'classnames';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  hideMenu() {
    this.setState({
      isMenuOpen: false,
    });
  }

  render() {
    return (
      <div className="header header_home">
        <div className="center-wrapper">
          <div className="header__logo">
            <Link route="home">
              <img
                src="/images/logo-space2@2x.png"
                title="Ephyros"
                alt="Ephyros"
              />
            </Link>
          </div>
          <div className="opsway-text">
            <a
              href="http://opsway.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Member of <span className="ops-title">OpsWay</span>
            </a>
          </div>
          <button
            className="header__menu-btn"
            onClick={this.toggleMenu.bind(this)}
          >
            <i className="icon-down" />
          </button>
          {/*
           <div class="lang-select">
           <div class="lang-select__current lang-select_eng"></div>
           </div>
           */}
          <ul
            className={cx('header__nav', {
              header__nav_opened: this.state.isMenuOpen,
            })}
          >
            <li>
              <Link route="cases">Work</Link>
            </li>
            <li>
              <Link route="services">Services</Link>
            </li>
            <li>
              <Link route="team">Team</Link>
            </li>
            <li>
              <Link route="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
