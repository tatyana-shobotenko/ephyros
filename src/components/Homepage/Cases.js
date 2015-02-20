var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="screen-cases">
        <div className="center-wrapper">
          <h1 className="screen-title">Selected cases</h1>
          <div className="hcases-list">
            <a href className="hcase hcase_big">
              <div className="hcase__img">
                <img src="content/hcases/mario.png" alt="proj name" />
              </div>
              <div className="hcase__info hcase__info_touch">
                <div className="hcase__info-inner">
                  <div className="hcase__section">logo / Web / Mobile web</div>
                  <div className="hcase__title">Sale Finder</div>
                </div>
                <div className="hcase__go-icon icon-right-arrow" />
              </div>
            </a>
            <a href className="hcase">
              <div className="hcase__img">
                <img src="content/hcases/uguide.png" alt="proj name" />
              </div>
              <div className="hcase__info">
                <div className="hcase__info-inner">
                  <div className="hcase__section">logo / Web / Mobile web</div>
                  <div className="hcase__title">Ukrainian Guide</div>
                </div>
                <div className="hcase__go-icon icon-right-arrow" />
              </div>
            </a>
            <a href className="hcase">
              <div className="hcase__img">
                <img src="content/hcases/jetame.png" alt="proj name" />
              </div>
              <div className="hcase__info">
                <div className="hcase__info-inner">
                  <div className="hcase__section">logo / Web / Mobile web</div>
                  <div className="hcase__title">Jetame</div>
                </div>
                <div className="hcase__go-icon icon-right-arrow" />
              </div>
            </a>
            <a href className="hcase">
              <div className="hcase__img">
                <img src="content/hcases/photomatic.png" alt="proj name" />
              </div>
              <div className="hcase__info hcase__info_touch">
                <div className="hcase__info-inner">
                  <div className="hcase__section">logo / Web / Mobile web</div>
                  <div className="hcase__title">Probniki</div>
                </div>
                <div className="hcase__go-icon icon-right-arrow" />
              </div>
            </a>
            <a href className="hcase">
              <div className="hcase__img">
                <img src="content/hcases/budemstroit.png" alt="proj name" />
              </div>
              <div className="hcase__info">
                <div className="hcase__info-inner">
                  <div className="hcase__section">logo / Web / Mobile web</div>
                  <div className="hcase__title">Будем строить</div>
                </div>
                <div className="hcase__go-icon icon-right-arrow" />
              </div>
            </a>
          </div>
          <a href className="button">All works</a>
        </div>
        <a className="scroll-btn scroll-btn_before-presentation">
          <i className="icon-down" />
        </a>
      </div>
    );
  }
});