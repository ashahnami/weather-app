import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/precipitation.css";

function Rainfall({ lat, lon }) {
  const [precip, setPrecip] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setPrecip(response.data.list);
        console.log(response.data.list);
      });
  }, []);

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
                  {isNaN(precipData.rain) ? "0" : Math.round(precipData.rain)}mm
                </p>
              </div>
              <div className="snowfall">
                <p>
                  Snowfall:{" "}
                  {isNaN(precipData.snow) ? "0" : Math.round(precipData.snow)}mm
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
