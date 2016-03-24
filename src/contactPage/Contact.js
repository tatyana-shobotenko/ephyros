import React, { Component } from 'react';
import Link from 'router1-react/lib/Link';
import request from 'superagent';
import Layout from './../views/Layout';
import BottomMenu from './../views/BottomMenu';
import Map from './Map';

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
          <Map point={{ lat: 50.433889, lng: 30.484003 }} zoom={16} />
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
