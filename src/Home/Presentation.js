var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="presentation" className="screen-presentation">
        <div className="center-wrapper">
          <div className="gcontainer">
            <div className="screen-presentation__info">
              <div className="screen-presentation__label">presentation</div>
              <h1 className="screen-title screen-title_dark">
                Need a team of experienced developers?
              </h1>
              <a className="button button_rainbow">Watch presentation</a>
            </div>
            <div className="screen-presentation__pic-wrap">
              <a href>
                <div className="screen-presentation__pic"/>
              </a>
            </div>
          </div>
        </div>
        <a className="scroll-btn scroll-btn_before-team" href="#team">
          <i className="icon-down"/>
        </a>
      </div>
    );
  }
});