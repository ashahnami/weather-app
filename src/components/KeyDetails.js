import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { LocationContext } from "../context";
import { MeteoconsSunsetFill } from "../assets/images/MeteoconsSunsetFill";
import "../assets/keydetails.css";

function KeyDetails() {
  const [location, setLocation] = useContext(LocationContext);
  const [details, setDetails] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    setDetails(response.data);
  };

  useEffect(() => {
    if (location) fetchData();
  }, [location]);

  return (
    <div className="keydetails">
      {details ? (
        <>
          <div className="toprow">
            <div className="location">{location.place}, {location.country}</div>

            <div className="sunset-sunrise">
              <MeteoconsSunsetFill />

              <p>
                Sunrise:{" "}
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

          <div className="temperature">
            {Math.round(details.main.temp)}°
            {/* <span className="range">±0.5</span> */}
          </div>

          <div className="alt-temperature">
            <p>Feels like {Math.round(details.main.feels_like)}°C</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default KeyDetails;
