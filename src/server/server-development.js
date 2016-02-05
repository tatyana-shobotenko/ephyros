import {} from 'dotenv/config';
import server from './server';

server({
  prerender(requestPath, cb) {
    cb(null, {html: '', meta: {title: '', description: ''}});
  },
});
