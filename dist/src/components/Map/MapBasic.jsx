"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const customIcon = L.divIcon({
    html: renderToString(<FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }}/>), // React 아이콘 컴포넌트를 HTML로 렌더링
    className: "custom-marker-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
});
// 지도 중심과 줌 레벨 설정
const center = [37.5665, 126.978]; // 서울의 위도, 경도
const zoom = 10; // 기본 줌 레벨
const MapBasic = () => {
    return (<div className="relative z-10">
      <MapContainer center={center} zoom={zoom} style={{ height: "400px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={center} icon={customIcon}>
          <Popup>서울, 대한민국</Popup>
        </Marker>
      </MapContainer>
    </div>);
};
export default MapBasic;
