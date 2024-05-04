import React, { useRef, useState }  from "react";
import L from "leaflet";
import  { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const LocationMarker = () => {
    const [position, setPosition] = useState(null);
    const map = useMap();
    useMapEvent('click', (e) => {
        setPosition(e.latlng)
        map.setView(e.latlng)
    })

    return position === null ? null : (
        <Marker position={position} >
            <Popup>You are here</Popup>
        </Marker>
    )

}


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
        {/* <Marker position = {[lat, longitude]}>
            <Popup>
                A pretty CSS3 Popup
            </Popup>
        </Marker> */}
        <LocationMarker />
        </MapContainer>
    )
}

export default SimpleMap;