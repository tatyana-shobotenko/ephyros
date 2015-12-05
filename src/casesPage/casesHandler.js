import Cases from './Cases';
import RxContainer from 'rx-react-container';

export default function() {
  return {
    meta: {
      title: 'Work | Ephyros',
      description: 'Ephyros\'s best case studies and success stories',
    },
    view: new RxContainer(Cases),
  };
}
