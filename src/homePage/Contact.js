import React from 'react';

function Contact() {
  return (
    <div className="screen-epilogue">
      <div className="center-wrapper text-center">
        <img
          src="images/logo_blue@2x.png"
          title="Ephyros"
          alt="Ephyros"
          className="screen-epilogue__logo"
          width="166px"
          height="36px"
        />

        <h2 className="screen-title screen-title_dark screen-epilogue__title">HELLO@EPHYROS.COM</h2>
        <a
          href="mailto:hello@ephyros.com"
          className="button button_rainbow"
          onClick={() => { window.gae('mainpage', 'click', 'request_quote', 100); }}
        >Request a free quote</a>
      </div>
    </div>
  );
}

export default Contact;
