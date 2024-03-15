import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LocationContext } from "../context";

import "../assets/keydetails.css";

function KeyDetails() {
  const [details, setDetails] = useState(null);
  const [location, setLocation] = useContext(LocationContext)

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    setDetails(response.data);
    console.log(response.data)
  };

  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="keydetails">
      {details ? (
        <>
          <div className="location">
            {details.name}
            <span className="SrSs">
              <p>
                {" "}
                Sunrise:{" "}
                {new Date(details.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                || Sunset:{" "}
                {new Date(details.sys.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
              </p>
            </span>
          </div>
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
