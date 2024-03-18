import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { LocationContext } from '../context';

import '../assets/daily.css';

function Daily() {
    const [location, setLocation] = useContext(LocationContext);
    const [forecast, setForecast] = useState([]);
    const weekdays = ['Sun','Mon',"Tue","Wed","Thu","Fri","Sat"];
    let cnt=8;
    
    const fetchData = () => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${location.lat}&lon=${location.lon}&cnt=${cnt}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(function (response) {
            setForecast(response.data.list);
        });
    }
    
    useEffect(() => {
        if (location) fetchData();
    }, [location])

  return (
    <div className='daily'>
        {forecast.map((day, index) => {
            return (
                <div className='row' key={index}>
                    <div className='day'>
                        {index === 0 ? (
                            "Today" 
                            ) : ( 
                            weekdays[new Date(day.dt * 1000).getDay()]
                        )}
                    </div>

                    <div>
                        <img className='icon' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}></img>
                    </div>

                    <div className='temperature'>
                        <div>{Math.round(day.temp.min)}°</div>
                        <div>/</div>
                        <div>{Math.round(day.temp.max)}°</div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Daily;
