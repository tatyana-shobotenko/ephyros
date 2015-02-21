var React = require('react');


module.exports = React.createClass({
  render: function () {
    return (
      <div className="screen-epilogue">
        <div className="center-wrapper text-center">
          <img src="images/logo_blue@2x.png" title="Ephyros" alt="Ephyros" className="screen-epilogue__logo"
               width="166px" height="36px"/>

          <h2 className="screen-title screen-title_dark screen-epilogue__title">Entrust The Job To Professionals</h2>
          <a href="mailto:pm@ephyros.com" className="button button_rainbow">Get a quote</a>
        </div>
      </div>
    );
  }
});