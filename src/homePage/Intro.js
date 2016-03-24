import React, { Component } from 'react';
import Link from 'router1-react/lib/Link';

class Intro extends Component {
  constructor() {
    super();
    this.state = { visibility: 1 };
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
    const domNode = this.refs.introBlock;
    const elementHeight = domNode.offsetHeight;
    const hiddenHeight = Math.min(Math.max(window.scrollY, 0), elementHeight);
    this.setState({
      visibility: 1 - hiddenHeight / elementHeight,
    });
  }

  render() {
    return (
      <div ref="introBlock">
        <div className="screen-intro-back2" />
        <div
          className="screen-intro-back"
          style={{ opacity: this.state.visibility }}
        />
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
                <Link
                  route="cases"
                  className="button button-group__item"
                >
                  Selected Cases
                </Link>
                <Link
                  route="services"
                  className="button button-group__item"
                  onClick={() => {window.gae('mainpage', 'click', 'services', 25);}}
                >
                  Services
                </Link>
              </div>
            </div>
          </div>
          <Link className="scroll-btn scroll-btn_before-cases" hash="cases" route="home">
            <i className="icon-down" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;
