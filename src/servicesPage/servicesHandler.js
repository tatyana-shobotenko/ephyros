import Services from './Services';
import RxContainer from 'rx-react-container';

export default function() {
  return {
    meta: {
      title: 'Services | Ephyros',
      description: 'Create a unique web services and web applications for the benefit of mankind.',
    },
    view: new RxContainer(Services),
  };
}
