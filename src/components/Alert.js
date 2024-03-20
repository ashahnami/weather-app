import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { LocationContext } from '../context';

import '../assets/alert.css';

function Alert() {
    const [location, setLocation] = useContext(LocationContext);
    const [weatherdata, setWeatherdata] = useState(null);

    // fetch weather data from OpenWeatherMap API
    const fetchData = async () => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );
        setWeatherdata(response.data);
    };

    useEffect(() => {
        if (location) fetchData();
    }, [location])

    const determineTempAlert = (value) => {
        let alertClass = {
            background: "",
            text: ""
        };

        if (value >= 40) {
            alertClass.background = "#8b0000";
            alertClass.text = "Extreme Heat!"
        } else if (value >= 30) {
            alertClass.background = "#FF0000"
            alertClass.text = "Very hot!"
        } else if (value >= 23) {
            alertClass.background = "#FFBF00"
            alertClass.text = "Hot!"
        }

        return alertClass;
    }

    const determineHumidityAlert = (value) => {
        let alertClass = {
            background: "",
            text: ""
        };

        if (value >= 65) {
            alertClass.background = "#8b0000";
            alertClass.text = "Very humid - lots of moisture in air"
        } else if (value >= 55) {
            alertClass.background = "#FA5F55"
            alertClass.text = "'Sticky' air"
        }
        return alertClass;
    }
    const determineRainfallAlert = (value) => {
        let alertClass = {
            background: "",
            text: ""
        };

        if (value >= 50) {
            alertClass.background = "#8b0000";
            alertClass.text = "Extreme rainfall and potential for flooding"
        } else if (value >= 10) {
            alertClass.background = "#FF0000"
            alertClass.text = "Heavy rain"
        } else if (value >= 2.5) {
            alertClass.background = "#FFBF00"
            alertClass.text = "Moderate rain"
        }
        return alertClass;
    }

    const determineSnowfallAlert = (value) => {
        let alertClass = {
            background: "",
            text: ""
        };

        if (value >= 3) {
            alertClass.background = "#8b0000";
            alertClass.text = "Extreme snowfall"
        } else if (value >= 2) {
            alertClass.background = "#FF0000"
            alertClass.text = "Heavy snowfall"
        } else if (value >= 1) {
            alertClass.background = "#FFBF00"
            alertClass.text = "Moderate snowfall"
        }
        return alertClass;
    }

    const determineWindAlert = (value) => {
        let alertClass = {
            background: "",
            text: ""
        };

        if (value >= 40) {
            alertClass.background = "#8b0000";
            alertClass.text = "Extreme Winds "
        } else if (value >= 25) {
            alertClass.background = "#FF0000"
            alertClass.text = "Fast winds"
        } else if (value >= 20) {
            alertClass.background = "#FFBF00"
            alertClass.text = "Moderately fast winds"
        }
        return alertClass;
    }

    return (
        <div className='alerts'>
            <div className="title">Alerts</div>
            {weatherdata ? (
                <>
                    {determineTempAlert(weatherdata.main.temp) && (
                        <div className="Tempalert" style={{ backgroundColor: determineTempAlert(weatherdata.main.temp).background }}><p>{determineTempAlert(weatherdata.main.temp).text}</p>
                        </div>
                    )}
                    {determineHumidityAlert(weatherdata.main.humidity) && (
                        <div className="Humidityalert" style={{ backgroundColor: determineHumidityAlert(weatherdata.main.humidity).background }}><p>{determineHumidityAlert(weatherdata.main.humidity).text}</p>
                        </div>
                    )}
                    {determineRainfallAlert(weatherdata.rain ? weatherdata.rain['1h'] : 0) && (
                        <div className="Rainfallalert" style={{ backgroundColor: determineRainfallAlert(weatherdata.rain ? weatherdata.rain['1h'] : 0).background }}><p>{determineRainfallAlert(weatherdata.rain ? weatherdata.rain['1h'] : 0).text}</p>
                        </div>
                    )}
                    {determineSnowfallAlert(weatherdata.snow ? weatherdata.snow['1h'] : 0) && (
                        <div className="Snowalert" style={{ backgroundColor: determineSnowfallAlert(weatherdata.snow ? weatherdata.snow['1h'] : 0).background }}><p>{determineSnowfallAlert(weatherdata.snow ? weatherdata.snow['1h'] : 0).text}</p>
                        </div>
                    )}
                    {determineWindAlert(weatherdata.wind.speed) && (
                        <div className="Windalert" style={{ backgroundColor: determineWindAlert(weatherdata.wind.speed).background }}><p>{determineWindAlert(weatherdata.wind.speed).text}</p>
                        </div>
                    )}
                </>
            ) : (
                <p>No current weather Alerts...</p>
            )}

        </div>
    )
}

export default Alert
