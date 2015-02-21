var React = require('react');
var Footer = require('./../Footer');
var Header = require('./../Header');
var Cases = require('./Cases');
var Presentation = require('./Presentation');
var Team = require('./Team');
var Contact = require('./Contact');


module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="global-wrapper">
          <Header/>

          <div className="screen-intro-back"/>
          <div className="screen-intro">
            <div className="center-wrapper">
              <div className="screen-intro__content">
                <h1 className="screen-intro__title">We create rocking
                  web applications
                  for startups</h1>

                <p className="screen-intro__subtitle">
                  At Ephyros we help ambitious clients
                  to bring powerful ideas to life
                </p>

                <div className="button-group">
                  <a href="#cases" className="button button-group__item">Services</a>
                  <a href="#presentation" className="button button-group__item">Presentation</a>
                </div>
              </div>
            </div>
            <a className="scroll-btn scroll-btn_before-cases" href="#cases">
              <i className="icon-down"/>
            </a>
          </div>
          <a name="cases"></a>
          <Cases/>
          <a name="presentation"></a>
          <Presentation/>
          <a name="team"></a>
          <Team/>
          <a name="contact"></a>
          <Contact/>

          <div className="push"/>
        </div>
        <Footer/>
      </div>
    );
  }
});