import React from 'react';
import Services from './Services';

export default function servicesHandler() {
  return {
    meta: {
      title: 'Services | Ephyros',
      description:
        'Create a unique web services and web applications for the benefit of mankind.',
    },
    view: <Services />,
  };
}
