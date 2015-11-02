import NotFound from './NotFound';

export default function () {
  return {
    meta: {
      title: 'Whoops! Page not found',
      description: 'Sorry, but the page you were trying to view does not exist.'
    },
    view: NotFound
  }
};
