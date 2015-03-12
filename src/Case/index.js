var React = require('react');
var Router = require('react-router');
var State = Router.State;

var casesData = require('../data/casesData');

var Case = React.createClass({
  mixins: [State],
  getSelectedCase: function () {
    var slug = this.getParams().slug;
    var selectedCase = false;
    casesData.forEach((i) => {
      if (i.slug === slug) {
        selectedCase = i;
      }
    });
    return selectedCase;
  },
  render() {
    var selectedCase = this.getSelectedCase();
    var caseContent;
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
module.exports = Case;
