import React, { useContext, useEffect } from "react";
import _ from 'lodash';

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
import { LocationContext } from "../context";

function InfoPage() {
  const [location, setLocation] = useContext(LocationContext);

  const bookmarkLocation = () => {
    if (!localStorage.getItem('locations')) {
      let locations = {data: []};
      locations.data[0] = location;
      localStorage.setItem('locations', JSON.stringify(locations));
      return
    }

    let locations = JSON.parse(localStorage.getItem('locations'));
    for (let i=0; i<locations.data.length; i++) {
      if (_.isEqual(locations.data[i], location)) {
        return;
      }
    }

    let arr = JSON.parse(localStorage.getItem('locations'));
    arr.data.push(location);
    localStorage.setItem('locations', JSON.stringify(arr));
  }

  useEffect(() => {
    document.title = "Weather";
  });

  return (
    <div className="info">
      <NavBar />

      <div onClick={bookmarkLocation}>Save location</div>

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
