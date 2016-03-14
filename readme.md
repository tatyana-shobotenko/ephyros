ephyros.com next version
========================

requirements:

1. nodejs

install dependencies: `npm i`

## Env setup

copy `.env.sample` to `.env`, adjust your config

## Development server


start the webpack-dev-server (for client-side scripts):

`npm run dev-server`

and watcher for server script (for server-side)

`npm run watch-server`

start server

- `npm run start-dev` (clientside only rendering)
- `npm run start-prod` (with server side rendering)

Open this url in your browser

http://localhost:8080/

The configuration is `webpack-dev-server.config.js`.

It automatically recompiles and refreshes the page when files are changed.

Also check the [webpack-dev-server documentation](http://webpack.github.io/docs/webpack-dev-server.html).


## Hot Module Replacement development server (not tested and likely not working)

start the webpack-dev-server in HMR mode
`npm run hot-dev-server`

wait for the first compilation is successful

in another terminal/console
start the node.js server in development mode

`npm run start-dev`

open this url in your browser

http://localhost:8080/

The configuration is `webpack-hot-dev-server.config.js`.

It automatically recompiles when files are changed. When a hot-replacement-enabled file is changed (i. e. stylesheets or React components) the module is hot-replaced. If Hot Replacement is not possible the page is refreshed.

Hot Module Replacement has a performance impact on compilation.


## Production compilation and server

build the client bundle and the prerendering bundle

`npm run build`

start the node.js server in production mode

`node ./build/server/prod` (isomorphic rendering)
`node ./build/server/dev` (SPA)

open this url in your browser

http://localhost:8080/

The configuration is `webpack-production.config.js`.

The production setting builds two configurations: one for the client (`build/public`) and one for the serverside prerendering (`build/server`).


## Static assets

Asserts in `public` are also served.


## Build visualization

After a production build you may want to visualize your modules and chunks tree.

Use the [analyse tool](http://webpack.github.io/analyse/) with the file at `build/stats.json`.


## Loaders and file types

Many file types are preconfigured, but not every loader is installed. If you get an error like `Cannot find module "xxx-loader"`, you'll need to install the loader with `npm install xxx-loader --save` and restart the compilation.


### Switch devtool to SourceMaps

Change `devtool` property in `webpack-dev-server.config.js` and `webpack-hot-dev-server.config.js` to `"source-map"` (better module names) or `"eval-source-map"` (faster compilation).

SourceMaps have a performance impact on compilation.

### Enable SourceMaps in production

1. Uncomment the `devtool` line in `webpack-production.config.js`.
2. Make sure that the folder `build\public\debugging` is access controlled, i. e. by password.

SourceMaps have a performance impact on compilation.

SourceMaps contains your unminimized source code, so you need to restrict access to `build\public\debugging`.
