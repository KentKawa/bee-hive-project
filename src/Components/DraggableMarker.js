import { useState, useRef, useMemo } from "react";
import { useMapEvents, Marker } from "react-leaflet";
import beeIcon from "../Components/BeeIcon";

const DraggableMarker = (props) => {
  const [position, setPosition] = useState([0, 0]);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition([marker.getLatLng().lat, marker.getLatLng().lng]);
        }
      }
    }),
    []
  );
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    }
  });

  props.location.current = position;
  return (
    <Marker
      icon={beeIcon}
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    ></Marker>
  );
};

export default DraggableMarker;
