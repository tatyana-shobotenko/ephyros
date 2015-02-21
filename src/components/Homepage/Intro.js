var React = require('react');


module.exports = React.createClass({
  getInitialState() {
    return {visibility: 1}
  },
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  },
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  onScroll() {
    var domNode = this.getDOMNode();
    var elementHeight = domNode.offsetHeight;
    var hiddenHeight = Math.min(Math.max(window.scrollY, 0), elementHeight);
    this.setState({
      visibility: 1 - hiddenHeight / elementHeight
    })
  },
  render() {
    return (
      <div>
        <div className="screen-intro-back" style={{opacity:this.state.visibility}}/>
        <div className="screen-intro">
          <div className="center-wrapper">
            <div className="screen-intro__content">
              <h1 className="screen-intro__title">We create rocking
                web applications
                for startups</h1>

              <p className="screen-intro__subtitle">
                At Ephyros we help ambitious clients
                to bring powerful ideas to life
              </p>

              <div className="button-group">
                <a href="#cases" className="button button-group__item">Services</a>
                <a href="#presentation" className="button button-group__item">Presentation</a>
              </div>
            </div>
          </div>
          <a className="scroll-btn scroll-btn_before-cases" href="#cases">
            <i className="icon-down"/>
          </a>
        </div>
      </div>
    );
  }
});