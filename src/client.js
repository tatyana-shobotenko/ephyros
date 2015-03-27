var React = require('react');
var Router = require('react-router');

var routes = require('./routes');
var $ = require('jquery');

require('./styles/main.css');
require('./styles/icons.css');

(function (i, s, o, g, r, a, m) {
  i.GoogleAnalyticsObject = r;
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments);
  };
  i[r].l = +new Date();
  a = s.createElement(o);
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
window.ga('create', 'UA-40296016-1', 'auto');

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.withContext({
    metaData: {
      setTitle(title) {
        "use strict";
        document.title = title;
      },
      setDescription(description) {
        "use strict";
        $('meta[name=description]').text(description);
      }
    }
  }, ()=> {
    React.render(<Handler/>, document.getElementById('app'), ()=> {
      var hash = window.location.hash;
      if (hash) {
        var target = $(hash);
        target = target.length ? target : $('[name=' + hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 0);
        }
      }
      window.ga('send', 'pageview', window.location.toString());
    });
  });
});


//////////// Performs a smooth page scroll to an anchor on the same page. ////////////

$(function () {
  $(document.body).on('click', 'a[href*=#]:not([href=#])', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});
