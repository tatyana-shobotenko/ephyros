/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'router1-react';
import casesData from '../data/homeCasesData';

class Cases extends Component {
  constructor() {
    super();
    this.state = {
      isTouch: false,
    };
  }

  componentDidMount() {
    this.detectTouch();
  }

  detectTouch() {
    if (
      'ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)
    ) {
      this.setState({ isTouch: true });
    }
  }

  render() {
    const cases = casesData.map((data, index) => {
      const tags = data.tags.join(' / ');
      return (
        <Link
          route="cases"
          hash={data.slug}
          className={`hcase${data.big ? ' hcase_big' : ''}`}
          onClick={() => {
            window.gae('mainpage', 'click', `work_${data.slug}`, 25);
          }}
          key={index}
        >
          <div className="hcase__img">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="hcase__info">
            <div className="hcase__info-inner">
              <div className="hcase__title">{data.name}</div>
              <div className="hcase__section">{tags}</div>
            </div>
            <div className="hcase__go-icon">
              <button className="button">
                More <i className="icon-right-arrow" />
              </button>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <div className="screen-cases">
        <div className="center-wrapper screen-table">
          <div className="screen-table__cell">
            <h1 className="screen-title">Selected cases</h1>

            <div className="hcases-list">{cases}</div>
            <Link
              route="cases"
              className="button"
              onClick={() => {
                window.gae('mainpage', 'click', 'all_works', 25);
              }}
            >
              All works
            </Link>
          </div>
        </div>
        <Link
          className="scroll-btn scroll-btn_before-team"
          hash="team"
          route="home"
        >
          <i className="icon-down" />
        </Link>
      </div>
    );
  }
}

export default Cases;
