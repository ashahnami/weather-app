import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/precipitation.css";

function Rainfall() {
  // Using useContext hook to access location data
  const [location, setLocation] = useContext(LocationContext);
  // Using useState hook to manage precipitation state
  const [precip, setPrecip] = useState([]);

  // fetch weather data from OpenWeatherMap API
  const fetchData = () => {
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setPrecip(response.data.list);
      });
  };

  // fetch data when location changes
  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="precipitation">
      {/* Map through the first element of the data */}
      {precip.slice(0, 1)?.map((precipData, index) => {
        return (
          <div key={index}>
            <div>
              <div className="title">Precipitation</div>
              {/* Display rainfall data - if rainfall is NaN, display 0 */}
              <div className="rainfall">
                <p>
                  Rainfall:{" "}
                  {isNaN(precipData.rain?.["1h"])
                    ? "0"
                    : Math.round(precipData.rain["1h"])}
                  mm
                </p>
              </div>
              {/* Display snowfall data - if snowfall is Nan, display 0 */}
              <div className="snowfall">
                <p>
                  Snowfall:{" "}
                  {isNaN(precipData.snow?.["1h"])
                    ? "0"
                    : Math.round(precipData.snow["1h"])}
                  mm
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Rainfall;
