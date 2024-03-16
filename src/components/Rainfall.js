import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/precipitation.css";

function Rainfall() {
  const [location, setLocation] = useContext(LocationContext);
  const [precip, setPrecip] = useState([]);

  const fetchData = () => {
    axios
    .get(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setPrecip(response.data.list);
      });
  }

  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="precipitation">
      {precip.slice(0, 1)?.map((precipData, index) => {
        return (
          <div key={index}>
            <div>
              <div className="title">Precipitation</div>
              
              <div className="rainfall">
                <p>
                  Rainfall:{" "}
                  {isNaN(precipData.rain?.["1h"])
                    ? "0"
                    : Math.round(precipData.rain["1h"])}
                  mm
                </p>
              </div>

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
