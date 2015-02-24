var React = require('react');
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

module.exports = (
  <Route name="app" path="/" handler={require("./Application")}>
    <Route name="contact" path="/contact" handler={require("./Contact")}/>
    <Route name="case" path="/case/:slug" handler={require("./Case")}/>
    <Redirect from="/case/" to="/case"/>
    <Route name="cases" path="/case" handler={require("./Cases")}/>
    <DefaultRoute handler={require("./Home")}/>
    <NotFoundRoute handler={require("./NotFound")}/>
  </Route>
);
