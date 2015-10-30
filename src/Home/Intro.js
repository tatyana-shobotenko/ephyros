import React, {Component} from 'react';
import {Link} from 'react-router';

class Intro extends Component {
  constructor() {
    super();
    this.state = {visibility: 1};
    this.listener = false;
  }

  componentDidMount() {
    const listener = this.listener = this.onScroll.bind(this);

    window.addEventListener('scroll', listener);
    this.onScroll();
  }

  componentWillUnmount() {
    if (this.listener) {
      window.removeEventListener('scroll', this.listener);
    }
  }

  onScroll() {
    const domNode = React.findDOMNode(this.refs.root);

    const elementHeight = domNode.offsetHeight;
    const hiddenHeight = Math.min(Math.max(window.scrollY, 0), elementHeight);
    this.setState({
      visibility: 1 - hiddenHeight / elementHeight
    });

  }

  render() {
    return (
      <div ref="root">
        <div className="screen-intro-back2"/>
        <div className="screen-intro-back" style={{opacity: this.state.visibility}}/>
        <div className="screen-intro">
          <div className="center-wrapper">
            <div className="screen-intro__content">
              <h1 className="screen-intro__title">We create rocking
                web applications for startups &amp; enterprises
              </h1>

              <p className="screen-intro__subtitle">
                At Ephyros we help ambitious clients
                to bring powerful ideas to life
              </p>

              <div className="button-group">
                <a href="#presentation"
                   className="button button-group__item"
                   onClick={()=>{window.gae('mainpage', 'click', 'presentation', 30)}}>
                  Presentation
                </a>
                <Link to="services"
                      className="button button-group__item"
                      onClick={()=>{window.gae('mainpage', 'click', 'services', 25)}}>
                  Services
                </Link>
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
}

export default Intro;
