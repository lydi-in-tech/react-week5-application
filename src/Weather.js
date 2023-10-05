import React from "react" 
import "./App.css"

export default function Weather() {
    return (
         <div className="container">
      <div className="search-bar">
        <form id="search-form">
          <div className="row">
            <div className="search-bar">
              <div className="col-9 search-form">
                <input type="search" placeholder="Search for a city"
                  autoFocus="on"
                  autoComplete="off"
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

      <div className="icon" ><img src="http://openweathermap.org/img/wn/50d@2x.png" width="200" height="200" alt="clear" id="icon" />
        <div className="temp" id="temp">21</div>
        <span id="celcius" className="celcius">
          <strong id="temperature"></strong>
          <a href="/#" id="celsius-link">°C</a>|<a href="/#" id="fahrenheit-link">°F</a> 
        </span>
      </div>
      <h1>
        <div id="city" className="city">New York</div>
      </h1>
      <div className="time" id="time">15:00 Friday</div>
     
      <div className="info">
        <div className="description" id="description">rainy</div>
        <div className="humidity" id="humidity"></div>
        <div className="windSpeed" id="windSpeed"></div>
      </div>
      
     

      <footer>This project was coded by <a href="https://github.com/lydi-in-tech">Lydia Pelesane</a> and is <a href="https://github.com/lydi-in-tech/react-week4-homework" target="_blank" title="GitHub weather app project" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://shecodes-weather.netlify.app/" target="_blank" rel="noreferrer" title="weather app project on netlify website">hosted on Netlify</a></footer>
      </div>

   
  );
}
