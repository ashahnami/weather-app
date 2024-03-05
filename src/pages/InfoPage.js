import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function InfoPage() {
  useEffect(() => {
    document.title = 'Weather';
  })

  return (
    <div>
      <Link to="/">Homepage</Link>
    </div>
  )
}

export default InfoPage