require('node-jsx').install({extension: '.js', harmony: true});

var express = require("express");
var path = require("path");
var app = express();

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');


app.use("/", express.static(path.join(__dirname, "..", "public"), {}));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');


app.get("/*", function (req, res, next) {
  var router = Router.create({
    routes: routes,
    location: req.path,
    onAbort: function (redirect) {
      res.writeHead(303, {'Location': redirect.to});
      res.end();

    },
    onError: function (err) {
      console.log('Routing Error');
      console.log(err);
    }
  });

  router.run(function (Handler, state) {
    console.log(state);
    var html = React.renderToString(React.createFactory(Handler)({}));
    var notFound = state.routes[1].name == 'not-found';
    res.status(notFound ? 404 : 200);
    res.render('html', {
      appHtml: html,
      title: 'Ephyros new website',
      description: ''
    });
  });
});

app.use(function (req, res, next) {
  res.status(500);
  if (req.accepts('html')) {
    res.render('500', {url: req.url});
  }
});

var port = +(process.env.PORT || 3000);
app.listen(port, function () {
  console.log("Server listening on port " + port);
});