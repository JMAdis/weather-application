import { useEffect, useState } from "react";
import Pinpoint from "../../assets/noun-pinpoint-1426583.png";
import "./Welcome.scss";

const Welcome = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [currentDayAndDate, setCurrentDayAndDate] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      const newGreeting = getGreeting(hours);
      setGreeting(newGreeting);

      setCurrentTime(`${hours}:${minutes} ${ampm}`);

      const options = { weekday: "long", day: "numeric", month: "long" };
      setCurrentDayAndDate(now.toLocaleDateString("en-UK"));
    }, 1000);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch (
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=af97a90f4d89459d8a2d03b0d4355825`
            );
            const data = await response.json();
            const city = data.results[0]?.components?.city || "Unkown City";
            setUserLocation(city)
          } catch (error) {
            console.error("Error fetching location data")
          }
        },
        (error) => {
          console.error("Error getting user's location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }

    return () => clearInterval(intervalId);
  }, []);

  const getGreeting = (hours: number): string => {
    if (hours >= 5 && hours < 12) {
      return "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <div className="welcome-container">
      <div>
        <h1 className="welcome-container__text">{greeting} Jess</h1>
        <h3 className="welcome-container__text">{currentTime}</h3>
        <p className="welcome-container__text">{currentDayAndDate}</p>
      </div>
      <div className="welcome-container__location">
        <img
          src={Pinpoint}
          alt="pinpoint"
          className="welcome-container__icon"
        />
        <p className="welcome-container__text">
          {userLocation || "Loading..."}{" "}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
