import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../assets/info.css';
import NavBar from '../components/NavBar';
import KeyDetails from '../components/KeyDetails';
import Hourly from '../components/Hourly';
import Daily from '../components/Daily';

function InfoPage() {
  let location=useLocation();
  let place=location.state ? location.state.place: "temporary";

  useEffect(() => {
    document.title='Weather';
  })

  return (
    <div className='info'>

      <NavBar />

      <div className='info-container'>
        <div className="flexbox-container row1">
          <div className="flexbox-item">
             <KeyDetails place={place} />
          </div>

          <div className="flexbox-item"></div>
        </div>

        <div className="flexbox-container row2">
          <div className="flexbox-item">
            <Hourly />
          </div>
        </div>

        <div className="flexbox-container">
            <div className="flexbox-item-bottom-row">
              <div className="flexbox-container">
                  <div className="flexbox-item"></div> 
              </div>

              <div className="flexbox-container">
                <div className="flexbox-item"></div>
                <div className="flexbox-item"></div>
              </div>
            </div>

            <div className="flexbox-item-bottom-row">
              <div className="flexbox-container middle">
                <div className="flexbox-item">
                  <Daily />
                </div> 
              </div>
            </div>

            <div className="flexbox-item-bottom-row">
              <div className="flexbox-container">
                <div className="flexbox-item"></div> 
              </div>
            
              <div className="flexbox-container">
              <div className="flexbox-item"></div> 
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default InfoPage