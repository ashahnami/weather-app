import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function LandingPage() {
  return (
    <div>
        <h1>
            Farming Weathers app sdifhsidfh git 
        </h1>
        <h2>
            Weather forecasts and information
        </h2>

        <p>Search for your location below</p>
        <SearchBar />

        <Link to="/weather">Weather page</Link>
    </div>
  )
}

export default LandingPage