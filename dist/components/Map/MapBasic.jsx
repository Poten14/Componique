"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_leaflet_1 = require("react-leaflet");
const fa_1 = require("react-icons/fa");
const server_1 = require("react-dom/server");
require("leaflet/dist/leaflet.css");
const leaflet_1 = __importDefault(require("leaflet"));
const customIcon = leaflet_1.default.divIcon({
    html: (0, server_1.renderToString)(<fa_1.FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }}/>), // React 아이콘 컴포넌트를 HTML로 렌더링
    className: "custom-marker-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
});
// 지도 중심과 줌 레벨 설정
const center = [37.5665, 126.978]; // 서울의 위도, 경도
const zoom = 10; // 기본 줌 레벨
const MapBasic = () => {
    return (<div className="relative z-10">
      <react_leaflet_1.MapContainer center={center} zoom={zoom} style={{ height: "400px", width: "100%" }}>
        <react_leaflet_1.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <react_leaflet_1.Marker position={center} icon={customIcon}>
          <react_leaflet_1.Popup>서울, 대한민국</react_leaflet_1.Popup>
        </react_leaflet_1.Marker>
      </react_leaflet_1.MapContainer>
    </div>);
};
exports.default = MapBasic;
