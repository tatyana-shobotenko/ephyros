var React = require('react');
var Cases = require('../Home/Cases');

var CasesPage = React.createClass({
  render() {
    return (
      <div style={{marginTop:-96, paddingTop:96, minHeight:100, backgroundColor:'#2d5572'}}>
        <Cases/>
      </div>
    );
  }
});
module.exports = CasesPage;