import "./WeatherContainer.scss";
import WeatherTile from "../../components/WeatherTile/WeatherTile";
import WeatherType from "../../types/WeatherTypes";
import { useEffect, useState } from "react";


const WeatherContainer = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherType | null>(null);
  const [forecast, setForecast] = useState<WeatherType[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude} = position.coords;

          fetchCurrentWeather(latitude, longitude);

          fetchWeatherForecast(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported")
    }
  }, []);

  const fetchCurrentWeather = async (latitude:number, longitude: number) => {
    const apiKey = "0c346772203e44949f173406241103";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCurrentWeather(data.current);
    } catch (error) {
      console.error("Error fetching current weather")
    }
  };

  const fetchWeatherForecast = async (latitude: number, longitude: number) => {
    const apiKey = "0c346772203e44949f173406241103";
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=6`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setForecast(data.forecast.forecastday);
    } catch (error) {
      console.error("Error fetching weather forecast");
    }
  };

  return (
    <div className="weather-container">
      <h3 className="weather-info__title">Today's forecast:</h3>
      {currentWeather && (
        <div className="weather-info">
        <img
          src={currentWeather.condition.icon}
          alt="weather placeholder"
          className="weather-info__img"
        />
        <p> Current Temperature: {currentWeather.temp_c}°C</p>
        <p>Forecast: {currentWeather.condition.text}</p>
        <p> UV Index: {currentWeather.uv}</p>
        <p> Humidity: {currentWeather.humidity}</p>
      </div>
      )}
      <h3 className="weather-info__title">The next few days:</h3>
      {forecast.map((day) => (
        <WeatherTile
        key={day.date}
        date={new Date(day.date).toLocaleDateString('en-UK', {day: 'numeric', month: 'long'})}
        condition={day.day.condition.text}
        weatherImage={day.day.condition.icon}
        lowTemp={day.day.mintemp_c}
        highTemp={day.day.maxtemp_c} 
        />
      ))}
    </div>
  );
};

export default WeatherContainer;
