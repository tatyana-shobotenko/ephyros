import React from 'react';
import ReactDOM from 'react-dom/server';

import createServerHistory from './../router/createServerHistory';

import notFoundHandler from '../notFoundPage/notFoundHandler';

import routes from '../routes';
import Router from '../router/Router';
import RouterContext from '../router/RouterContext';

import toObservable from '../utils/toObservable';
import {Observable} from 'rx';

export default function prerender(requestPath, cb) {
  const history = createServerHistory(requestPath);

  const router = new Router(
    history,
    routes);

  router
    .routingResult()
    .flatMap(routingResult=> {
      const handler = routingResult.handler || notFoundHandler;

      return toObservable(handler(routingResult.params));
    })
    .flatMapLatest(({view, redirect, status, meta})=> {
      if (redirect) {
        return Observable.return({redirect, status});
      }
      return view.first().map(({component, props})=> {
        const html = ReactDOM.renderToString(
          <RouterContext router={router} component={component} props={props}/>
        );
        return {
          view: html,
          meta,
          status,
        };
      });
    })
    .first()
    .forEach((data)=> {
      cb(null, data);
    }, error=>cb(error));
}
