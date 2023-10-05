import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
       <footer>This project was coded by <a href="https://github.com/lydi-in-tech">Lydia Pelesane</a> and is <a href="https://github.com/lydi-in-tech/react-week4-homework" target="_blank" title="GitHub weather app project" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://shecodes-weather.netlify.app/" target="_blank" rel="noreferrer" title="weather app project on netlify website">hosted on Netlify</a></footer>
    </div>
  );
}

export default App;
