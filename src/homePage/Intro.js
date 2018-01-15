import React, { Component } from 'react';
import { Link } from 'router1-react';

import MVPIcon from '../data/services/MVP.png';
import SAASIcon from '../data/services/SAAS.png';
import ICOIcon from '../data/services/ICO.png';

import MVPIconRetina from '../data/services/MVP@2x.png';
import SAASIconRetina from '../data/services/SAAS@2x.png';
import ICOIconRetina from '../data/services/ICO@2x.png';

class Intro extends Component {
  constructor() {
    super();
    this.state = { visibility: 1 };
    this.listener = false;
  }

  componentDidMount() {
    this.listener = this.onScroll.bind(this);

    window.addEventListener('scroll', this.listener);
    this.onScroll();
  }

  componentWillUnmount() {
    if (this.listener) {
      window.removeEventListener('scroll', this.listener);
    }
  }

  onScroll() {
    const domNode = this.introBlock;
    const elementHeight = domNode.offsetHeight;
    const hiddenHeight = Math.min(Math.max(window.scrollY, 0), elementHeight);
    this.setState({
      visibility: 1 - hiddenHeight / elementHeight,
    });
  }

  render() {
    return (
      <div
        ref={introBlock => {
          this.introBlock = introBlock;
        }}
      >
        <div className="screen-intro-back2" />
        <div
          className="screen-intro-back"
          style={{ opacity: this.state.visibility }}
        />
        <div className="screen-intro">
          <div className="center-wrapper">
            <div className="screen-intro__content">
              <h1 className="screen-intro__title">
                One Stop Shop Solution for your ideas
              </h1>

              <p className="screen-intro__subtitle">
                Focus on your business, we will do the rest
              </p>

              <div className="intro-services">
                <div className="intro-service">
                  <img
                    srcSet={`${MVPIcon}, ${MVPIconRetina} 2x`}
                    src={MVPIcon}
                    alt="MVP"
                  />
                  <p className="intro-service__title">MVP development</p>
                  <p>Idea validation, Tracing, Getting first users</p>
                </div>
                <div className="intro-services__dots">
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                </div>
                <div className="intro-service">
                  <img
                    srcSet={`${SAASIcon}, ${SAASIconRetina} 2x`}
                    src={SAASIcon}
                    alt="MVP"
                  />
                  <p className="intro-service__title">SaaS infrustructure</p>
                  <p>Operational excellence</p>
                </div>
                <div className="intro-services__dots">
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                  <div className="intro-services__dot" />
                </div>
                <div className="intro-service">
                  <img
                    srcSet={`${ICOIcon}, ${ICOIconRetina} 2x`}
                    src={ICOIcon}
                    alt="MVP"
                  />
                  <p className="intro-service__title">ICO</p>
                  <p>For mature businesses</p>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="scroll-btn scroll-btn_before-cases"
            hash="cases"
            route="home"
          >
            <i className="icon-down" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Intro;
