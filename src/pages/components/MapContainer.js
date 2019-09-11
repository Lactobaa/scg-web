import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative',
  outline: 'none',
};

const options = {
  height: '450px',
}

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }

  displayMarkers = (info) => {
    return info.map((item, index) => {
      return <Marker key={index} id={index} position={{
        lat: item.geometry.location.lat,
        lng: item.geometry.location.lng,
      }}
        onClick={this.onMarkerClick}
        name={item.name}
      />
    })
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const { info } = this.props;
    console.log('info', info);

    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: 13.808244, lng: 100.5249902 }}
          style={mapStyles}
      >

          {this.displayMarkers(info)}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow>
        </Map>
      </div >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB9rJC8alNU5ijowpiazLwYyT6QtLJo7kU')
})(MapContainer)