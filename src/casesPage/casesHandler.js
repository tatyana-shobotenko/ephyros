import createContainer from 'rx-react-container';
import Cases from './Cases';

export default function () {
  return {
    meta: {
      title: 'Work | Ephyros',
      description: 'Ephyros\'s best case studies and success stories',
    },
    view: createContainer(Cases),
  };
}
