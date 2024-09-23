import "leaflet/dist/leaflet.css";
export interface MapPositionProps {
    latitude: number;
    longitude: number;
    showPosition: string;
}
declare const MapPosition: React.FC<{
    markers: MapPositionProps[];
}>;
export default MapPosition;
