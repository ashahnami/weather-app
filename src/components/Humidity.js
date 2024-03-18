import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/humidity.css";

function Humidity() {
  const [location, setLocation] = useContext(LocationContext);
  const [humidity, setHumidity] = useState(null);

  const fetchData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setHumidity(response.data);
      });
  };

  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="humidity">
      {humidity ? (
        <>
          <div className="title">Humidity</div>

          <div className="percentage">{humidity.main.humidity}%</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Humidity;
