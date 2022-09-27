import { MapContainer, TileLayer, Marker } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import beeIcon from "../Components/BeeIcon";

export default function Map(props) {
  return (
    <MapContainer
      style={{ height: "50vh" }}
      center={props.latlng ? props.latlng : [51.505, -0.09]}
      minZoom={3}
      zoom={18}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors<br/><a href="https://www.flaticon.com/free-icons/bee" title="bee icons">Bee icons created by Freepik - Flaticon</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={beeIcon} position={props.latlng}></Marker>
    </MapContainer>
  );
}
