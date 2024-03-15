import React, { useEffect } from "react";

import "../assets/info.css";
import NavBar from "../components/NavBar";
import KeyDetails from "../components/KeyDetails";
import Hourly from "../components/Hourly";
import Daily from "../components/Daily";
import Map from "../components/Map";
import Humidity from "../components/Humidity";
import Wind from "../components/Wind";
import Rainfall from "../components/Rainfall";
import UVIndex from "../components/UVIndex";

function InfoPage() {
  useEffect(() => {
    document.title = "Weather";
  });

  return (
    <div className="info">
      <NavBar />

      <div className="info-container">
        <div className="flexbox-container row1">
          <div className="flexbox-item">
            <KeyDetails />
          </div>

          <div className="flexbox-item">
            {/* <Map /> */}
          </div>
        </div>

        <div className="flexbox-container row2">
          <div className="flexbox-item">
            <Hourly />
          </div>
        </div>

        <div className="flexbox-container">
          <div className="flexbox-item-bottom-row">
            <div className="flexbox-container">
              <div className="flexbox-item">
                {/* <UVIndex /> */}
              </div>
            </div>

            <div className="flexbox-container">
              <div className="flexbox-item">
                <Humidity />
              </div>
              <div className="flexbox-item">
                <Wind />
              </div>
            </div>
          </div>

          <div className="flexbox-item-bottom-row">
            <div className="flexbox-container middle">
              <div className="flexbox-item">
                <Daily />
              </div>
            </div>
          </div>

          <div className="flexbox-item-bottom-row">
            <div className="flexbox-container">
              <div className="flexbox-item">
                <Rainfall />
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
