import React, { useRef, useState, Component } from "react"
import GoogleMapReact from 'google-map-react';
import './Maps.css';
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

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
            text="Sun Devil Stadium"
          />
          <Marker lat={33.42649} lng={-111.93255} />
        </GoogleMapReact>
      </div>
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