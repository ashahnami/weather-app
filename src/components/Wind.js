import React, { useEffect, useState } from "react";
import axios from "axios";

import "../assets/wind.css";
function Wind({ lat, lon }) {
  const [wind, setWind] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setWind(response.data);
        console.log(response.data);
      });
  }, [lat, lon]);

  return (
    <div className="wind">
      {wind ? (
        <>
          <div className="title">Wind</div>
          <div className="speed">
            {wind.wind.speed}m/s{" "}
            <span className="direction">{wind.wind.deg}°</span>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Wind;
