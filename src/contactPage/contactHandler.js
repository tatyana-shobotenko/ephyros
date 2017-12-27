import createContainer from 'rx-react-container';
import Contact from './Contact';

export default function contactHandler(params) {
  return {
    meta: {
      title: 'Contact us | Ephyros',
      description: "Don't hesitate to email us today",
    },
    view: createContainer(Contact, {}, {}, { sent: params.sent }),
  };
}
