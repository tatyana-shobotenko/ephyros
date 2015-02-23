var express = require("express");
var path = require("path");
var app = express();

module.exports = function (options) {

  var prerender;
  if (options.prerender) {
    prerender = require('../build/prerender/main');
  } else {
    prerender = function (requestPath, cb) {
      cb();
    }
  }

  // load bundle information from stats
  var stats = require("../build/stats.json");

  var publicPath = stats.publicPath;

  var STYLE_URL = options.separateStylesheet && (publicPath + "main.css?" + stats.hash);
  var SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.main)[0];
  var IE_SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.ie)[0];
  //var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];


  // serve the static assets
  app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
    maxAge: "200d" // We can cache them as they include hashes
  }));
  app.use("/", express.static(path.join(__dirname, "..", "public"), {}));

  app.set('views', __dirname + '/templates');
  app.set('view engine', 'ejs');


  //app.set('etag fn', (
  //  function (etag) {
  //    return function (html, encoding) {
  //      etag(html.replace(/\bdata-(?:reactid|react-checksum)="[^"]*"/g, ''), encoding);
  //    }
  //  }(app.get('etag fn'))
  //));


  app.get("/*", function (req, res, next) {
    function sendHtml(error, html) {
      if (error) {
        if (error.redirect) {
          res.writeHead(303, {'Location': error.redirect});
          res.end();
        } else {
          res.status(500);
          res.render('500', {url: req.url});
        }
      } else {
        var notFound = /\bdata-not-found\b/.test(html);
        res.status(notFound ? 404 : 200);
        res.render('html', {
          appHtml: html,
          title: 'Ephyros new website',
          description: '',
          scriptsUrl: SCRIPT_URL,
          ieScriptsUrl: IE_SCRIPT_URL,
          stylesUrl: STYLE_URL
        });
      }
    }

    prerender(req.path, sendHtml);

  });

  var port = +(process.env.PORT || options.defaultPort || 8080);
  app.listen(port, function () {
    console.log("Server listening on port " + port);
  });
};
