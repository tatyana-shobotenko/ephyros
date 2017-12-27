import React from 'react';
import Home from './Home';

export default function homeHandler() {
  return {
    meta: {
      title:
        'Ephyros | We create rocking web applications for startups &amp; enterprises',
      description:
        'Ephyros is a team of developers who invent, think over, build, and improve.' +
        ' We collaborate with ambitious clients who want to bring powerful ideas to life.',
    },
    view: <Home />,
  };
}
