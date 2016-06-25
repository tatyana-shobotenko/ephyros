import React from 'react';
import ReadyMag from './ReadyMag';

function Presentation() {
  return (
    <div id="presentation" className="screen-presentation">
      <div className="center-wrapper screen-table">
        <div className="gcontainer screen-table__cell">
          <div className="screen-presentation__info">
            <h1 className="screen-title screen-title_dark">
              Please take a look at our short presentation
            </h1>
          </div>
          <div className="screen-presentation__pic-wrap">
            {/*
             <a href>
             <div className="screen-presentation__pic"/>
             </a>
             */}
            <ReadyMag id="43355" />
          </div>
        </div>
      </div>
      <Link className="scroll-btn scroll-btn_before-team" hasg="team" route="home">
        <i className="icon-down" />
      </Link>
    </div>
  );
}

export default Presentation;
