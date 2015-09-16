import React, {Component} from 'react';

class ReadyMag extends Component {
  componentDidMount() {
    try {
      var t = 'RM_EMBED_' + window.parseInt((new Date()).getTime() / 864e5);
      if (!window[t] || !window[t].processing) {
        var embedMainScriptUri = 'https://readymag.com/specials/assets/embed_main.js';

        if (window[t] && typeof window[t].parse === 'function') {
          return void window[t].parse.call(window);
        }
        var i = window[t] = {};
        i.processing = true;

        window.setTimeout(function () {
          var e = document.getElementsByTagName('script')[0];
          var n = document.createElement('script');
          n.type = 'text/javascript';
          n.async = true;
          n.defer = true;
          n.src = embedMainScriptUri + '?' + t;
          e.parentNode.insertBefore(n, e);
        }, 10);
      }
    } catch (e) {
      console.error('Error loading Readymag embed script: \n' + (e.stackTrace || e.stack));
    }
  }

  render() {
    return (
      <a className="rm-mag-embed" href={'https://readymag.com/' + this.props.id}
         data-uri={this.props.id} target="_blank">https://readymag.com/{this.props.id}</a>
    );
  }
}

ReadyMag.propTypes = {
  id: React.propTypes.any.isRequired
};

export default ReadyMag;
