import React from 'react';
import Cases from './Cases';
import Presentation from './Presentation';
import Team from './Team';
import Contact from './Contact';
import Intro from './Intro';
import Layout from '../views/Layout';


function Home() {
  return (
    <Layout>
      <Intro />
      <a id="cases" />
      <Cases />
      { /* <a id="presentation" />
      <Presentation /> */ }
      <a id="team" />
      <Team />
      <a id="contact" />
      <Contact />
    </Layout>
  );
}

export default Home;
