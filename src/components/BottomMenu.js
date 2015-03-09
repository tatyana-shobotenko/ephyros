var React = require('react');
var Link = require('react-router').Link;

var BottomMenu = React.createClass({
  render() {
    return (
      <div className="center-wrapper">
        <div className="bottom-nav gcontainer">
          <Link to="cases" activeClassName="active" className="bottom-nav__item">Work</Link>
          <Link to="services" activeClassName="active" className="bottom-nav__item">Services</Link>
          <Link to="team" activeClassName="active" className="bottom-nav__item">Team</Link>
          <Link to="contact" activeClassName="active" className="bottom-nav__item">Contact</Link>
        </div>
      </div>
    );
  }
});
module.exports = BottomMenu;
