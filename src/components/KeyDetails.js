import React from 'react';

import '../assets/keydetails.css';

function KeyDetails({ place }) {
  return (
    <div className='keydetails'>
      <div className='location'>{place}</div>
      <div className='temperature'>5°<span className='range'>±0.5</span></div>
      <div className='alt-temperature'>Feels like 3°</div>
    </div>
  )
}

export default KeyDetails;