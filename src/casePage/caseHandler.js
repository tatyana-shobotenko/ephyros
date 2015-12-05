import Case from './Case';
import RxContainer from 'rx-react-container';

import casesData from './../data/casesData';

export default function(params) {
  const slug = params.slug;
  let selectedCase = false;
  casesData.forEach((i) => {
    if (i.slug === slug) {
      selectedCase = i;
    }
  });

  return {
    meta: {
      title: selectedCase.name,
      description: '',
    },
    view: new RxContainer(Case, {}, {}, {selectedCase}),
  };
}
