import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import '../assets/map.css';
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <MapContainer 
      center={[51.5072, 0.1276]} 
      zoom={13} 
      scrollWheelZoom={false} 
      className='map'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <TileLayer 
        url={`http://maps.openweathermap.org/maps/2.0/weather/PR0/{z}/{x}/{y}?appid=${process.env.REACT_APP_API_KEY}`}
      />
    </MapContainer>
  )
}

export default Map;
