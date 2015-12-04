import React from 'react';
import Link from 'router1/lib/Link';

function BottomMenu() {
  return (
    <div className="center-wrapper">
      <div className="bottom-nav gcontainer">
        <Link route="cases" activeClassName="active" className="bottom-nav__item">Work</Link>
        <Link route="services" activeClassName="active" className="bottom-nav__item">Services</Link>
        <Link route="team" activeClassName="active" className="bottom-nav__item">Team</Link>
        <Link route="contact" activeClassName="active" className="bottom-nav__item">Contact</Link>
      </div>
    </div>
  );
}

export default BottomMenu;
