"use client";
import React, { useState } from "react";
import CodeBox from "@components/CodeBox";
import dynamic from "next/dynamic";
// Dynamic import for SSR-disabled map components
const DynamicMap = dynamic(() => import("../../../components/Map/MapBasic"), {
    ssr: false,
    loading: () => <p>지도를 불러오는 중...</p>,
});
const DynamicMapPosition = dynamic(() => import("../../../components/Map/MapPosition"), {
    ssr: false,
    loading: () => <p>지도를 불러오는 중...</p>,
});
const MapComponentsDocs = () => {
    const [copied, setCopied] = useState({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return (<div className="prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]">
      {/* 1. MapBasic Component Introduction */}
      <h1 className="text-[#2D3748] dark:text-white">1. MapBasic</h1>
      <p>
        <code>MapBasic</code> 컴포넌트는 서울을 중심으로 한 기본적인 지도를
        렌더링하는 컴포넌트입니다. 이 컴포넌트는 Leaflet과 React Leaflet을
        사용하여 지도를 렌더링하며, 마커를 통해 위치를 표시합니다.
      </p>

      {/* 1.1. MapBasic Import */}
      <h2 className="text-[#2D3748] dark:text-white">1.1. Import</h2>
      <CodeBox code={`import DynamicMap from './DynamicMap';`} copyText={`import DynamicMap from './DynamicMap';`} language="tsx" index={0} copied={copied} handleCopy={handleCopy}/>

      {/* 1.2. MapBasic Usage */}
      <h2 className="text-[#2D3748] dark:text-white">1.2. Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <DynamicMap />
      </div>
      <CodeBox code={`import DynamicMap from './DynamicMap';

function Example() {
  return <DynamicMap />;
}

export default Example;`} copyText={`import DynamicMap from './DynamicMap';

function Example() {
  return <DynamicMap />;
}

export default Example;`} language="tsx" index={1} copied={copied} handleCopy={handleCopy}/>

      {/* 1.3. MapBasic Props */}
      <h2 className="text-[#2D3748] dark:text-white">1.3. Props</h2>
      <p>
        <code>MapBasic</code> 컴포넌트는 다음과 같은 Props를 가집니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>지도의 중심 위치를 설정합니다 (위도, 경도).</td>
            <td>
              <code>[number, number]</code>
            </td>
            <td>
              <code>[37.5665, 126.978]</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>zoom</code>
            </td>
            <td>기본 줌 레벨을 설정합니다.</td>
            <td>
              <code>number</code>
            </td>
            <td>
              <code>10</code>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 1.4. MapBasic Full Example */}
      <h2 className="text-[#2D3748] dark:text-white">1.4. Full Example</h2>
      <CodeBox code={`import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.divIcon({
  html: renderToString(
    <FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }} />,
  ),
  className: "custom-marker-icon",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

const center: L.LatLngExpression = [37.5665, 126.978];
const zoom = 10;

const MapBasic: React.FC = () => {
  return (
    <div className="relative z-10">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center} icon={customIcon}>
          <Popup>서울, 대한민국</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBasic;`} copyText={`import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.divIcon({
  html: renderToString(
    <FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }} />,
  ),
  className: "custom-marker-icon",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
});

const center: L.LatLngExpression = [37.5665, 126.978];
const zoom = 10;

const MapBasic: React.FC = () => {
  return (
    <div className="relative z-10">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center} icon={customIcon}>
          <Popup>서울, 대한민국</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBasic;`} language="tsx" index={2} copied={copied} handleCopy={handleCopy}/>
      <hr />
      {/* 2. MapPosition Component Introduction */}
      <h1 className="text-[#2D3748] dark:text-white">2. MapPosition</h1>
      <p>
        <code>MapPosition</code> 컴포넌트는 여러 위치에 대한 마커를 지도에
        표시하는 컴포넌트입니다. 사용자가 위치 정보를 객체 배열로 전달할 수
        있으며, 각 위치에 마커와 팝업이 나타납니다.
      </p>

      {/* 2.1. MapPosition Import */}
      <h2 className="text-[#2D3748] dark:text-white">2.1. Import</h2>
      <CodeBox code={`import DynamicMapPosition from './DynamicMapPosition';`} copyText={`import DynamicMapPosition from './DynamicMapPosition';`} language="tsx" index={3} copied={copied} handleCopy={handleCopy}/>

      {/* 2.2. MapPosition Usage */}
      <h2 className="text-[#2D3748] dark:text-white">2.2. Usage</h2>
      <p>여러 마커를 포함하는 기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <DynamicMapPosition markers={[
            { latitude: 37.5665, longitude: 126.978, showPosition: "서울" },
            { latitude: 35.1796, longitude: 129.0756, showPosition: "부산" },
            { latitude: 35.1595, longitude: 126.8526, showPosition: "광주" },
            { latitude: 35.5384, longitude: 129.3114, showPosition: "울산" },
            { latitude: 36.3504, longitude: 127.3845, showPosition: "대전" },
            { latitude: 35.8722, longitude: 128.6025, showPosition: "대구" },
            { latitude: 33.4996, longitude: 126.5312, showPosition: "제주" },
            { latitude: 34.9513, longitude: 127.4875, showPosition: "여수" },
            { latitude: 35.1802, longitude: 128.1076, showPosition: "진주" },
            { latitude: 37.4563, longitude: 126.7052, showPosition: "인천" },
        ]}/>
      </div>
      <CodeBox code={`import DynamicMapPosition from './DynamicMapPosition';

function Example() {
  const markers = [
    { latitude: 37.5665, longitude: 126.978, showPosition: "서울" },
    { latitude: 35.1796, longitude: 129.0756, showPosition: "부산" },
    { latitude: 35.1595, longitude: 126.8526, showPosition: "광주" },
    { latitude: 35.5384, longitude: 129.3114, showPosition: "울산" },
    { latitude: 36.3504, longitude: 127.3845, showPosition: "대전" },
    { latitude: 35.8722, longitude: 128.6025, showPosition: "대구" },
    { latitude: 33.4996, longitude: 126.5312, showPosition: "제주" },
    { latitude: 34.9513, longitude: 127.4875, showPosition: "여수" },
    { latitude: 35.1802, longitude: 128.1076, showPosition: "진주" },
    { latitude: 37.4563, longitude: 126.7052, showPosition: "인천" },
  ];

  return <DynamicMapPosition markers={markers} />;
}

export default Example;`} copyText={`import DynamicMapPosition from './DynamicMapPosition';

function Example() {
  const markers = [
    { latitude: 37.5665, longitude: 126.978, showPosition: "서울" },
    { latitude: 35.1796, longitude: 129.0756, showPosition: "부산" },
    { latitude: 35.1595, longitude: 126.8526, showPosition: "광주" },
    { latitude: 35.5384, longitude: 129.3114, showPosition: "울산" },
    { latitude: 36.3504, longitude: 127.3845, showPosition: "대전" },
    { latitude: 35.8722, longitude: 128.6025, showPosition: "대구" },
    { latitude: 33.4996, longitude: 126.5312, showPosition: "제주" },
    { latitude: 34.9513, longitude: 127.4875, showPosition: "여수" },
    { latitude: 35.1802, longitude: 128.1076, showPosition: "진주" },
    { latitude: 37.4563, longitude: 126.7052, showPosition: "인천" },
  ];

  return <DynamicMapPosition markers={markers} />;
}

export default Example;`} language="tsx" index={4} copied={copied} handleCopy={handleCopy}/>

      {/* 2.3. MapPosition Props */}
      <h2 className="text-[#2D3748] dark:text-white">2.3. Props</h2>
      <p>
        <code>MapPosition</code> 컴포넌트는 다음과 같은 Props를 받습니다:
      </p>
      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>markers</code>
            </td>
            <td>지도에 표시할 위치 정보를 포함한 객체 배열</td>
            <td>
              <code>
                Array&lt;
                {`{ latitude: number, longitude: number, showPosition: string }`}
                &gt;
              </code>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 2.4. MapPosition Full Example */}
      <h2 className="text-[#2D3748] dark:text-white">2.4. Full Example</h2>
      <CodeBox code={`import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface MapPositionProps {
  latitude: number;
  longitude: number;
  showPosition: string;
}

const MapPosition: React.FC<{ markers: MapPositionProps[] }> = ({ markers }) => {
  const initialCenter: L.LatLngExpression = [36.5, 127.5];
  const zoom = 7;

  const positionIcon = L.divIcon({
    html: renderToString(
      <FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }} />,
    ),
    className: "custom-marker-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });

  return (
    <div className="relative z-10">
      <MapContainer
        center={initialCenter}
        zoom={zoom}
        style={{ height: "500px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={positionIcon}
          >
            <Popup>{marker.showPosition}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default MapPosition;`} copyText={`import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface MapPositionProps {
  latitude: number;
  longitude: number;
  showPosition: string;
}

const MapPosition: React.FC<{ markers: MapPositionProps[] }> = ({ markers }) => {
  const initialCenter: L.LatLngExpression = [36.5, 127.5];
  const zoom = 7;

  const positionIcon = L.divIcon({
    html: renderToString(
      <FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }} />,
    ),
    className: "custom-marker-icon",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });

  return (
    <div className="relative z-10">
      <MapContainer
        center={initialCenter}
        zoom={zoom}
        style={{ height: "500px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={positionIcon}
          >
            <Popup>{marker.showPosition}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default MapPosition;`} language="tsx" index={5} copied={copied} handleCopy={handleCopy}/>
    </div>);
};
export default MapComponentsDocs;
