export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
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
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

export interface City {
  name: string;
  country: string;
}

export interface ForecastProps {
  city: string;
}

interface Condition {
  text: string;
  icon: string;
}

interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  condition: Condition;
}

export interface ForecastDay {
  date: string;
  day: Day;
}

export interface ForecastData {
  forecast: {
    forecastday: ForecastDay[];
  };
}

export interface WeatherCardProps {
  weatherData: WeatherData;
  addFavoriteCity: (city: { name: string; data: WeatherData }) => void;
  cityName?: string;
  onDetailsClick?: () => void;
}
