import Team from './Team';
import RxComponent from '../utils/RxComponent';

export default function () {
  return {
    meta: {
      title: 'Team | Ephyros',
      description: 'Ephyros is a team of developers who invent, think over, build, and improve. ' +
      'We collaborate with ambitious clients who want to bring powerful ideas to life. ' +
      'Love to create awesome web-services and applications.'
    },
    view: new RxComponent(Team)
  }
};
