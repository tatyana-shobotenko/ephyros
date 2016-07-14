import {} from './env';
import './ga';
import '../styles/main.sass';
import '../styles/icons.scss';
import { router } from './router';

router
  .renderResult()
  .forEach(() => {
    window.ga('send', 'pageview', window.location.pathname);
  });
