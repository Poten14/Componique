"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { renderToString } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const MapPosition = ({ markers, }) => {
    const initialCenter = [36.5, 127.5]; //한반도 중심 위도, 경도
    const zoom = 7;
    const positionIcon = L.divIcon({
        html: renderToString(<FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }}/>), // React 아이콘 컴포넌트를 HTML로 렌더링
        className: "custom-marker-icon",
        iconSize: [24, 24],
        iconAnchor: [12, 24],
    });
    return (<div className="relative z-10">
      <MapContainer center={initialCenter} zoom={zoom} style={{ height: "500px", width: "100%" }} attributionControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {markers.map((marker, index) => (<Marker key={index} position={[marker.latitude, marker.longitude]} icon={positionIcon}>
            <Popup>{marker.showPosition}</Popup>
          </Marker>))}
      </MapContainer>
    </div>);
};
export default MapPosition;
