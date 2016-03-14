import {} from 'dotenv/config';
import server from './server';
import prerender from './prerender';

server({
  prerender,
});
