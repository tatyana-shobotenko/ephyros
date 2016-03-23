import React, {Component} from 'react';

import registerGmaps from './registerGmaps';

class Map extends Component {
  attachMapHandler(elem) {
    if (elem === null) return;

    const callback = () => {
      const map = new google.maps.Map(elem, {
        scrollwheel: false,
        zoom: this.props.zoom,
        center: this.props.point,
      });

      const marker = new google.maps.Marker({
        position: this.props.point,
        map: map,
        title: 'Ephyros\'s head office',
      });

      const contentString = `
        <h2><b>Ephyros</b></h2>
        <hr>
        <p>18 Vasylia Lypkivskoho str., Kyiv, Ukraine, 03035</p>
        <hr>
        <p>email: hello@ephyros.com</p>
        <p>phone: +380 93 58-66-136</p>
        <p>skype: ephyros</p>`;

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    };

    registerGmaps(callback);
  }

  render() {
    return (
      <div style={{height: '100%'}} ref={elem => this.attachMapHandler(elem)}></div>
    );
  }
}

Map.propTypes = {
  zoom: React.PropTypes.number.isRequired,
  point: React.PropTypes.shape({
    lat: React.PropTypes.number,
    lng: React.PropTypes.number,
  }).isRequired,
};

export default Map;
