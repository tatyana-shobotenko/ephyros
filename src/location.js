import {BehaviorSubject, Observable, Observer, Subject} from 'rx';
import di from './di';

function locationFactory() {
  let locationObservable = new BehaviorSubject([window.location.pathname, true]);
  let locationObserver;
  if ('onpopstate' in window) {
    locationObserver = Observer.create(function (uri) {
      history.pushState(null, null, uri);
      locationObservable.onNext([uri, true]);
    });
    Observable.fromEvent(window, 'popstate')
      .map(()=>[window.location.pathname, false])
      .subscribe(locationObservable);

  } else {
    locationObserver = Observer.create(function (uri) {
      window.location.replace(uri);
    });
  }
  return Subject.create(locationObserver, locationObservable);
}

di.provide(locationFactory, locationFactory);

export default locationFactory;
