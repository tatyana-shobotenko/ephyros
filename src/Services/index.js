var React = require('react');
var Link  = require('react-router').Link;
var BottomMenu  = require('../components/BottomMenu');

var servicesData = require('../data/servicesData');

var Services = React.createClass({
  contextTypes: {
    metaData: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    this.context.metaData.setTitle('Services');
    this.context.metaData.setDescription(
      'Create a unique web services and web applications for the benefit of mankind.');
  },
  render() {
    var services = servicesData
      .map((data, index)=> {
        if (index % 2) {
          return (
            <div className="service-item service-item_gray">
              <div className="center-wrapper">
                <div className="gcontainer">
                  <div className="service-item__pic">
                    <img src={data.icon} alt={data.title}/>
                  </div>
                  <div className="service-item__desc">
                    <h2 className="service-item__title">{data.title}</h2>
                    <div className="service-item__text" dangerouslySetInnerHTML={{__html:data.text}}/>
                    <a className="button button_blue" href={data.url}>See An Example</a>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        else {
          return (
            <div className="service-item">
              <div className="center-wrapper">
                <div className="gcontainer">
                  <div className="service-item__desc">
                    <h2 className="service-item__title">{data.title}</h2>

                    <div className="service-item__text" dangerouslySetInnerHTML={{__html:data.text}}/>
                    <a className="button button_blue" href={data.url}>See An Example</a>
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
    var servicesBrief = servicesData
      .map((data, index)=> {
        return (
          <div className="service-brief">
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

            <h2 className="screen-title screen-title_dark screen-epilogue__title">Any questions?</h2>
            <a href="mailto:pm@ephyros.com" className="button button_rainbow">Request a free quote</a>
          </div>
        </div>
        <BottomMenu/>
      </div>
    );
  }
});
module.exports = Services;
