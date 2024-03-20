import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/humidity.css";

function Humidity() {
  // Using useContext hook to access location data
  const [location, setLocation] = useContext(LocationContext);
  // Using useState hook to manage humidity state
  const [humidity, setHumidity] = useState(null);

  // fetch weather data from OpenWeatherMap API
  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setHumidity(response.data);
      });
  };

  // fetch data when location changes
  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="humidity">
      {humidity ? (
        <>
          <div className="title">Humidity</div>
          {/* Display Humidity % */}
          <div className="percentage">{humidity.main.humidity}%</div>
        </>
      ) : (
        // Display loading message while data fetching is occuring
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Humidity;
