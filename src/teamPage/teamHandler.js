import Team from './Team';
import createContainer from 'rx-react-container';

export default function() {
  return {
    meta: {
      title: 'Team | Ephyros',
      description: 'Ephyros is a team of developers who invent, think over, build, and improve. ' +
      'We collaborate with ambitious clients who want to bring powerful ideas to life. ' +
      'Love to create awesome web-services and applications.',
    },
    view: createContainer(Team),
  };
}
