import React, { Component } from "react";
import { Map, GoogleApiWrapper, Polygon } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const testPoly = [
  { lat: 37.34852640277783, lng: -121.94073266535949 },
  { lat: 37.34847309653987, lng: -121.94090969115447 },
  { lat: 37.348357954936695, lng: -121.94083995372009 },
  { lat: 37.34836435169705, lng: -121.94080776721191 },
  { lat: 37.348338764652325, lng: -121.94079972058486 },
  { lat: 37.348389938733064, lng: -121.94064951688003 },
];

export class MapContainer extends Component {
  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    console.log("clice", lat, lng);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
          lat: 37.348923,
          lng: -121.938662,
        }}
        onClick={this.onClick}>
        <Polygon path={testPoly}></Polygon>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBExiDvTMBLk9JL7eGeyANVBpg9ctQKAis",
})(MapContainer);
