import React, {Component} from 'react';
import casesData from './data/casesData';
import {Link} from 'react-router';
import BottomMenu from './BottomMenu';

class CasesPage extends Component {
  componentWillMount() {
    this.context.metaData.setTitle('Work | Ephyros');
    this.context.metaData.setDescription('Ephyros\'s best case studies and success stories');
  }

  render() {
    var cases = casesData
      .map((data, index)=> {
        var tags = data.tags.join(' / ');
        var keyObj;
        if (data.keyObj) {
          keyObj = (
            <ul>
              {data.keyObj.map((text, objIndex)=>(<li key={objIndex}>{text}</li>))}
            </ul>
          );
        }
        if (index % 2) {
          return (

            <div className="work-item work-item_blue" key={index} id={data.slug}>
              <div className="center-wrapper">
                <div className="gcontainer">
                  <div className="work-item__desc work-item__desc_in-blue">
                    <div className="work-item__tags">{tags}</div>
                    <h2 className="work-item__title mv-20">{data.name}</h2>

                    <p>{data.text}</p>

                    <h3 className="mv-20">Key Objectives</h3>

                    {keyObj}

                    <a
                      className="work-item__link work-item__link_in-blue"
                      href={data.url}
                      target="_blank"
                      rel="nofollow"
                      >
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
            <div className="work-item" key={index} id={data.slug}>
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

                    <a
                      className="work-item__link" href={data.url}
                      target="_blank"
                      rel="nofollow"
                      >
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
            <span className="page-header__nav page-header__nav_prev icon-left-arrow disabled"/>
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
}

CasesPage.contextTypes = {
  metaData: React.PropTypes.object.isRequired
};

export default CasesPage;