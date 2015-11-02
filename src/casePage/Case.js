import React from 'react';

import Layout from './../views/Layout';

import casesData from './../data/casesData';

const Case = React.createClass({
  contextTypes: {
    metaData: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    var selectedCase = this.getSelectedCase();
    this.context.metaData.setTitle(selectedCase.name);
    this.context.metaData.setDescription('');
  },
  getSelectedCase() {
    const slug = false;// todo: this.getParams().slug;
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
        <div data-not-found style={{padding: 30, backgroundColor: 'white', fontSize: '24px'}}>Case not found</div>
      );
    }
    return (
      <Layout>
        <div className="screen-case-back"></div>
        <div className="screen-case-back2"></div>
        <div className="screen-case">
          {caseContent}
        </div>
      </Layout>
    );
  }
});

export default Case;
