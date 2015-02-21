var React = require('react');
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

module.exports = (
  <Route name="app" path="/" handler={require("./Application")}>
    <Route name="contact" path="/contact" handler={require("./Contact")}/>
    <Route name="case" path="/case/:index" handler={require("./Case")}/>
    <Route name="cases" path="/case" handler={require("./Cases")}/>
    <DefaultRoute name="home" handler={require("./Home")}/>
    <NotFoundRoute name="not-found" handler={require("./NotFound")}/>
  </Route>
);
