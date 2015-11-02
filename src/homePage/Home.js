import React, {Component} from 'react';
import Cases from './Cases';
import Presentation from './Presentation';
import Team from './Team';
import Contact from './Contact';
import Intro from './Intro';
import Layout from '../views/Layout';


class Home extends Component {
  render() {
    return (
      <Layout>
        <Intro/>
        <a name="cases"/>
        <Cases/>
        <a name="presentation"/>
        <Presentation/>
        <a name="team"/>
        <Team/>
        <a name="contact"/>
        <Contact/>
      </Layout>
    );
  }
}

export default Home;
