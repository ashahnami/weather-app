import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../assets/info.css';
import NavBar from '../components/NavBar';
import KeyDetails from '../components/KeyDetails';

function InfoPage() {
  let location = useLocation();
  let place = location.state.place;

  useEffect(() => {
    document.title = 'Weather';
    console.log(location.state);
  })

  return (
    <div>

      <NavBar />

      <div class = "flexbox-container">

        <div class = "flexbox-item">
          <KeyDetails place={place} />
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