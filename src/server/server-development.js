import {} from 'dotenv/config';
import server from './server';

server({
  prerender(requestPath, cb) {
    cb(null, { view: '', meta: { title: '', description: '' } });
  },
});
