require('./server')({
  defaultPort: 8080,
  prerender: function (requestPath, cb) {
    cb({html: '', meta: {title: '', description: ''}});
  }
});
