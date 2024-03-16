import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../context';

import '../assets/uvindex.css';

function UVIndex() {
  const [location, setLocation] = useContext(LocationContext);
  const [UV, setUV] = useState({});

  const determineClass = (value) => {
    let colorClass = '';

    if (value >= 11) {
      colorClass = 'purple';
    } else if (value >= 8) {
      colorClass = 'red';
    } else if (value >= 6) {
      colorClass = 'orange';
    } else if (value >= 3) {
      colorClass = 'yellow';
    } else {
      colorClass = 'green';
    }

    return {'background': colorClass};
  }

  const fetchData = () => {
    // axios
    //   .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`)
    //   .then(function (response) {
    //       setUV(response.data.daily[0].uvi);
    //     })
    setUV(3)
  }

  useEffect(() => {
    if (location) fetchData();
  }, [location])

  return (
    <div className='uvindex'>
        <div className='title'>UV Index</div>

        <div className='class' style={determineClass(UV.uvi)}>
          {Math.round(UV)}
        </div>
    </div>
  )
}

export default UVIndex;
