import { ReactNode } from "react";

type WeatherType = {
  uv: ReactNode;
  humidity: ReactNode;
  condition: any;
  temp_c: ReactNode;
  date: string;
  day: any;
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
    air_quality: {
      co: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      us_epa: number;
      gb_defra: number;
    };
  };

  forecast: {
    forecastday: [
      {
        date: string;
        date_epoch: number;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          avgtemp_c: number;
          maxwind_mph: number;
          maxwind_kph: number;
          totalprecip_mm: number;
          totalprecip_in: number;
          totalsnow_cm: number;
          avgvis_km: number;
          avgvis_miles: number;
          avghumidity: number;
          daily_will_it_rain: number;
          daily_chance_of_rain: number;
          daily_will_it_snow: number;
          daily_chance_of_snow: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          uv: 1.0;
          air_quality: {
            co: number;
            no2: number;
            o3: number;
            so2: number;
            pm2_5: number;
            pm10: number;
            us_epa: number;
            gb_defra: number;
          };
        };
        astro: {
          sunrise: string;
          sunset: string;
          moonrise: string;
          moonset: string;
          moon_phase: string;
          moon_illumination: number;
          is_moon_up: number;
          is_sun_up: number;
        };
        hour: [
          {
            time_epoch: number;
            time: string;
            temp_c: number;
            temp_f: number;
            is_day: number;
            condition: {
              text: string;
              icon: string;
              code: number;
            };
            wind_mph: number;
            wind_kph: number;
            wind_degree: number;
            wind_dir: string;
            pressure_mb: number;
            pressure_in: number;
            precip_mm: number;
            precip_in: number;
            snow_cm: number;
            humidity: number;
            cloud: number;
            feelslike_c: number;
            feelslike_f: number;
            windchill_c: number;
            windchill_f: number;
            heatindex_c: number;
            heatindex_f: number;
            dewpoint_c: number;
            dewpoint_f: number;
            will_it_rain: number;
            chance_of_rain: number;
            will_it_snow: number;
            chance_of_snow: number;
            vis_km: number;
            vis_miles: number;
            gust_mph: number;
            gust_kph: number;
            uv: number;
            air_quality: {
              co: number;
              no2: number;
              o3: number;
              so2: number;
              pm2_5: number;
              pm10: number;
              us_epa: number;
              gb_defra: number;
            };
            short_rad: number;
            diff_rad: number;
          }
        ];
      }
    ];
  };
};

export default WeatherType;
