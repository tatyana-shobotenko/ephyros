import di from './di.js';
import Router from './router/Router.js';
import RouteHandler from './router/RouteHandler.js';
import routes from './pages/all.js';

import locationToken from './location.js';

export default di.annotate(
  (location, injector) => {
    let handler = new RouteHandler(injector.get.bind(injector));
    return new Router(location, routes, handler);
  },
  locationToken,
  di.Injector
);
