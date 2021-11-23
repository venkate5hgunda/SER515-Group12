import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Maps.css';

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
        <>
            <div className="maps-page-heading">
            <h1>
              Location of Sun Devil Sports Complex
            </h1>
          </div>
          <div className="maps-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDiR1Z9aS64bs4hVk9d2Fsc47Pga8ZUEQA' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                  lat={33.42649}
                  lng={-111.93255}
                  text="SUN DEVIL STADIUM"
              />
              <Marker lat={33.42649} lng={-111.93255} />
            </GoogleMapReact>
          </div>
        </>

    );
  }
}

const Marker = props => {
  return <>
    <div className="pin"></div>
    <div className="pulse"></div>
  </>
}

export default SimpleMap;