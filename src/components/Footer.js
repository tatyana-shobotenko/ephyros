var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="footer">
        <div className="footer_right"/>
        <div className="center-wrapper">
          <div className="gcontainer">
            <div className="footer__copyrights">
              <div className="footer-inner">
                <div className="footer__logo"/>
                <div className="footer__copyrights-text">
                  <div>Copyright © 2013-2014 Ephyros.</div>
                  <div>All Rights Reserved.</div>
                </div>
              </div>
            </div>
            <div className="footer__contacts">
              <div className="gcontainer">
                <div className="footer__contacts-col">
                  <div className="footer__contacts-inner">
                    <div className="footer__contacts__title">contact</div>
                    <div>
                      <div className="footer__contacts-row">pm@ephyros.com</div>
                      <div className="footer__contacts-row">Phone: <span className="tel-span">+380 93 58-66-136</span>
                      </div>
                      <div className="footer__contacts-row">Skype: darkfn</div>
                    </div>
                  </div>
                </div>
                <div className="footer__contacts-col">
                  <div className="footer__contacts-inner">
                    <div className="footer__contacts__title">address</div>
                    <div>
                      08097, ul. Lomonosova 54,<br />
                      office 149, Kyiv
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});