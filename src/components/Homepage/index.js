var React = require('react');
var Footer = require('./../Footer');
var Header = require('./../Header');
var Cases = require('./Cases');
var Presentation = require('./Presentation');
var Team = require('./Team');
var Contact = require('./Contact');
var Intro = require('./Intro');


module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="global-wrapper">
          <Header/>
          <Intro/>
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