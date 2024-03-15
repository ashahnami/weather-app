import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/wind.css";

function Wind() {
  const [location, setLocation] = useContext(LocationContext);
  const [wind, setWind] = useState(null);

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setWind(response.data);
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
