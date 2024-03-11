import React, { useEffect } from 'react';
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
            A weather application for farmers
        </h1>

        <SearchBar />
      </div>
    </div>
  )
}

export default LandingPage