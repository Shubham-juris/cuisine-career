import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import darkMapStyle from "../Maps/darkMapStyle"

const containerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "12px"
};

const center = {
  lat: 51.0805,   // Calgary Indian Vegetarian Restaurant approx lat
  lng: -114.001   // Calgary approx lng
};

export default function DarkMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyXXXXXXXXXX">
  <GoogleMap
    mapContainerStyle={containerStyle}
    center={center}
    zoom={15}
    options={{ styles: darkMapStyle, disableDefaultUI: true }}
  >
    {/* Optional Marker (still works, but deprecated notice will show) */}
    {/* <Marker position={center} /> */}
  </GoogleMap>
</LoadScript>

  );
}
