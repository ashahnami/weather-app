import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';


import './InfoPage.css';



function InfoPage() {
  useEffect(() => {
    document.title = 'Weather';
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