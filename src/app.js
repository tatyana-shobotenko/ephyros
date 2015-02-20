var React = require('react');
window.React = React;
var App = require('./components/Homepage');
var $ = require('jquery');

React.render(<App/>, document.getElementById('app'));

//////////// Performs a smooth page scroll to an anchor on the same page. ////////////

$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
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