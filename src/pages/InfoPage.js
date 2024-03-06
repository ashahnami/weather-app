import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './InfoPage.css';



function InfoPage() {
  useEffect(() => {
    document.title = 'Weather';
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

    </div>

  )
}

export default InfoPage