var React = require('react');

var NotFound = React.createClass({
  render() {
    return (
      <div data-not-found
           style={{marginTop:-96, paddingTop:96, minHeight:100, backgroundColor:'#2d5572'}}>
        <div style={{padding:30, backgroundColor:'white'}}>
          <h1>Not found <span>:(</span></h1>

          <p>Sorry, but the page you were trying to view does not exist.</p>

          <p>It looks like this was the result of either:</p>
          <ul>
            <li>a mistyped address</li>
            <li>an out-of-date link</li>
          </ul>
        </div>
      </div>
    );
  }
});
module.exports = NotFound;