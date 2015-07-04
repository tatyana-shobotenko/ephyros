import React, {Component} from 'react';
import Cases from './Cases';
import Presentation from './Presentation';
import Team from './Team';
import Contact from './Contact';
import Intro from './Intro';


class Home extends Component {
  componentWillMount() {
    this.context.metaData.setTitle('Ephyros | We create rocking web applications for startups &amp; enterprises');
    this.context.metaData.setDescription(
      'Ephyros is a team of developers who invent, think over, build, and improve. We collaborate with ambitious clients who want to bring powerful ideas to life.');
  }

  render() {
    return (
      <div>
        <Intro/>
        <a name="cases"></a>
        <Cases/>
        <a name="presentation"></a>
        <Presentation/>
        <a name="team"></a>
        <Team/>
        <a name="contact"></a>
        <Contact/>
      </div>
    );
  }
}

Home.contextTypes = {
  metaData: React.PropTypes.object.isRequired
};

export default Home;
