import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/wind.css";

function Wind() {
  const [location, setLocation] = useContext(LocationContext);
  const [wind, setWind] = useState(null);

  const degreesToCompass = (degrees) => {
    let val = Math.floor(degrees / 22.5 + 0.5);
    let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[val % 16];
  }

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
      .then(function (response) {
        setWind(response.data.wind);
      });
  }

    useEffect(() => {
      if (location) fetchData();
    }, [location])

  return (
    <div className="wind">
      {wind ? (
        <>
          <div className="title">Wind</div>
          
          <div className="info">
            {degreesToCompass(wind.deg) + ' ' + Math.round(wind.speed)}mph
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Wind;
