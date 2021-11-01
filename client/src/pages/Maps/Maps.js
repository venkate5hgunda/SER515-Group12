import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.42649,
      lng: -111.93255
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDiR1Z9aS64bs4hVk9d2Fsc47Pga8ZUEQA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.42649}
            lng={-111.93255}
            text="Sun Devil Football Stadium"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;