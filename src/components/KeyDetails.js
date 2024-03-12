import React, { useEffect, useState } from "react";
import axios from "axios";

import "../assets/keydetails.css";

function KeyDetails({ place, lat, lon }) {
  const [details, setDetails] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    setDetails(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="keydetails">
      {details ? (
        <>
          <div className="location">{place}</div>
          <div className="temperature">
            {Math.round(details.main.temp)}°<span className="range">±0.5</span>
          </div>
          <div className="alt-temperature">
            <p>
              Feels like <span>{Math.round(details.main.feels_like)}°C</span>
            </p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default KeyDetails;
