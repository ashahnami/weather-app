import React, { useContext, useEffect, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import SearchBar from "../components/SearchBar";
import "../assets/landing.css";
import { LocationContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LandingPage() {
  const [location, setLocation] = useContext(LocationContext);
  const [details, setDetails] = useState();
  const [hovered, setHovered] = useState(false);

  let navigate = useNavigate();

  const fetchWeather = async (bookmark) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${bookmark.lat}&lon=${bookmark.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      return response.data;
    } catch (error) {
      return null;
    }
  };

  const fetchWeatherForBookmarks = async () => {
    try {
      const locations = JSON.parse(localStorage.getItem("locations")).data;
      const details = await Promise.all(locations.map(fetchWeather));
      setDetails(details);
    } catch (error) {
      console.error(error);
    }
  };

  const removeBookmark = (index) => {
    let locations = JSON.parse(localStorage.getItem("locations"));

    if (locations === null) return;

    try {
      locations.data.splice(index, 1);
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem("locations", JSON.stringify(locations));
    return false;
  };

  const handleClick = (bookmark) => {
    if (!hovered) {
      setLocation(bookmark);
      navigate("/weather");
    }
  }

  useEffect(() => {
    if (location) fetchWeatherForBookmarks();
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
                  <div className="row" key={index}>
                    <div
                      className="bookmark"
                      onClick={() => { handleClick(bookmark) }}
                      key={index}
                    >

                      {details ? (
                        <>
                          <div>
                            <div>{bookmark.place}, {bookmark.country}</div>
                            <div className="description">
                              {details[index].weather[0].description.charAt(0).toUpperCase() +
                                details[index].weather[0].description.slice(1)}
                            </div>
                          </div>

                          <div>
                            <div className="max-temp">{Math.round(details[index].main.temp_max)}°</div>
                            <div className="min-temp">{Math.round(details[index].main.temp_min)}°</div>
                          </div>
                        </>
                      ) : null}
                    </div>
                    {!hovered ?
                      <BookmarkIcon className="bookmark-icon" onMouseEnter={() => setHovered(true)}>remove</BookmarkIcon>
                      :
                      <BookmarkBorderIcon className="bookmark-icon" onMouseLeave={() => setHovered(false)} onClick={() => { removeBookmark(index); navigate('/') }} />
                    }
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
