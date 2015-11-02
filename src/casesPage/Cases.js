import React, {Component} from 'react';
import casesData from './../data/casesData';
import Link from './../router/Link';
import BottomMenu from './../views/BottomMenu';
import Layout from './../views/Layout';

class CasesPage extends Component {

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
                      onClick={()=>{window.gae('works', 'click', `work_${data.slug}`, 30)}}
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
      <Layout>
        <div className="page-header">
          <div className="center-wrapper relative">
            <span className="page-header__nav page-header__nav_prev icon-left-arrow disabled"/>
            <Link route="services" className="page-header__nav page-header__nav_next icon-right-arrow"/>

            <div className="page-header__title">Work</div>
          </div>
        </div>
        <div className="work-wrap">
          {cases}
        </div>
        <BottomMenu/>
      </Layout>
    );
  }
}

export default CasesPage;
