import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../assets/info.css";
import NavBar from "../components/NavBar";
import KeyDetails from "../components/KeyDetails";
import Hourly from "../components/Hourly";
import Daily from "../components/Daily";
import Map from "../components/Map";
import Humidity from "../components/Humidity";
import Wind from "../components/Wind";
import Rainfall from "../components/Rainfall";

function InfoPage() {
  let location = useLocation();
  let place = location.state ? location.state.place : "London";
  let lat = location.state ? location.state.lat : 51.5072;
  let lon = location.state ? location.state.lon : 0.1276;

  useEffect(() => {
    document.title = "Weather";
  });

  return (
    <div className="info">
      <NavBar />

      <div className="info-container">
        <div className="flexbox-container row1">
          <div className="flexbox-item">
            <KeyDetails place={place} lat={lat} lon={lon} />
          </div>

          <div className="flexbox-item">
            <Map lat={lat} lon={lon} />
          </div>
        </div>

        <div className="flexbox-container row2">
          <div className="flexbox-item">
            <Hourly lat={lat} lon={lon} />
          </div>
        </div>

        <div className="flexbox-container">
          <div className="flexbox-item-bottom-row">
            <div className="flexbox-container">
              <div className="flexbox-item"></div>
            </div>

            <div className="flexbox-container">
              <div className="flexbox-item">
                <Humidity lat={lat} lon={lon} />
              </div>
              <div className="flexbox-item">
                <Wind lat={lat} lon={lon} />
              </div>
            </div>
          </div>

          <div className="flexbox-item-bottom-row">
            <div className="flexbox-container middle">
              <div className="flexbox-item">
                <Daily lat={lat} lon={lon} />
              </div>
            </div>
          </div>

          <div className="flexbox-item-bottom-row">
            <div className="flexbox-container">
              <div className="flexbox-item">
                <Rainfall lat={lat} lon={lon} />
              </div>
            </div>

            <div className="flexbox-container">
              <div className="flexbox-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
