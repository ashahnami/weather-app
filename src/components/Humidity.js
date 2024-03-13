import React, { useEffect, useState } from "react";
import axios from "axios";

import "../assets/humidity.css";

function Humidity({ lat, lon }) {
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(function (response) {
        setHumidity(response.data);
        console.log(response.data);
      });
  }, [lat, lon]);

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
