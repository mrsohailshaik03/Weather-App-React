import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24.84,
    temp: 25.45,
    tempMin: 25.05,
    tempMax: 26.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app">
      <h1 className="app-title">Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
