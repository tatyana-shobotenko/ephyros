import React, {Component} from 'react';
import {Link} from 'react-router';

import BottomMenu from '../components/BottomMenu';
import servicesData from '../data/servicesData';

class Services extends Component {
  componentWillMount() {
    this.context.metaData.setTitle('Services | Ephyros');
    this.context.metaData.setDescription(
      'Create a unique web services and web applications for the benefit of mankind.');
  }

  render() {
    const services = servicesData
      .map((data, index)=> {
        if (index % 2) {
          return (
            <div className="service-item service-item_gray" key={index}>
              <div className="center-wrapper">
                <div className="gcontainer">
                  <div className="service-item__pic">
                    <img src={data.icon} alt={data.title}/>
                  </div>
                  <div className="service-item__desc">
                    <h2 className="service-item__title">{data.title}</h2>

                    <div className="service-item__text" dangerouslySetInnerHTML={{__html: data.text}}/>

                    {data.link ? (<a className="button button_blue" href={data.link}>See An Example</a>) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        }
        else {
          return (
            <div className="service-item" key={index}>
              <div className="center-wrapper">
                <div className="gcontainer">
                  <div className="service-item__desc">
                    <h2 className="service-item__title">{data.title}</h2>

                    <div className="service-item__text" dangerouslySetInnerHTML={{__html: data.text}}/>
                    {data.link ? (<a className="button button_blue" href={data.link}>See An Example</a>) : null}
                  </div>
                  <div className="service-item__pic">
                    <img src={data.icon} alt={data.title}/>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      });

    const servicesBrief = servicesData
      .map((data, index)=> {
        return (
          <div className="service-brief" key={index}>
            <div className="service-brief__icon">
              <img src={data.icon} alt={data.title}/>
            </div>
            <div className="service-brief__title">{data.title}</div>
          </div>
        );
      });

    return (
      <div>
        <div className="page-header">
          <div className="center-wrapper relative">
            <Link to="/case" className="page-header__nav page-header__nav_prev icon-left-arrow"/>
            <Link to="/team" className="page-header__nav page-header__nav_next icon-right-arrow"/>

            <div className="page-header__title">Services</div>
          </div>
        </div>
        <div className="services-wrap">
          {services}
        </div>
        <div className="services-all">
          <div className="center-wrapper">
            <h2 className="screen-title text-center mb-70">All Our Services</h2>

            <div className="service-brief-wrap">
              {servicesBrief}
            </div>
          </div>
        </div>
        <div className="screen-epilogue screen-epilogue_in-services">
          <div className="center-wrapper text-center">
            <img src="images/logo_blue@2x.png" title="Ephyros" alt="Ephyros" className="screen-epilogue__logo"
                 width="166px" height="36px"/>

            <h2 className="screen-title screen-title_dark screen-epilogue__title">Do you have any questions?</h2>
            <a href="mailto:hello@ephyros.com" className="button button_rainbow">Request a free quote</a>
          </div>
        </div>
        <BottomMenu/>
      </div>
    );
  }
}

Services.contextTypes = {
  metaData: React.PropTypes.object.isRequired
};

export default Services;
