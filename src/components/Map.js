import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LocationContext } from '../context';

import '../assets/map.css';
import 'leaflet/dist/leaflet.css';

function Map() { 
  const [location, setLocation]  = useContext(LocationContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (location) {
      setIsLoaded(true);
    }
  }, [location])
  
  return (
    <>
    { isLoaded ? (
    <MapContainer 
      center={[location.lat, location.lon]} 
      zoom={5} 
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
    ) : <div>Loading...</div>}
    </>
  )
}

export default Map;
