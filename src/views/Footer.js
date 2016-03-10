import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_right" />
      <div className="center-wrapper">
        <div className="gcontainer">
          <div className="footer__copyrights">
            <div className="footer-inner">
              <div className="footer__logo" />
              <div className="footer__copyrights-text">
                <div className="footer__opsway-text footer__contacts__title">Member of</div>
                <a href="http://opsway.com/" ><div className="footer__opsway"></div></a>
                <div>Copyright © 2013-2015 Ephyros</div>
                <div>All Rights Reserved</div>
              </div>
            </div>
          </div>
          <div className="footer__contacts">
            <div className="gcontainer">
              <div className="footer__contacts-col">
                <div className="footer__contacts-inner">
                  <div className="footer__contacts__title">contact</div>
                  <div>
                    <div className="footer__contacts-row">hello@ephyros.com</div>
                    <div className="footer__contacts-row">Phone: <span className="tel-span">+380 93 58-66-136</span>
                    </div>
                    <div className="footer__contacts-row">Skype: ephyros</div>
                  </div>
                </div>
              </div>
              <div className="footer__contacts-col">
                <div className="footer__contacts-inner">
                  <div className="footer__contacts__title">address</div>
                  <div>
                    18 Vasylia Lypkivskoho str., <br />
                    Kyiv, Ukraine, 03035
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

export default Footer;
