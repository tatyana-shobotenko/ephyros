import {} from 'dotenv/config';
import server from './server';

server({
  defaultPort: 8080,
  prerender(requestPath, cb) {
    cb(null, { view: '', meta: { title: '', description: '' } });
  },
});
