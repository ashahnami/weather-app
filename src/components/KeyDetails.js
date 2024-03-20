import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { LocationContext } from "../context";
import { MeteoconsSunsetFill } from "../assets/images/MeteoconsSunsetFill";
import "../assets/keydetails.css";

function KeyDetails() {
  // Using useContext hook to access location data
  const [location, setLocation] = useContext(LocationContext);

  // Using useState hook to manage weather details state
  const [details, setDetails] = useState(null);

  // fetch weather data from OpenWeatherMap API
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    setDetails(response.data);
  };

  // fetch data when location changes
  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="keydetails">
      {details ? (
        <>
          {/* Display location country and city */}
          <div className="toprow">
            <div className="location">{location.place}, {location.country}</div>

            {/* Display sunrise and sunset times */}
            <div className="sunset-sunrise">
              <MeteoconsSunsetFill />

              <p>
                Sunrise:{" "}
                {/* Convert Unix timestamp to a local time string*/}
                {new Date(details.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
                {" || Sunset: "}
                {new Date(details.sys.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </p>
            </div>
          </div>

          {/* Display current temperature */}
          <div className="temperature">
            {Math.round(details.main.temp)}°
            {/* <span className="range">±0.5</span> */}
          </div>

          {/* Display current feels-like temperature */}
          <div className="alt-temperature">
            <p>Feels like {Math.round(details.main.feels_like)}°C</p>
          </div>
        </>
      ) : (
        // Display loading message while data fetching is occuring
        <p>Loading...</p>
      )}
    </div>
  );
}

export default KeyDetails;
