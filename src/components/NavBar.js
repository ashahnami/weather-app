import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";

import "../assets/navbar.css";

function Home() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="link">
          Home
        </Link>

        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
