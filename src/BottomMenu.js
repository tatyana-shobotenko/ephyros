import React, {Component} from 'react';
import {Link} from 'react-router';

class BottomMenu extends Component {
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
}

export default BottomMenu;
