import { useMap, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React from "react";
import data from "../userData.json";
import "leaflet/dist/leaflet.css";
import beeIcon from "../Components/BeeIcon";

//Buttons that fly to Markers
const FlyToButton = (props) => {
  const map = useMap();
  if (props.latlng.length > 0) {
    const clickHandler = () => map.flyTo(props.latlng, 15);
    return (
      <button
        style={{ opacity: "98%" }}
        className="btn btn-secondary border btn-sm"
        onClick={clickHandler}
      >
        {props.name}
      </button>
    );
  } else return;
};

//Markers on map
const PopupMarkers = (props) => {
  if (props.latlng.length > 0) {
    return (
      <Marker title={props.name} icon={beeIcon} position={props.latlng}>
        <Popup>
          {props.name} WT:{props.weight}
          <br />
          {props.temperament}
        </Popup>
      </Marker>
    );
  } else return;
};

export default function MapPage(props) {
  return (
    <>
      <MapContainer
        style={{ height: "100vh" }}
        center={props.latlng ? props.latlng : [51.505, -0.09]}
        zoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors<br/><a href="https://www.flaticon.com/free-icons/bee" title="bee icons">Bee icons created by Freepik - Flaticon</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.hiveList.map((ele) => {
          return (
            <PopupMarkers
              latlng={ele.location}
              name={ele.name}
              weight={ele.weight}
              temperament={ele.temperament}
            />
          );
        })}
        <div
          style={{ zIndex: 900 }}
          className="fixed-top row justify-content-end"
        >
          <ul
            style={{ height: "60vh", overflowY: "scroll" }}
            className="mx-3 col-sm-3 row h-100"
          >
            {data.hiveList.map((ele) => {
              console.log(ele.location, ele.name);
              return <FlyToButton latlng={ele.location} name={ele.name} />;
            })}
          </ul>
        </div>
      </MapContainer>
    </>
  );
}
