import React, {Component} from 'react';
import {Link} from 'react-router';

import BottomMenu from './BottomMenu';
import TeamSlides from './TeamSlides';


import teamData from './data/teamData';
import photoSlides from './data/team/photoSlides';

class Team extends Component {
  componentWillMount() {
    this.context.metaData.setTitle('Team | Ephyros');
    this.context.metaData.setDescription(
      'Ephyros is a team of developers who invent, think over, build, and improve. ' +
      'We collaborate with ambitious clients who want to bring powerful ideas to life. ' +
      'Love to create awesome web-services and applications.');
  }

  render() {
    const members = teamData.map((member, index) => (
      <div className="hteam-member team-member" key={index}>
        <div className="hteam-member__photo team-member__photo">
          <img src={member.photo} alt={member.name}/>

          <div className="photo-overlay"/>
        </div>
        <div className="hteam-member__name">{member.name}</div>
        <div className="hteam-member__speciality">{member.position}</div>
      </div>
    ));


    return (
      <div>
        <div className="page-header">
          <div className="center-wrapper relative">
            <Link to="/services" className="page-header__nav page-header__nav_prev icon-left-arrow"/>
            <Link to="/contact" className="page-header__nav page-header__nav_next icon-right-arrow"/>

            <div className="page-header__title">Team</div>
          </div>
        </div>
        <div className="center-wrapper">
          <div className="gcontainer">
            <div className="about-us-text">
              <h2 className="simple-title">Who we are?</h2>

              <p>Ephyros is a team of developers who invent, think over, build, and improve. We collaborate with
                ambitious clients who want to bring powerful ideas to life. Love to create awesome web-services and
                applications.</p>
            </div>
            <div className="about-us-slider">
              <img src={require('./data/team/slides/teamNY.jpg')}/>
              {
                //<div className="about-us-slider__page active"/>
                //<div className="about-us-slider__page"/>
                //<div className="about-us-slider__page"/>
                //<div className="about-us-slider__page"/>
              }
            </div>
          </div>
        </div>
        <div className="screen-team">
          <div className="center-wrapper screen-table">
            <div className="screen-table__cell">
              <h1 className="screen-title screen-title_margin-big">Our band</h1>

              <div className="hteam-list">
                {members}
                <a className="hteam-member" href="mailto:job@ephyros.com" target="_blank">
                  <div className="hteam-member__photo hteam-member__photo_empty">
                    <span className="icon-plus"/>
                  </div>
                  <div className="hteam-member__name">We are hiring</div>
                  <div className="hteam-member__speciality hteam-member__speciality_future">Awesome developer...</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Slides slides={photoSlides}/>

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

Team.contextTypes = {
  metaData: React.PropTypes.object.isRequired
};

export default Team;
