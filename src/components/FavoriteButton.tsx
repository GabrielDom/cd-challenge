import React from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWeatherContext } from "../context/weatherProvider";
import { WeatherData } from "../models";

interface FavoriteButtonProps {
  cityName: string;
  addFavoriteCity: (city: { name: string; data: WeatherData }) => void;
  weatherData: WeatherData;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  cityName,
  addFavoriteCity,
  weatherData,
}) => {
  const { isFavoriteCity } = useWeatherContext();

  const handleAddToFavorites = () => {
    addFavoriteCity({ name: cityName, data: weatherData });
  };

  return (
    <IconButton onClick={handleAddToFavorites}>
      <FavoriteIcon
        style={{ color: isFavoriteCity(cityName) ? "red" : "lightgray" }}
      />
    </IconButton>
  );
};

export default FavoriteButton;
