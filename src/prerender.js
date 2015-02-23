var React = require('react');
var Router = require('react-router');
var routes = require('./routes');


function prerender(requestPath, cb) {

  var router = Router.create({
    routes: routes,
    location: requestPath,
    onAbort: function (redirect) {
      cb({redirect: redirect.to});
    },
    onError: function (err) {
      cb(err);
    }
  });

  router.run(function (Handler, state) {
    var virtualDom = React.createFactory(Handler)({});
    var html = React.renderToString(virtualDom);
    cb(null, html);
  });
}

module.exports = prerender;