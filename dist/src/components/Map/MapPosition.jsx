"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_leaflet_1 = require("react-leaflet");
const server_1 = require("react-dom/server");
const fa_1 = require("react-icons/fa");
require("leaflet/dist/leaflet.css");
const leaflet_1 = __importDefault(require("leaflet"));
const MapPosition = ({ markers, }) => {
    const initialCenter = [36.5, 127.5]; //한반도 중심 위도, 경도
    const zoom = 7;
    const positionIcon = leaflet_1.default.divIcon({
        html: (0, server_1.renderToString)(<fa_1.FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }}/>), // React 아이콘 컴포넌트를 HTML로 렌더링
        className: "custom-marker-icon",
        iconSize: [24, 24],
        iconAnchor: [12, 24],
    });
    return (<div className="relative z-10">
      <react_leaflet_1.MapContainer center={initialCenter} zoom={zoom} style={{ height: "500px", width: "100%" }} attributionControl={false}>
        <react_leaflet_1.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {markers.map((marker, index) => (<react_leaflet_1.Marker key={index} position={[marker.latitude, marker.longitude]} icon={positionIcon}>
            <react_leaflet_1.Popup>{marker.showPosition}</react_leaflet_1.Popup>
          </react_leaflet_1.Marker>))}
      </react_leaflet_1.MapContainer>
    </div>);
};
exports.default = MapPosition;
