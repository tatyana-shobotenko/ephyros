var React = require("react");
var RouteHandler = require("react-router").RouteHandler;

var Footer = require('./Footer');
var Header = require('./Header');

var Application = React.createClass({
  render() {
    return (
      <div>
        <div className="global-wrapper">
          <Header/>
          <RouteHandler />

          <div className="push"/>
        </div>
        <Footer/>
      </div>
    );
  }
});
module.exports = Application;
