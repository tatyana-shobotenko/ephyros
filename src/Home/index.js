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
    this.context.metaData.setTitle('Ephyros');
    this.context.metaData.setDescription(
      'At Ephyros we help ambitious clients to bring powerful ideas to life');
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
