var React = require('react');
var Router = require('react-router');
var State = Router.State;

var Case = React.createClass({
  mixins: [State],
  render() {
    return (
      <div style={{marginTop:-96, paddingTop:96, minHeight:100, backgroundColor:'#2d5572'}}>
        <div style={{padding:30, backgroundColor:'white', fontSize:'24px'}}>Case #{this.getParams().index}</div>
      </div>
    );
  }
});
module.exports = Case;