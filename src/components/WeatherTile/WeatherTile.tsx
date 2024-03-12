import "./WeatherTile.scss";

type WeatherTileProps = {
  key: string;
  date: string;
  condition: string;
  weatherImage: string;
  lowTemp: number;
  highTemp: number;
}

const WeatherTile = ({date, condition, weatherImage, lowTemp, highTemp} : WeatherTileProps) => {
   
  return (
    <div className="forecast-info">
      <div className="forecast-info__container">
        <img
          src={weatherImage}
          alt="weather placeholder"
          className="forecast-info__img"
        />
        <div>
        <p className="forecast-info__info">{date}</p>
        <p className="forecast-info__info">{condition}</p>
        </div>
        <div>
        <p className="forecast-info__info">{highTemp}°C</p>
        <p className="forecast-info__info">{lowTemp}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherTile;
