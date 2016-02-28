import Services from './Services';
import createContainer from 'rx-react-container';

export default function servicesHandler() {
  return {
    meta: {
      title: 'Services | Ephyros',
      description: 'Create a unique web services and web applications for the benefit of mankind.',
    },
    view: createContainer(Services),
  };
}
