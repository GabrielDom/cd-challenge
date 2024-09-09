import React, { useState, useContext, ReactNode } from "react";
import WeatherContext, {
  FavoriteCity,
  WeatherContextType,
} from "./weatherContext";

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteCities, setFavoriteCities] = useState<FavoriteCity[]>([]);

  const addFavoriteCity = (city: FavoriteCity) => {
    setFavoriteCities((prevCities) => [...prevCities, city]);
  };

  const removeFavoriteCity = (cityName: string) => {
    setFavoriteCities((prevCities) =>
      prevCities.filter((city) => city.name !== cityName)
    );
  };

  const isFavoriteCity = (cityName: string) => {
    return favoriteCities.some((favCity) => favCity.name === cityName);
  };

  const contextValue: WeatherContextType = {
    favoriteCities,
    addFavoriteCity,
    removeFavoriteCity,
    isFavoriteCity,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
};
