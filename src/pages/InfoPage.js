import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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


      <div class = "flexbox-container">

        <div class = "flexbox-item">
          <p>hi</p>
        </div>

        <div class = "flexbox-item">
          <p>hello</p>
        </div>

      </div>
      <div class = "flexbox-container">
      <div class = "flexbox-item">
          <p>hello</p>
        </div>
      </div>

      <p>Searched for: {location.state.place}</p>
    </div>

  )
}

export default InfoPage