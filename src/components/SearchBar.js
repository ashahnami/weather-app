import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../assets/searchbar.css";

function SearchBar() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  let navigate = useNavigate();
  let searchRef = useRef();

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length > 0) {
      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then(function (response) {
          setResults(response.data);
        })
        .catch(function (error) {
          console.log(error.response.data.message);
        });
    }
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
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder="Search for a place"
          value={input}
          onChange={handleChange}
          className="input"
          onFocus={() => setShowResults(true)}
        />

        <input type="submit" value="Search" className="button" />
      </form>

      <div className="results">
        {showResults
          ? results.map((result, index) => {
              return (
                <div
                  className="result"
                  key={index}
                  onClick={(e) => {
                    navigate("/weather", { state: { place: result.name } });
                  }}
                >
                  {result.name}, {result.state}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SearchBar;
