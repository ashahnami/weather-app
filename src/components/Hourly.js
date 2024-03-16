import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { LocationContext } from '../context';

import '../assets/hourly.css';

function Hourly() {
  const [location, setLocation] = useContext(LocationContext);
  const [forecast, setForecast] = useState([]);

  const fetchData = () => {
    axios
    .get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(function (response) {
        setForecast(response.data.list);
        console.log(response.data.list[0])
    });
  }

  useEffect(() => {
    if (location) fetchData(); 
  }, [location])

    return (
      <div className='hourly'>
        {forecast.slice(0, 8)?.map((hourlyData, index) => {
        return (
          <div className='row' key={index}>
            <div className='time'>{new Date(hourlyData.dt * 1000).toLocaleTimeString('en-UK', {hour: '2-digit', minute:'2-digit', hour12: false})}</div>

            <div className='icon'><img className='icon' src={`https://openweathermap.org/img/wn/${hourlyData.weather[0].icon}@2x.png`}></img></div>

            <div className='temperature'>{Math.round(hourlyData.main.temp)}°</div>
            
            <div className='rainfall'>{Math.round(hourlyData.pop*100)}%</div>
          </div>
        )
        })}
      </div>
    )
}

export default Hourly;
