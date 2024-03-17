import React, { useContext, useEffect, useState } from 'react';

import SearchBar from '../components/SearchBar';
import '../assets/landing.css';
import { LocationContext } from '../context';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [location, setLocation] = useContext(LocationContext);
  const [details, setDetails] = useState([]);
  let navigate = useNavigate();

  // const fetchData = () => {
  //   let arr = []

  //   axios.get()
  //   .then(function(response) {

  //   })
  // }

  useEffect(() => {
    document.title = 'Home';
  })

  return (
    <div className='landing'>
      <div className='landing-container'>
        <h1>
            A weather application for farmers
        </h1>

        <SearchBar />

        <div className='bookmarks'>
          {localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')).data.map((bookmark, index) => {
            return (
              <div className='bookmark' onClick={() => {setLocation(bookmark); navigate('/weather')}}>
                <div>{bookmark.place}</div>

                <div>5°</div>
              </div>
            )
          })
          : null}
        </div>
      </div>
    </div>
  )
}

export default LandingPage