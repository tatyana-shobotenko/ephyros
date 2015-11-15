import Cases from './Cases';
import RxComponent from '../utils/RxComponent';

export default function() {
  return {
    meta: {
      title: 'Work | Ephyros',
      description: 'Ephyros\'s best case studies and success stories'
    },
    view: new RxComponent(Cases)
  }
};
