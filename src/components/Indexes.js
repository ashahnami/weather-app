import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../context';

import '../assets/indexes.css';

function UVIndex() {
  const [location, setLocation] = useContext(LocationContext);
  const [UV, setUV] = useState({});
  const [airPollution, setAirPollution] = useState({});

  const determineClass = (value) => {
    let colorClass = '';

    if (value >= 11) {
      colorClass = '#8f3f97';
    } else if (value >= 8) {
      colorClass = '#ff0000';
    } else if (value >= 6) {
      colorClass = '#ff7e00';
    } else if (value >= 3) {
      colorClass = '#ffff00';
    } else {
      colorClass = '#00e400';
    }

    return {'background': colorClass};
  }

  const determineAqiClass = (value) => {
    let colorClass = '';

    if (value >= 301) {
      colorClass = '#7e0023';
    } else if (value >= 201) {
      colorClass = '#8f3f97';
    } else if (value >= 151) {
      colorClass = '#ff0000';
    } else if (value >= 101) {
      colorClass = '#ff7e00';
    } else if (value >= 51) {
      colorClass = '#ffff00';
    } else {
      colorClass = '#00e400';
    }

    return {'background': colorClass};
  }

  const fetchData = () => {
    // axios
    //   .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`)
    //   .then(function (response) {
    //       setUV(response.data.daily[0].uvi);
    //     })

    // axios
    //   .get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`)
    //   .then(function (response) {
    //       setAirPollution(response.data.list[0].main.aqi);
    //     })
    setUV(3);
    setAirPollution(2);
  }

  useEffect(() => {
    if (location) fetchData();
  }, [location])

  return (
    <div className='uvindex'>
      <div className='index'>
        <div className='title'>UV Index</div>

        <div className='class' style={determineClass(UV.uvi)}>
          {Math.round(UV)}
        </div>
      </div>

      <div className='index'>
        <div className='title'>Air Pollution</div>

        <div className='class' style={determineAqiClass(UV.uvi)}>
          {Math.round(UV)}
        </div>
      </div>
    </div>
  )
}

export default UVIndex;
