var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  getInitialState() {
    return {
      isMenuOpen: false
    }
  },
  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  },
  hideMenu() {
    this.setState({
      isMenuOpen: false
    })
  },
  render() {
    return (
      <div className="header header_home">
        <div className="center-wrapper">
          <div className="header__logo">
            <a href="/">
              <img src="/images/logo@2x.png" title="Ephyros" alt="Ephyros"/>
            </a>
          </div>
          <a className="header__menu-btn" onClick={this.toggleMenu}><i className="icon-down"/></a>
          {/*
           <div class="lang-select">
           <div class="lang-select__current lang-select_eng"></div>
           </div>
           */}
          <ul className={'header__nav'+ (this.state.isMenuOpen?' header__nav_opened':'')}>
            <li><Link onClick={this.hideMenu} to="cases">Work</Link></li>
            <li><Link onClick={this.hideMenu} to="/#presentation">Services</Link></li>
            <li><Link onClick={this.hideMenu} to="/#team">Team</Link></li>
            <li><Link onClick={this.hideMenu} to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});
module.exports = Header;