import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const position = [40.7128, -74.0060]; 
    return (
        <MapContainer center={position} zoom={13} style={{ height: '343px', width: '516px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default MapComponent;
