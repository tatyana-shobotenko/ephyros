require('./server')({
  defaultPort: 8080,
  prerender: function (requestPath, cb) {
    cb(null, {html: '', meta: {title: '', description: ''}});
  }
});
