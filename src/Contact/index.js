var React = require('react');
var Link = require('react-router').Link;
var BottomMenu  = require('../components/BottomMenu');

var Contact = React.createClass({
  getInitialState() {
    return {
      sent: false,
      name: '',
      phone: '',
      email: '',
      message: ''
    };
  },
  onSubmit(e) {
    e.preventDefault();
    this.setState({sent: true});
  },
  handleChange(field, e) {
    var partialState = {};
    partialState[field] = e.target.value;
    this.setState(partialState);
  },
  render() {
    var formContent;
    if (this.state.sent) {
      formContent = (
        <div className="c-form">
          <h3 className="colorful-header text-fill fail">Your message is sent</h3>

          <p>We will contact you soon!</p>
        </div>
      );
    } else {
      formContent = (
        <form
          className="c-form"
          method="post"
          onSubmit={this.onSubmit}
          >
          <h3 className="colorful-header text-fill">Hello! Let`s talk!</h3>

          <div className="form-row">
            <input
              type="text"
              className="input-text input-text_full"
              placeholder="Name"
              name="contact[name]"
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              />
          </div>
          <div className="form-row">
            <input
              type="tel"
              className="input-text input-text_full"
              placeholder="Phone Number"
              name="contact[phone]"
              value={this.state.phone}
              onChange={this.handleChange.bind(this, 'phone')}
              />
          </div>
          <div className="form-row">
            <input
              type="email"
              className="input-text input-text_full"
              placeholder="E-mail"
              name="contact[email]"
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')}
              />
          </div>
          <div className="form-row">
            <textarea
              className="textarea input-text_full"
              placeholder="Message"
              name="contact[message]"
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
              />
          </div>
          <div className="form-row">
            <button
              type="submit"
              className="button button_rainbow">
              Get a quote
            </button>
          </div>
        </form>
      );
    }

    return (
      <div>
        <div className="page-header">
          <div className="center-wrapper relative">
            <Link to="/team" className="page-header__nav page-header__nav_prev icon-left-arrow" />
            <span className="page-header__nav page-header__nav_next icon-right-arrow disabled"/>

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
              <div className="contacts-wrap__right">
                {formContent}
              </div>
            </div>
          </div>
        </div>
        <div className="c-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2544.0779678685026!2d30.463097678573615!3d50.38374508793719!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1403101591541"
            width="100%" height="100%" frameBorder="0" style={{border:0, pointerEvents: 'none'}}></iframe>
        </div>
        <BottomMenu/>
      </div>
    );
  }
});
module.exports = Contact;
