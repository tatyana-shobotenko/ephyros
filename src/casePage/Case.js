import React from 'react';

import Layout from './../views/Layout';


function Case({selectedCase}) {
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

export default Case;
