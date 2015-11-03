import Services from './Services';
import RxComponent from '../utils/RxComponent';

export default function () {
  return {
    meta: {
      title: 'Services | Ephyros',
      description: 'Create a unique web services and web applications for the benefit of mankind.'
    },
    view: new RxComponent(Services)
  }
};
