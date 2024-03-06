import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    </div>
  )
}

export default InfoPage