var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render: function () {
    return (
      <div className="header header_home">
        <div className="center-wrapper">
          <div className="header__logo">
            <a href="/">
              <img src="/images/logo@2x.png" title="Ephyros" alt="Ephyros"/>
            </a>
          </div>
          <a className="header__menu-btn"><i className="icon-down"/></a>
          {/*
           <div class="lang-select">
           <div class="lang-select__current lang-select_eng"></div>
           </div>
           */}
          <ul className="header__nav">
            <li><Link to="/#cases">Work</Link></li>
            <li><Link to="/#presentation">Services</Link></li>
            <li><Link to="/#team">Team</Link></li>
            <li><Link to="contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});
module.exports = Header;