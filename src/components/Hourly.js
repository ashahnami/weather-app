import React, { useEffect, useState } from 'react';
import axios from 'axios';


import '../assets/hourly.css';

function Hourly({ lat, lon }) {

  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    axios
    .get(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(function (response) {
        setForecast(response.data.list);
        console.log(response.data.list);
    });

    
  }, [])

    return (
      
      <div className='hourly'>

         {forecast.slice(0, 8)?.map((hourlyData, index) => {

          return(

          

           <div key={index}>
            
          
            <div>
              <div className='time'>{new Date(hourlyData.dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
              <div className='icon'><img className='icon' src={`https://openweathermap.org/img/wn/${hourlyData.weather[0].icon}@2x.png`}></img></div>
              <div className='temperature'>{Math.round(hourlyData.main.temp)}°<span>±0.5</span></div>
              <div className='rainfall'>{hourlyData.pop*100}%</div>
            </div>
            
          
          </div>

          )
          

    })}

      </div>
    )
}

export default Hourly;
