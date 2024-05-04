import React, { useRef }  from "react";
import L from "leaflet";
import  { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const SimpleMap = () => {
    const mapRef = useRef(null);
    const lat = 19.085649;
    const longitude = 72.908218;

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <MapContainer center={[lat, longitude]} zoom = {13}  ref = {mapRef} style={{height: "100vh", width: "100vw"}}>
            <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position = {[lat, longitude]}>
            <Popup>
                A pretty CSS3 Popup
            </Popup>
        </Marker>
        </MapContainer>
    )
}

export default SimpleMap;