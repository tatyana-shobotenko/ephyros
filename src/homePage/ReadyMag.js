import React, {Component} from 'react';

class ReadyMag extends Component {
  componentDidMount() {
    try {
      const t = 'RM_EMBED_' + window.parseInt((new Date()).getTime() / 864e5);
      if (!window[t] || !window[t].processing) {
        const embedMainScriptUri = 'https://readymag.com/specials/assets/embed_main.js';

        if (window[t] && typeof window[t].parse === 'function') {
          return void window[t].parse.call(window);
        }
        const i = window[t] = {};
        i.processing = true;

        window.setTimeout(function() {
          const e = document.getElementsByTagName('script')[0];
          const n = document.createElement('script');
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
  id: React.PropTypes.any.isRequired,
};

export default ReadyMag;
