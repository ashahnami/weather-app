import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
        <h1>
            Farming Weather
        </h1>
        <h2>
            Weather forecasts and information
        </h2>

        <p>Search for your location below</p>
        <button>Search</button>

        <Link to="/weather">Weather page</Link>
    </div>
  )
}

export default LandingPage