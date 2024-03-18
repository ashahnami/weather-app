import React, { useContext, useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import "../assets/landing.css";
import { LocationContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LandingPage() {
  const [location, setLocation] = useContext(LocationContext);
  const [details, setDetails] = useState([]);

  let navigate = useNavigate();

  const fetchPrice = async (bookmark) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${bookmark.lat}&lon=${bookmark.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      return Math.round(response.data.main.temp);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    if (location) {
      const fetchPricesForBookmarks = async () => {
        try {
          const locations = JSON.parse(localStorage.getItem("locations")).data;
          const details = await Promise.all(locations.map(fetchPrice));
          setDetails(details);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPricesForBookmarks();
    }
  }, [location]);

  return (
    <div className="landing">
      <div className="landing-container">
        <h1>A weather application for farmers</h1>

        <SearchBar />

        <div className="bookmarks">
          {localStorage.getItem("locations")
            ? JSON.parse(localStorage.getItem("locations")).data.map(
                (bookmark, index) => {
                  return (
                    <div
                      className="bookmark"
                      onClick={() => {
                        setLocation(bookmark);
                        navigate("/weather");
                      }}
                      key={index}
                    >
                      <div>{bookmark.place}, {bookmark.country}</div>

                      <div>{details[index]}°</div>
                    </div>
                  );
                }
              )
            : null}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
