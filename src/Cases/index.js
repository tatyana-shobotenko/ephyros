'use strict';

var React = require('react');
var casesData = require('../data/casesData');
var Link  = require('react-router').Link;
var BottomMenu  = require('../components/BottomMenu');

var CasesPage = React.createClass({
  render() {
    var cases = casesData
      .map((data, index)=> {
        var tags = data.tags.join(' / ');
        let keyObj;
        if (data.keyObj) {
          keyObj = <ul>
            {data.keyObj.map(text=>(<li>{text}</li>))}
          </ul>;
        }
        if (index % 2) {
          return (

            <div className="work-item work-item_blue">
              <div className="center-wrapper">
                <div className="gcontainer">
                  <div className="work-item__desc work-item__desc_in-blue">
                    <div className="work-item__tags">{tags}</div>
                    <h2 className="work-item__title mv-20">{data.name}</h2>

                    <p>{data.text}</p>

                    <h3 className="mv-20">Key Objectives</h3>

                    {keyObj}

                    <a className="work-item__link work-item__link_in-blue" href={data.url}>
                      {data.url.replace(/https?:\/\//, '')} <span className="work-item__link-icon icon-right-arrow"/>
                    </a>

                  </div>
                  <div className="work-item__pic work-item__pic_in-blue">
                    <img src={data.imageBig} alt={data.name}/>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        else {
          return (
            <div className="work-item">
              <div className="center-wrapper">
                <div className="gcontainer">
                  <div className="work-item__pic">
                    <img src={data.imageBig} alt={data.name}/>
                  </div>
                  <div className="work-item__desc">
                    <div className="work-item__tags">{tags}</div>
                    <h2 className="work-item__title mv-20">{data.name}</h2>

                    <p>{data.text}</p>

                    <h3 className="mv-20">Key Objectives</h3>

                    {keyObj}

                    <a className="work-item__link" href={data.url}>
                      {data.url.replace(/https?:\/\//, '')} <span className="work-item__link-icon icon-right-arrow"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });
    return (
      <div>
        <div className="page-header">
          <div className="center-wrapper relative">
            <Link to="/" className="page-header__nav page-header__nav_prev icon-left-arrow"  disabled/>
            <Link to="/services" className="page-header__nav page-header__nav_next icon-right-arrow"/>
            <div className="page-header__title">Work</div>
          </div>
        </div>
        <div className="work-wrap">
          {cases}
        </div>
        <BottomMenu/>
      </div>
    );
  }
});
module.exports = CasesPage;
