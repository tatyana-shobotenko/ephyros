import './env';
import './ga';
import './optimizely';
import '../styles/main.sass';
import '../styles/icons.scss';
import { router } from './router';

router
  .renderResult()
  .forEach(() => {
    window.ga('send', 'pageview', window.location.pathname);

    window.optimizely = window.optimizely || [];
    window.optimizely.push({ type: 'activate' });
  });

router.start();
