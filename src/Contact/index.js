var React = require('react');

var Contact = React.createClass({
  getInitialState() {
    return {sent: false};
  },
  click() {
    this.setState({sent: true});
  },
  render() {
    var formContent;
    if (this.state.sent) {
      formContent = (<div className="contacts-wrap__right">
        <div className="c-form">
          <h3 className="colorful-header text-fill fail">Your message is sent</h3>

          <p>We will contact you soon!</p>
        </div>
      </div>);
    } else {
      formContent = (<div className="contacts-wrap__right">
        <div className="c-form">
          <h3 className="colorful-header text-fill">Hello! Let`s talk!</h3>

          <div className="form-row">
            <input type="text" className="input-text input-text_full" placeholder="Name"/>
          </div>
          <div className="form-row">
            <input type="tel" className="input-text input-text_full" placeholder="Phone Number"/>
          </div>
          <div className="form-row">
            <input type="email" className="input-text input-text_full" placeholder="E-mail"/>
          </div>
          <div className="form-row">
            <textarea className="textarea input-text_full" placeholder="Message"/>
          </div>
          <div className="form-row">
            <button type="submit" className="button button_rainbow" onClick={this.click}>Get a quote</button>
          </div>
        </div>
      </div>);
    }

    return (
      <div>
        <div className="page-header">
          <div className="center-wrapper relative">
            <a href="/" className="page-header__nav page-header__nav_prev icon-left-arrow"/>
            <a href="/" className="page-header__nav page-header__nav_next icon-right-arrow disabled"/>

            <div className="page-header__title">Contact</div>
          </div>
        </div>
        <div className="contacts-wrap">
          <div className="contacts-wrap__right-back"/>
          <div className="center-wrapper">
            <div className="gcontainer">
              <div className="contacts-wrap__left">
                <div className="contacts-box">
                  <div className="contacts-box__title">contact</div>
                  <div>
                    <div>pm@ephyros.com</div>
                    <div>Phone: <span className="tel-span">+380 93 58-66-136</span>
                    </div>
                    <div>Skype: darkfn</div>
                  </div>
                  <div className="contacts-box__title">address</div>
                  <div>
                    08097, ul. Lomonosova 54,<br />
                    office 149, Kyiv
                  </div>
                </div>
              </div>
              {formContent}
            </div>
          </div>
        </div>
        <div className="c-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2544.0779678685026!2d30.463097678573615!3d50.38374508793719!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1403101591541"
            width="100%" height="100%" frameborder="0" style={{border:0, pointerEvents: 'none'}}></iframe>
        </div>
        <div className="center-wrapper">
          <div className="bottom-nav gcontainer">
            <a href="/cases" className="bottom-nav__item">Work</a>
            <a href="/services" className="bottom-nav__item">Services</a>
            <a href="/team" className="bottom-nav__item">Team</a>
            <a href="/contact" className="bottom-nav__item active">Contact</a>
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Contact;
