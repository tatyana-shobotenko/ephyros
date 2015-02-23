var React = require('react');
var Router = require('react-router');

var routes = require('./routes');
var $ = require('jquery');

require('./styles/main.css');
require('./styles/icons.css');


Router.run(routes, Router.HistoryLocation, (Handler) => {
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