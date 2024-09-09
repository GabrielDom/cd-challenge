import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import { useWeatherContext } from "../context/weatherProvider";
import { Button } from "@mui/material";

const WeatherDetailsPage: React.FC = () => {
  const { city } = useParams();
  const { data: weatherData, isLoading, error } = useWeather(city || "");
  const { addFavoriteCity, favoriteCities } = useWeatherContext();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  const backToFavorites = () => {
    navigate("/favorites");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Data error.</div>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <Button variant="outlined" onClick={handleBackToHome}>
          Back to home
        </Button>
        {favoriteCities.length > 0 ? (
          <Button variant="contained" color="primary" onClick={backToFavorites}>
            Return to the list of favorite cities
          </Button>
        ) : null}
      </div>
      {weatherData && (
        <WeatherCard
          weatherData={weatherData}
          addFavoriteCity={addFavoriteCity}
        />
      )}{" "}
      <Forecast city={city || ""} />
    </div>
  );
};

export default WeatherDetailsPage;
