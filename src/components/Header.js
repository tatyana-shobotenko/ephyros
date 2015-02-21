var React = require('react');

module.exports = React.createClass({
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
            <li><a href="#cases">Work</a></li>
            <li><a href="#presentation">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    );
  }
});