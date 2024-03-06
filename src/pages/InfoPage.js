import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './InfoPage.css';



function InfoPage() {
  let location = useLocation();

  useEffect(() => {
    document.title = 'Weather';
    console.log(location.state);
  })

  return (
    <div>

      <Link to="/">Homepage</Link>
      <SearchBar />


      <div class = "flexbox-container">

        <div class = "flexbox-item">
        </div>

        <div class = "flexbox-item">
        </div>

      </div>

      <div class = "flexbox-container">
        
        <div class = "flexbox-item">
        </div>
      </div>

    </div>

  )
}

export default InfoPage