import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from'nodemailer';

const app = express();

export default function(options) {
  const prerender = options.prerender;

  const stats = require('../build/stats.json');

  const publicPath = stats.publicPath;

  const mainArr = [].concat(stats.assetsByChunkName.main);
  const STYLE_URL = mainArr.length > 1 ? publicPath + mainArr[1] : false;
  const SCRIPT_URL = publicPath + mainArr[0];
  const IE_SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.ie)[0];
  // var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use('/_assets', express.static(path.join('build', 'public'), {
    maxAge: '200d', // We can cache them as they include hashes
  }));

  app.use('/', express.static(path.join('public'), {}));

  app.set('views', path.join('src', 'server', 'templates'));
  // app.set('views', path.join(__dirname, 'templates'));
  app.set('view engine', 'ejs');


  // app.set('etag fn', (
  //   function (etag) {
  //     return function (html, encoding) {
  //       etag(html.replace(/\bdata-(?:reactid|react-checksum)="[^"]*"/g, ''), encoding);
  //     }
  //   }(app.get('etag fn'))
  // ));


  app.get('/*', (req, res)=> {
    function sendHtml(error, {view, meta, status, redirect}) {
      if (error) {
        res.status(500);
        res.render('500', {url: req.url});
      } else {
        if (redirect) {
          res.writeHead(status || 303, {'Location': redirect});
          res.end();
        } else {
          res.status(status || 200);
          res.render('html', {
            appHtml: view,
            title: meta.title,
            description: meta.description,
            scriptsUrl: SCRIPT_URL,
            ieScriptsUrl: IE_SCRIPT_URL,
            stylesUrl: STYLE_URL,
          });
        }
      }
    }

    prerender(req.path, sendHtml);
  });

  function mail(form) {
    const transport = nodemailer.createTransport({
      host: 'localhost',
      port: 25,
      // auth: {
      //   user: 'username',
      //   pass: 'password'
      // },
    });

    const message = {
      from: 'robot@ephyros.com',
      to: 'hello@ephyros.com',
      subject: 'Email from Ephyros.com',
      text: ''
      + 'Name: ' + form.name + '\n'
      + 'Phone: ' + form.phone + '\n'
      + 'Email: ' + form.email + '\n'
      + 'Message:' + form.message + '\n',
    };
    if (form.name && form.email && form.message) {
      transport.sendMail(message);
    }
  }

  app.post('/-/contact', (req, res) => {
    const form = req.body;
    mail(form);

    res.send('OK');
    res.end();
  });

  app.post('/contact', (req, res) => {
    const form = req.body;
    mail(form);

    res.writeHead(302, {'Location': req.path + '?sent'});
    res.end();
  });


  const port = +(process.env.PORT || options.defaultPort || 8080);
  app.listen(port, () => {
    console.log('Server listening on port ' + port);
  });
}
