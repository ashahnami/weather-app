import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import InfoPage from './pages/InfoPage';
import { LocationContext } from './context';

function App() {
  const [location, setLocation] = useState({ place: 'London', country: 'United Kingdom', lat: '51.5072', lon: '0.1276' });

  return (
      <LocationContext.Provider value={[location, setLocation]}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/weather" element={<InfoPage/>} />
            </Routes>
        </BrowserRouter>
    </LocationContext.Provider>
  )
}

export default App;
