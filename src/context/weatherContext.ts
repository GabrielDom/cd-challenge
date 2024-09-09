import { createContext } from "react";
import { WeatherData } from "../models";

export interface FavoriteCity {
  name: string;
  data: WeatherData;
}

export interface WeatherContextType {
  favoriteCities: FavoriteCity[];
  addFavoriteCity: (city: FavoriteCity) => void;
  removeFavoriteCity: (cityName: string) => void;
  isFavoriteCity: (cityName: string) => boolean;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export default WeatherContext;
