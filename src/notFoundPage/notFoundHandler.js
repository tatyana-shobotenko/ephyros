import NotFound from './NotFound';
import RxContainer from 'rx-react-container';

export default function() {
  return {
    status: 404,
    meta: {
      title: 'Whoops! Page not found',
      description: 'Sorry, but the page you were trying to view does not exist.',
    },
    view: new RxContainer(NotFound),
  };
}
