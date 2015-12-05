import Home from './Home';
import RxContainer from 'rx-react-container';

export default function() {
  return {
    meta: {
      title: 'Ephyros | We create rocking web applications for startups &amp; enterprises',
      description: 'Ephyros is a team of developers who invent, think over, build, and improve.' +
      ' We collaborate with ambitious clients who want to bring powerful ideas to life.',
    },
    view: new RxContainer(Home),
  };
}
