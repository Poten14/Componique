"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CodeBox_1 = __importDefault(require("@components/CodeBox"));
const dynamic_1 = __importDefault(require("next/dynamic"));
// Dynamic import for SSR-disabled map components
const DynamicMap = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("../../../components/Map/MapBasic"))), {
    ssr: false,
    loading: () => (0, jsx_runtime_1.jsx)("p", { children: "\uC9C0\uB3C4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..." }),
});
const DynamicMapPosition = (0, dynamic_1.default)(() => Promise.resolve().then(() => __importStar(require("../../../components/Map/MapPosition"))), {
    ssr: false,
    loading: () => (0, jsx_runtime_1.jsx)("p", { children: "\uC9C0\uB3C4\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..." }),
});
const MapComponentsDocs = () => {
    const [copied, setCopied] = (0, react_1.useState)({});
    const handleCopy = (index) => {
        setCopied((prev) => ({ ...prev, [index]: true }));
        setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 500);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prose max-w-[850px] p-5 text-[#6D6D6D] dark:text-[#bdbdbd]", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "1. MapBasic" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "MapBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC11C\uC6B8\uC744 \uC911\uC2EC\uC73C\uB85C \uD55C \uAE30\uBCF8\uC801\uC778 \uC9C0\uB3C4\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 Leaflet\uACFC React Leaflet\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC9C0\uB3C4\uB97C \uB80C\uB354\uB9C1\uD558\uBA70, \uB9C8\uCEE4\uB97C \uD1B5\uD574 \uC704\uCE58\uB97C \uD45C\uC2DC\uD569\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DynamicMap from './DynamicMap';`, copyText: `import DynamicMap from './DynamicMap';`, language: "tsx", index: 0, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(DynamicMap, {}) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DynamicMap from './DynamicMap';

function Example() {
  return <DynamicMap />;
}

export default Example;`, copyText: `import DynamicMap from './DynamicMap';

function Example() {
  return <DynamicMap />;
}

export default Example;`, language: "tsx", index: 1, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "MapBasic" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 Props\uB97C \uAC00\uC9D1\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" }), (0, jsx_runtime_1.jsx)("th", { children: "Default" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [(0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "center" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC9C0\uB3C4\uC758 \uC911\uC2EC \uC704\uCE58\uB97C \uC124\uC815\uD569\uB2C8\uB2E4 (\uC704\uB3C4, \uACBD\uB3C4)." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[number, number]" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "[37.5665, 126.978]" }) })] }), (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "zoom" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uAE30\uBCF8 \uC90C \uB808\uBCA8\uC744 \uC124\uC815\uD569\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "number" }) }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "10" }) })] })] })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "1.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import React from "react";
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

export default MapBasic;`, copyText: `import React from "react";
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

export default MapBasic;`, language: "tsx", index: 2, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-[#2D3748] dark:text-white", children: "2. MapPosition" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "MapPosition" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uC5EC\uB7EC \uC704\uCE58\uC5D0 \uB300\uD55C \uB9C8\uCEE4\uB97C \uC9C0\uB3C4\uC5D0 \uD45C\uC2DC\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC785\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC704\uCE58 \uC815\uBCF4\uB97C \uAC1D\uCCB4 \uBC30\uC5F4\uB85C \uC804\uB2EC\uD560 \uC218 \uC788\uC73C\uBA70, \uAC01 \uC704\uCE58\uC5D0 \uB9C8\uCEE4\uC640 \uD31D\uC5C5\uC774 \uB098\uD0C0\uB0A9\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.1. Import" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DynamicMapPosition from './DynamicMapPosition';`, copyText: `import DynamicMapPosition from './DynamicMapPosition';`, language: "tsx", index: 3, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.2. Usage" }), (0, jsx_runtime_1.jsx)("p", { children: "\uC5EC\uB7EC \uB9C8\uCEE4\uB97C \uD3EC\uD568\uD558\uB294 \uAE30\uBCF8 \uC0AC\uC6A9 \uC608\uC81C\uB294 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4:" }), (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: "20px" }, children: (0, jsx_runtime_1.jsx)(DynamicMapPosition, { markers: [
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
                    ] }) }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import DynamicMapPosition from './DynamicMapPosition';

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

export default Example;`, copyText: `import DynamicMapPosition from './DynamicMapPosition';

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

export default Example;`, language: "tsx", index: 4, copied: copied, handleCopy: handleCopy }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.3. Props" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("code", { children: "MapPosition" }), " \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 Props\uB97C \uBC1B\uC2B5\uB2C8\uB2E4:"] }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Prop" }), (0, jsx_runtime_1.jsx)("th", { children: "Description" }), (0, jsx_runtime_1.jsx)("th", { children: "Type" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("code", { children: "markers" }) }), (0, jsx_runtime_1.jsx)("td", { children: "\uC9C0\uB3C4\uC5D0 \uD45C\uC2DC\uD560 \uC704\uCE58 \uC815\uBCF4\uB97C \uD3EC\uD568\uD55C \uAC1D\uCCB4 \uBC30\uC5F4" }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsxs)("code", { children: ["Array<", `{ latitude: number, longitude: number, showPosition: string }`, ">"] }) })] }) })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-[#2D3748] dark:text-white", children: "2.4. Full Example" }), (0, jsx_runtime_1.jsx)(CodeBox_1.default, { code: `import React from "react";
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
export default MapPosition;`, copyText: `import React from "react";
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
export default MapPosition;`, language: "tsx", index: 5, copied: copied, handleCopy: handleCopy })] }));
};
exports.default = MapComponentsDocs;
