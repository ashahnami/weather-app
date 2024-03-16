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

      <div className="container">
        <div className="box key-details">
          <KeyDetails />
        </div>

        <div className="box map">
          <Map />
        </div>

        <div className="box hourly">
          <Hourly />
        </div>

        <div className="box uv-index">
          <UVIndex />
        </div>

        <div className="box daily">
          <Daily />
        </div>

        <div className="box rainfall">
          <Rainfall />
        </div>

        <div className="box humidity">
          <Humidity />
        </div>

        <div className="box wind">
          <Wind />
        </div>

        <div className="box">

        </div>
      </div>
    </div>
  );
}

export default InfoPage;
