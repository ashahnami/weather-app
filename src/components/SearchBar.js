import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import "../assets/searchbar.css";
import { LocationContext } from "../context";

function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  // const { getCode, getName } = require("country-list");
  let navigate = useNavigate();
  let searchRef = useRef();
  const [location, setLocation] = useContext(LocationContext);
  var countries = require("i18n-iso-countries");
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

  function handleChange(e) {
    const input_ = e.target.value;
    setShowResults(true);
    setInput(e.target.value);
    e.preventDefault();
    if (input_.length > 0) {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${input_}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then(function (response) {
          setResults(response.data);
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    }
  }

  function clearInput() {
    setInput("");
    setResults([]);
  }

  useEffect(() => {
    const handler = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="search" ref={searchRef}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search for a place"
          value={input}
          onChange={handleChange}
          className="input"
          onFocus={() => setShowResults(true)}
        />

        {input.length > 0 ? (
          <ClearIcon onClick={clearInput} className="clear-icon" />
        ) : (
          <SearchIcon className="search-icon" />
        )}
      </div>

      <div className="results">
        {showResults
          ? results.map((result, index) => {
              return (
                <div
                  className="result"
                  key={index}
                  onClick={(e) => {
                    console.log(
                      countries.getName(result.country, "en", { alias: true })
                    );

                    setShowResults(false);
                    setLocation({
                      place: result.name,
                      country: countries.getName(result.country, "en", {
                        alias: true,
                      }),
                      lat: result.lat,
                      lon: result.lon,
                    });
                    localStorage.setItem(
                      "location",
                      JSON.stringify({
                        country: countries.getName(result.country, "en", {
                          alias: true,
                        }),
                        place: result.name,
                        lat: result.lat,
                        lon: result.lon,
                      })
                    );
                    navigate("/weather");
                  }}
                >
                  {result.name},{" "}
                  {countries.getName(result.country, "en", { alias: true })}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SearchBar;
