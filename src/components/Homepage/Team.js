var React = require('react');


var membersData = [
  {
    photo: "https://pp.vk.me/c403822/v403822911/bc9c/cRWDciE413w.jpg",
    name: "Pavel Melnik",
    position: "product director"
  },
  {
    photo: "https://pp.vk.me/c403822/v403822911/bc9c/cRWDciE413w.jpg",
    name: "Tania Lyko",
    position: "Senior Frontend"
  },
  {
    photo: "https://pp.vk.me/c620028/v620028895/15307/17amHd6yRTQ.jpg",
    name: "Ania Shylina",
    position: "Frontend"
  },
  {
    photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.0.160.160/p160x160/10710847_503387579764891_7436691124456846245_n.jpg?oh=61bde0050e4ef4923aff0fe4784bf3ba&oe=552BD22E&__gda__=1428231420_2c5613a606d4403023e0893ab363906f",
    name: "Katia Rieznik",
    position: "product director"
  }
];


module.exports = React.createClass({
  render: function () {
    var members = membersData.map((member, index) => (
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
        <div className="center-wrapper">
          <h1 className="screen-title screen-title_margin-big">Team of Professionals</h1>

          <div className="hteam-list">
            {members}
            <a className="hteam-member ">
              <div className="hteam-member__photo hteam-member__photo_empty">
                <span className="icon-plus"/>
              </div>
              <div className="hteam-member__name">We are hiring</div>
              <div className="hteam-member__speciality hteam-member__speciality_future">Awesome developer...</div>
            </a>
          </div>
          <a className="button">All team</a>
        </div>
        <a className="scroll-btn scroll-btn_before-epilogue" href="#contact">
          <i className="icon-down"/>
        </a>
      </div>
    );
  }
});