require('node-jsx').install({extension: '.js', harmony: true});

var express = require("express");
var path = require("path");
var app = express();

var React = require('react');
var App = require('./components/Homepage');


app.use("/", express.static(path.join(__dirname, "..", "public"), {}));
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');

app.get("/", function (req, res, next) {
  var html = React.renderToString(React.createFactory(App)({}));

  res.render('html', {
    appHtml: html,
    title: 'Ephyros new website',
    description: ''
  });
});

app.use(function (req, res, next) {
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', {url: req.url});
  }
});

var port = +(process.env.PORT || 3000);
app.listen(port, function () {
  console.log("Server listening on port " + port);
});