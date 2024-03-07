import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../assets/info.css';

function InfoPage() {
  let location = useLocation();

  useEffect(() => {
    document.title = 'Weather';
    console.log(location.state);
  })

  return (
    <div>

      <Link to="/">Homepage</Link>
      <p>Searched for: {location.state.place}</p>

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

      <div class = "flexbox-container">
        

          <div class = "flexbox-item-bottom-row">

          <div class = "flexbox-container">
              <div class = "flexbox-item">
              </div> 

            </div>

            <div class = "flexbox-container">


              <div class = "flexbox-item">
              </div>
              <div class = "flexbox-item">
              </div>

            </div>

            
          </div>

          <div class = "flexbox-item-bottom-row">

            <div class = "flexbox-container">
              <div class = "flexbox-item">
              </div> 

            </div>
            
          </div>

          <div class = "flexbox-item-bottom-row">

          <div class = "flexbox-container">

                <div class = "flexbox-item">
                </div> 
          </div>
          
          <div class = "flexbox-container">
          <div class = "flexbox-item">
                </div> 

          </div>
                


          </div>

      </div>

    </div>

  )
}

export default InfoPage