import Contact from './Contact';
import RxComponent from '../utils/RxComponent';

export default function () {
  return {
    meta: {
      title: 'Contact us | Ephyros',
      description: 'Don\'t hesitate to email us today'
    },
    view: new RxComponent(Contact)
  }
};
