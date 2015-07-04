'use strict';

import React from 'react';
import Router, {State} from 'react-router';

import casesData from '../data/casesData';

const Case = React.createClass({
  contextTypes: {
    metaData: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    var selectedCase = this.getSelectedCase();
    this.context.metaData.setTitle(selectedCase.name);
    this.context.metaData.setDescription('');
  },
  mixins: [State],
  getSelectedCase() {
    const slug = this.getParams().slug;
    let selectedCase = false;
    casesData.forEach((i) => {
      if (i.slug === slug) {
        selectedCase = i;
      }
    });
    return selectedCase;
  },
  render() {
    const selectedCase = this.getSelectedCase();
    let caseContent;
    if (selectedCase) {
      caseContent = (
        <div className="screen-case__content">
          <h1 className="screen-title">{selectedCase.name}</h1>
          <img src={selectedCase.imageBig} alt={selectedCase.name}/>
        </div>
      );
    } else {
      caseContent = (
        <div data-not-found style={{padding:30, backgroundColor:'white', fontSize:'24px'}}>Case not found</div>
      );
    }
    return (
      <div>
        <div className="screen-case-back"></div>
        <div className="screen-case-back2"></div>
        <div className="screen-case">
          {caseContent}
        </div>
      </div>
    );
  }
});

export default Case;
