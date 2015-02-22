var React = require('react');
var Router = require('react-router');
var State = Router.State;

var casesData = require('../data/casesData');

var Case = React.createClass({
  mixins: [State],
  render() {
    var slug = this.getParams().slug;
    var selectedCase = false;
    casesData.forEach(function (i) {
      if (i.slug === slug) {
        selectedCase = i;
      }
    });

    var caseContent;
    if (selectedCase) {
      caseContent = (
        <div style={{padding:30, backgroundColor:'white', fontSize:'24px'}}>
          <h1>{selectedCase.name}</h1>
          <img src={selectedCase.image} alt={selectedCase.name}/>
        </div>
      );
    } else {
      caseContent = (
        <div data-not-found style={{padding:30, backgroundColor:'white', fontSize:'24px'}}>Case not found</div>
      );
    }
    return (
      <div style={{marginTop:-96, paddingTop:96, minHeight:100, backgroundColor:'#2d5572'}}>
        {caseContent}
      </div>
    );
  }
});
module.exports = Case;