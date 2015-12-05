import Contact from './Contact';
import RxContainer from 'rx-react-container';

export default function(params) {
  return {
    meta: {
      title: 'Contact us | Ephyros',
      description: 'Don\'t hesitate to email us today',
    },
    view: new RxContainer(Contact, {}, {}, {sent: params.sent}),
  };
}
