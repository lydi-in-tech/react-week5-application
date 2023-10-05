import React, { useState  } from "react" 
import axios from "axios"
import "./App.css"

export default function Weather(props) {
    let [weatherData, setWeatherData] = useState({ ready: false });
    let  [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data.condition)
        setWeatherData({
            city: response.data.city,
        description: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
            temperature: response.data.temperature.current,
            date: new Date(response.data.time * 1000),
     icon: response.data.condition.icon_url

        })
        
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

      function handleCityChange(event) {
    setCity(event.target.value);
    }
    
    function search() {
         let apiKey = "o0c5f69b1t0fad2340ee5f05678ddda3";
    
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

    }

    if (weatherData.ready) {
        return (
         
      <div className="search-bar container">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="search-bar">
              <div className="col-9 search-form">
                <input type="search" placeholder="Search for a city"
                  autoFocus="on"
                                    autoComplete="off"
                                    onChange={handleCityChange}
                  className="form-control search-input"
                  id="city-input"
                />
              </div>
              <div className="col-3 p-0">
                <input type="submit" className="btn primary-btn" value="Search" />
              </div>
            </div>
          </div>
        </form>
                </div>
                )
        
    } else {
         search()
        
        return "Loading..."
                    
    }

  
    

      
}
