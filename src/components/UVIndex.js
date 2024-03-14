import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../assets/uvindex.css';

function UVIndex({ lat, lon }) {
    const [UV, setUV] = useState({});

    useEffect(() => {
        axios
            .get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`
            )
            .then(function (response) {
                setUV(response.data.daily[0]);
            })
        })
  return (
    <div className='uvindex'>
        <div>UV Index</div>

        <div>{UV.uvi}</div>
    </div>
  )
}

export default UVIndex;
