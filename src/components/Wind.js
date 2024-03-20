import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/wind.css";

function Wind() {
   // Using useContext hook to access location data
  const [location, setLocation] = useContext(LocationContext);
  // Using useState hook to manage weather details state
  const [wind, setWind] = useState(null);

  // function to convert degree of wind direction to compass direction
  const degreesToCompass = (degrees) => {
    let val = Math.floor(degrees / 22.5 + 0.5);
    let arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };

  // fetch data from OpenWeatherMap API
  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
      .then(function (response) {
        setWind(response.data.wind);
      });
  };

  // fetch data when location changes
  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="wind">
      {wind ? (
        <>
        <div>
          <div className="title">Wind</div>
          {/* Display wind direction and speed (using compass directions by calling function degreesToCompass) */}
          <div className="info">
            {degreesToCompass(wind.deg) + " " + Math.round(wind.speed)} mph
          </div>
        </div>

        {wind.gust ? (
        <div>
          <div className="title">Gust</div>
          {/* Displaying gust information  */}
          <div className="info">
            {Math.round(wind.gust)} mph
          </div>
        </div>
        ) : null }
        </>
      ) : (
        // Displaying loading message while fetching data
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Wind;
