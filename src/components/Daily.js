import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../assets/daily.css';

function Daily() {
    const [forecast, setForecast] = useState([]);

    /* just test coordinates for London */
    let lat=51.5072;
    let lon=0.1276;
    /* number of days forecast to receive */
    let cnt=8;
    
    useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(function (response) {
            setForecast(response.data.list);
            console.log(response.data.list);
        });
    }, [])

  return (
    <div className='daily'>
        {forecast.map((x, index) => {
            return (
                <div className='row' key={index}>
                    <div className='day'>Day</div>
                    <div><img className='icon' src={`https://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`}></img></div>
                    <div className='temperature'>
                        <div>{Math.round(x.temp.min)}°</div>
                        <div>/</div>
                        <div>{Math.round(x.temp.max)}°</div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Daily;
