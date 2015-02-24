var React = require('react');

var ReadyMag = React.createClass({
  componentDidMount() {
    try {
      var t = "RM_EMBED_" + window.parseInt((new Date).getTime() / 864e5);
      if (!window[t] || !window[t].processing) {
        var embedMainScriptUri = 'https://readymag.com/specials/assets/embed_main.js';

        if (window[t] && "function" == typeof window[t].parse) {
          return void window[t].parse.call(window);
        }
        var i = window[t] = {};
        i.processing = true;

        window.setTimeout(function () {
          var e = document.getElementsByTagName("script")[0];
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = true;
          n.defer = true;
          n.src = embedMainScriptUri + "?" + t;
          e.parentNode.insertBefore(n, e)
        }, 10);
      }
    } catch (e) {
      console.error("Error loading Readymag embed script: \n" + (e.stackTrace || e.stack))
    }
  },
  shouldComponentUpdate(prev, next) {
    return prev.id !== next.id;
  },

  render() {
    return (
      <a className="rm-mag-embed" href={'https://readymag.com/'+this.props.id}
         data-uri={this.props.id} target="_blank">https://readymag.com/{this.props.id}</a>
    );
  }
});

module.exports = React.createClass({
  render() {
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
              {/*<a href>
               <div className="screen-presentation__pic"/>
               </a>*/}
              <ReadyMag id="43355"/>
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