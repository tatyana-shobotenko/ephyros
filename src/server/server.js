import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';


export default function createApp(options) {
  const app = express();

  const prerender = options.prerender;

  const stats = require('../build/stats.json');

  const publicPath = stats.publicPath;

  const mainArr = [].concat(stats.assetsByChunkName.main);
  const STYLE_URL = mainArr.length > 1 ? publicPath + mainArr[1] : false;
  const SCRIPT_URL = publicPath + mainArr[0];
  const IE_SCRIPT_URL = publicPath + [].concat(stats.assetsByChunkName.ie)[0];
  // var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/_assets', express.static(path.join('build', 'public'), {
    maxAge: '200d', // We can cache them as they include hashes
  }));

  app.use('/', express.static(path.join('public'), {}));

  app.set('views', path.join('src', 'server', 'templates'));
  // app.set('views', path.join(__dirname, 'templates'));
  app.set('view engine', 'ejs');

  const etag = app.get('etag fn');

  app.get('/*', (req, res) => {
    function sendHtml(error, { view, meta, status, redirect }) {
      if (error) {
        res.status(500);
        res.render('500', { url: req.url });
      } else {
        if (redirect) {
          res.writeHead(status || 303, { Location: redirect });
          res.end();
        } else {
          if (etag) {
            const v = etag(view.replace(/\bdata-(?:reactid|react-checksum)="[^"]*"/g, ''), 'utf-8');
            if (v) res.set('ETag', v);
          }

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
    const transport = nodemailer.createTransport(process.env.SMTP_CONNECTION_URL);

    const message = {
      from: process.env.ROBOT_EMAIL || 'robot@ephyros.com',
      to: process.env.CONTACT_EMAIL || 'hello@ephyros.com',
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

    res.writeHead(302, { Location: `${req.path}?sent` });
    res.end();
  });


  const port = +(process.env.PORT || 8080);
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
