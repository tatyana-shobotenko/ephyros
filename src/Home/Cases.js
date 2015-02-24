var React = require('react');
var Link = require('react-router').Link;

var casesData = require('../data/casesData');

module.exports = React.createClass({
  getInitialState(){
    return {
      isTouch:'ontouchstart' in document.documentElement
    }
  },
  render() {
    var cases = casesData.map((data, index)=> {
      tags = data.tags.join(' / ');
      return (
        <Link to="case" params={{slug:data.slug}} className={'hcase'+ (data.big?' hcase_big':'')} key={index}>
          <div className="hcase__img">
            <img src={data.image} alt={data.name}/>
          </div>
          <div className="hcase__info">
            <div className="hcase__info-inner">
              <div className="hcase__section">{tags}</div>
              <div className="hcase__title">{data.name}</div>
            </div>
            <div className="hcase__go-icon icon-right-arrow"/>
          </div>
        </Link>
      );
    });

    return (
      <div className={"screen-cases"+(this.state.isTouch?' is-touch':'')}>
          <div className="center-wrapper screen-table">
            <div className="screen-table__cell">
            <h1 className="screen-title">Selected cases</h1>

            <div className="hcases-list">
              {cases}
            </div>
            <Link to="cases" className="button">All works</Link>
          </div>
        </div>
        <a className="scroll-btn scroll-btn_before-presentation" href="#presentation">
          <i className="icon-down"/>
        </a>
      </div>
    );
  }
});