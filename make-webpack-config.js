var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function loadersByExtension(obj) {

  function extsToRegExp(exts) {
    return new RegExp("\\.(" + exts.map(function (ext) {
      return ext.replace(/\./g, "\\.") + "(\\?.*)?";
    }).join("|") + ")$");
  }

  var loaders = [];
  var extensions = Object.keys(obj).map(function (key) {
    return key.split("|");
  }).reduce(function (arr, a) {
    arr.push.apply(arr, a);
    return arr;
  }, []);
  Object.keys(obj).forEach(function (key) {
    var exts = key.split("|");
    var value = obj[key];
    var entry = {
      extensions: exts,
      test: extsToRegExp(exts),
      loaders: value
    };
    if (Array.isArray(value)) {
      entry.loaders = value;
    } else if (typeof value === "string") {
      entry.loader = value;
    } else {
      Object.keys(value).forEach(function (key) {
        entry[key] = value[key];
      });
    }
    loaders.push(entry);
  });
  return loaders;
}


module.exports = function (options) {


  var entry;

  if (options.prerender) {
    entry = {
      main: "./src/prerender"
    };
  } else {
    entry = {
      main: "./src/client",
      ie: "./src/ie"
    };
  }

  var loaders = {
    "coffee": "coffee-redux-loader",
    "json": "json-loader",
    // "js": {
    // loader: "6to5-loader",
    // include: path.join(__dirname, "app")
    // },
    "json5": "json5-loader",
    "txt": "raw-loader",
    "png|jpg|jpeg|gif|svg": "url-loader?limit=10000",
    "woff|woff2": "url-loader?limit=100000",
    "ttf|eot": "file-loader",
    "wav|mp3": "file-loader",
    "html": "html-loader",
    "md|markdown": ["html-loader", "markdown-loader"]
  };
  var stylesheetLoaders = {
    "css": "css-loader",
    "less": "css-loader!less-loader",
    "styl": "css-loader!stylus-loader",
    "scss|sass": "css-loader!sass-loader"
  };
  var alias = {};
  var aliasLoader = {};
  var externals = [];
  var modulesDirectories = ["web_modules", "node_modules"];
  var extensions = ["", ".web.js", ".js", ".jsx"];
  var root = path.join(__dirname, "app");
  var publicPath = options.devServer ?
    "http://localhost:2992/_assets/" :
    "/_assets/";
  var output = {
    path: path.join(__dirname, "build", options.prerender ? "prerender" : "public"),
    publicPath: publicPath,
    filename: "[name].js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
    chunkFilename: (options.devServer ? "[id].js" : "[name].js") + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
    sourceMapFilename: "debugging/[file].map",
    libraryTarget: options.prerender ? "commonjs2" : undefined,
    pathinfo: options.debug
  };
  var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/
  ];
  var plugins = [
    function () {
      if (!options.prerender) {
        this.plugin("done", function (stats) {
          var jsonStats = stats.toJson({
            chunkModules: true,
            exclude: excludeFromStats
          });
          jsonStats.publicPath = publicPath;
          require("fs").writeFileSync(path.join(__dirname, "build", "stats.json"), JSON.stringify(jsonStats));
        });
      }
    },
    new webpack.PrefetchPlugin("react"),
    new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
  ];
  if (options.prerender) {
    aliasLoader["react-proxy$"] = "react-proxy/unavailable";
    externals.push(
      /^react(\/.*)?$/,
      /^reflux(\/.*)?$/,
      "superagent",
      "async"
    );
    plugins.push(new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}));
  }
  if (options.commonsChunk) {
    plugins.push(new webpack.optimize.CommonsChunkPlugin("commons", "commons.js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : "")));
  }


  Object.keys(stylesheetLoaders).forEach(function (ext) {
    var loaders = stylesheetLoaders[ext];
    if (Array.isArray(loaders)) loaders = loaders.join("!");
    if (options.prerender) {
      stylesheetLoaders[ext] = "null-loader";
    } else if (options.separateStylesheet) {
      stylesheetLoaders[ext] = ExtractTextPlugin.extract("style-loader", loaders);
    } else {
      stylesheetLoaders[ext] = "style-loader!" + loaders;
    }
  });
  if (options.separateStylesheet && !options.prerender) {
    plugins.push(new ExtractTextPlugin("[name].css" + (options.longTermCaching ? "?[contenthash]" : "")));
  }
  if (options.minimize) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.NoErrorsPlugin()
    );
  }

  return {
    entry: entry,
    output: output,
    target: options.prerender ? "node" : "web",
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: options.hotComponents ? ['react-hot', 'babel'] : ['babel'],
          exclude: /node_modules/
        },
        {
          test: /\.jsx$/,
          loaders: ['babel']
        }
      ].concat(loadersByExtension(loaders)).concat(loadersByExtension(stylesheetLoaders))
    },
    devtool: options.devtool,
    debug: options.debug,
    resolveLoader: {
      root: path.join(__dirname, "node_modules"),
      alias: aliasLoader
    },
    externals: externals,
    resolve: {
      root: root,
      modulesDirectories: modulesDirectories,
      extensions: extensions,
      alias: alias
    },
    plugins: plugins,
    devServer: {
      stats: {
        exclude: excludeFromStats
      }
    }
  };
};
