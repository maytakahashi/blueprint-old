import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.486217&longitude=-74.451820&current=temperature_2m,wind_speed_10m")
      .then((response) => response.json())
      .then((data) => setWeather(data.current))
      .catch((error) => console.error("Error weather data: ", error))
  }, [])

  return (
    <>
      <h2>Current Weather</h2>
      { weather ? (
        <div>
          <p>Temperature: {weather.temperature_2m}</p>
          <p>Wind Speed: {weather.wind_speed_10m}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  )
}

export default App
