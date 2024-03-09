import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import '../assets/landing.css';

function LandingPage() {
  useEffect(() => {
    document.title = 'Home';

  })

  return (
    <div className='landing'>
      <div className='landing-container'>
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
    </div>
  )
}

export default LandingPage