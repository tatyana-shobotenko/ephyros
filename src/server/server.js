import ReactDOM from 'react-dom/server';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

import clientEnvVars from './../client/envVars';

export function createServer(options) {
  const app = express();

  const render = options.render;
  const stats = require('../build/stats.json');

  const publicPath = stats.publicPath;

  const mainArr = [].concat(stats.assetsByChunkName.main);
  const STYLE_URL = mainArr.length > 1 ? publicPath + mainArr[1] : false;
  const SCRIPT_URL = publicPath + mainArr[0];
  // var COMMONS_URL = publicPath + [].concat(stats.assetsByChunkName.commons)[0];


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/_assets', express.static(path.join('public', '_assets'), {
    maxAge: '200d', // We can cache them as they include hashes
  }));

  app.use('/', express.static(path.join('public'), {}));
  app.get('/favicon.ico', (req, res) => {
    // used when no favicon file found
    // was added to prevent matching /*
    res.status(404).send();
  });

  app.set('views', path.join('src', 'server', 'templates'));
  // app.set('views', path.join(__dirname, 'templates'));
  app.set('view engine', 'ejs');

  const envParams = {};

  for (let i = 0, l = clientEnvVars.length; i < l; i += 1) {
    const key = clientEnvVars[i];
    if (Object.prototype.hasOwnProperty.call(process.env, key)) {
      envParams[key] = process.env[key];
    }
  }

  app.get('/*', (req, res) => {
    function sendHtml(error, { view, meta, status, redirect }) {
      if (error) {
        res.status(500);
        // todo: improve this
        // send error to client, at least in dev mode
        console.error(error);
        res.render('500', { url: req.url });
      } else if (redirect) {
        res.writeHead(status || 303, { Location: redirect });
        res.end();
      } else {
        res.status(status || 200);
        res.render('html-head', {
          title: meta.title,
          description: meta.description,
          stylesUrl: STYLE_URL,
        }, (err, content) => {
          res.write(content);
        });
        res.write('<div id="app">');
        const html = view ? ReactDOM.renderToString(view) : '';
        res.write(html);
        res.write('</div>');

        res.render('html-footer', {
          scriptsUrl: SCRIPT_URL,
          envParams,
        }, (err, content) => res.write(content));
        res.end();
      }
    }

    render(req.path, sendHtml);
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
