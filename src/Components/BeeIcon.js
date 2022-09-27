import L from "leaflet";
import "leaflet/dist/leaflet.css";

const beeIcon = new L.icon({
  iconUrl: require("../Pages/bee.png"),
  iconRetinaUrl: require("../Pages/bee.png"),
  iconAnchor: [20, 30],
  popupAnchor: [-1, -23],
  iconSize: new L.Point(35, 35)
});
export default beeIcon;
