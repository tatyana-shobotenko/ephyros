import React, { Component } from 'react';
import Link from 'router1-react/lib/Link';
import BottomMenu from './../views/BottomMenu';
import request from 'superagent';

import Layout from './../views/Layout';

class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sent: props.sent,
      inProgress: false,
      name: '',
      phone: '',
      email: '',
      message: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.state.inProgress) {
      request.post('/-/contact', {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        message: this.state.message,
      }).end((err) => {
        this.setState({ sent: !err, inProgress: false });
      });
    }
    this.setState({ inProgress: true });
  }

  handleChange(field, e) {
    const partialState = {};
    partialState[field] = e.target.value;
    this.setState(partialState);
  }

  render() {
    let formContent;
    if (this.state.sent) {
      formContent = (
        <div className="c-form">
          <h3 className="colorful-header text-fill">Your message is sent</h3>

          <p>We will contact you soon!</p>
        </div>
      );
    } else {
      formContent = (
        <form
          className="c-form"
          method="post"
          onSubmit={this.onSubmit.bind(this)}
        >
          <h3 className="colorful-header text-fill">Hello! Let`s talk!</h3>

          <div className="form-row">
            <input
              type="text"
              className="input-text input-text_full"
              placeholder="Name"
              name="contact[name]"
              value={this.state.name}
              required="required"
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
              required="required"
              onChange={this.handleChange.bind(this, 'email')}
            />
          </div>
          <div className="form-row">
            <textarea
              className="textarea input-text_full"
              placeholder="Message"
              name="contact[message]"
              value={this.state.message}
              required="required"
              onChange={this.handleChange.bind(this, 'message')}
            />
          </div>
          <div className="form-row">
            <button
              type="submit"
              className="button button_rainbow"
              onClick={() => {window.gae('contact', 'click', 'get_quote', 100);}}
            >
              {this.state.inProgress ? 'Processing…' : 'Get a quote'}
            </button>
          </div>
        </form>
      );
    }

    return (
      <Layout>
        <div className="page-header">
          <div className="center-wrapper relative">
            <Link route="team" className="page-header__nav page-header__nav_prev icon-left-arrow" />
            <span className="page-header__nav page-header__nav_next icon-right-arrow disabled" />

            <div className="page-header__title">Contact</div>
          </div>
        </div>
        <div className="contacts-wrap">
          <div className="contacts-wrap__right-back" />
          <div className="center-wrapper">
            <div className="gcontainer">
              <div className="contacts-wrap__left">
                <div className="contacts-box">
                  <div className="contacts-box__title">contact</div>
                  <div>
                    <div>hello@ephyros.com</div>
                    <div>Phone: <span className="tel-span">+380 93 58-66-136</span>
                    </div>
                    <div>Skype: ephyros</div>
                  </div>
                  <div className="contacts-box__title">address</div>
                  <div>
                    18 Vasylia Lypkivskoho str., <br />
                    Kyiv, Ukraine, 03035
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
          {/*
           <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2544.026958261552!2d30.462808!3d50.384696000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8e23b7e70c7%3A0xd32a1f3107ace198!2sMykhaila+Lomonosova+St%2C+54%2C+Kyiv!5e0!3m2!1sen!2sua!4v1427410249317"
           width="100%" height="100%" frameBorder="0" style={{border: 0}}></iframe>
           */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3794374087856!2d30.48423889999998!3d50.43403270000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ceeb07b5019d%3A0x2c326dd6607b1fc!2sVasylia+Lypkivskoho+St%2C+18%2C+Kyiv%2C+03035!5e0!3m2!1sen!2sua!4v1441030335180"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
          />
        </div>
        <BottomMenu />
      </Layout>
    );
  }
}

Contact.propTypes = {
  sent: React.PropTypes.bool,
};

export default Contact;
