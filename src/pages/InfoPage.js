import React, { useContext, useEffect, useState } from "react";
import _ from "lodash";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import "../assets/info.css";
import NavBar from "../components/NavBar";
import KeyDetails from "../components/KeyDetails";
import Hourly from "../components/Hourly";
import Daily from "../components/Daily";
import Map from "../components/Map";
import Humidity from "../components/Humidity";
import Wind from "../components/Wind";
import Rainfall from "../components/Rainfall";
import Indexes from "../components/Indexes";
import { LocationContext } from "../context";

function InfoPage() {
  const [location, setLocation] = useContext(LocationContext);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const checkIsBookmarked = () => {
    let locations = JSON.parse(localStorage.getItem("locations"));

    if (locations === null) {
      setIsBookmarked(false);
      return;
    }

    for (let i = 0; i < locations.data.length; i++) {
      if (_.isEqual(locations.data[i], location)) {
        setIsBookmarked(true);
        return;
      }
    }
  };

  const bookmarkLocation = () => {
    if (!localStorage.getItem("locations")) {
      let locations = { data: [] };
      locations.data[0] = location;
      localStorage.setItem("locations", JSON.stringify(locations));
      setIsBookmarked(true);
      return;
    }

    let locations = JSON.parse(localStorage.getItem("locations"));
    for (let i = 0; i < locations.data.length; i++) {
      if (_.isEqual(locations.data[i], location)) {
        return;
      }
    }

    let arr = JSON.parse(localStorage.getItem("locations"));
    arr.data.push(location);
    localStorage.setItem("locations", JSON.stringify(arr));
    setIsBookmarked(true);
  };

  const removeFromBookmarks = () => {
    let locations = JSON.parse(localStorage.getItem("locations"));

    if (locations === null) {
      return;
    }

    for (let i = 0; i < locations.data.length; i++) {
      if (_.isEqual(locations.data[i], location)) {
        locations.data.splice(i, 1);
        localStorage.setItem("locations", JSON.stringify(locations));
        setIsBookmarked(false);
        return;
      }
    }
  };

  useEffect(() => {
    document.title = "Weather";
    if (location) checkIsBookmarked();
  }, [location]);

  return (
    <div className="info">
      <div className="header">
        <NavBar />

        {isBookmarked ? (
          <BookmarkIcon className="bookmark" onClick={removeFromBookmarks} />
        ) : (
          <BookmarkBorderIcon className="bookmark" onClick={bookmarkLocation} />
        )}
      </div>

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
          <Indexes />
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

        <div className="box"></div>
      </div>
    </div>
  );
}

export default InfoPage;
