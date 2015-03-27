var React = require('react');
var Cases = require('./Cases');
var Presentation = require('./Presentation');
var Team = require('./Team');
var Contact = require('./Contact');
var Intro = require('./Intro');


module.exports = React.createClass({
  contextTypes: {
    metaData: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    this.context.metaData.setTitle('Ephyros | We create rocking web applications for startups &amp; enterprises');
    this.context.metaData.setDescription(
      'Ephyros is a team of developers who invent, think over, build, and improve. We collaborate with ambitious clients who want to bring powerful ideas to life.');
  },
  render() {
    return (
      <div>
        <Intro/>
        <a name="cases"></a>
        <Cases/>
        <a name="presentation"></a>
        <Presentation/>
        <a name="team"></a>
        <Team/>
        <a name="contact"></a>
        <Contact/>
      </div>
    );
  }
});
