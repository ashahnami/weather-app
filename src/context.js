import { createContext } from 'react';

export const LocationContext = createContext({ place: 'London', country: 'United Kingdom', lat: '51.5072', lon: '0.1276' });