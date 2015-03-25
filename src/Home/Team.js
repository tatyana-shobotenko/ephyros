var React = require('react');


var teamData = require('../data/teamData');


module.exports = React.createClass({
  render() {
    var members = teamData.map((member, index) => (
      <a className="hteam-member" key={index}>
        <div className="hteam-member__photo">
          <img src={member.photo} alt={member.name}/>
        </div>
        <div className="hteam-member__name">{member.name}</div>
        <div className="hteam-member__speciality">{member.position}</div>
      </a>
    ));

    return (
      <div className="screen-team">
        <div className="center-wrapper screen-table">
          <div className="screen-table__cell">
            <h1 className="screen-title screen-title_margin-big">Our Band</h1>

            <div className="hteam-list">
              {members}
              <a className="hteam-member " href="mailto:job@ephyros.com" target="_blank">
                <div className="hteam-member__photo hteam-member__photo_empty">
                  <span className="icon-plus"/>
                </div>
                <div className="hteam-member__name">We are hiring</div>
                <div className="hteam-member__speciality hteam-member__speciality_future">Awesome developer...</div>
              </a>
            </div>
            <a className="button">All team</a>
          </div>
        </div>
        <a className="scroll-btn scroll-btn_before-epilogue" href="#contact">
          <i className="icon-down"/>
        </a>
      </div>
    );
  }
});
