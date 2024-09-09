import React from "react";
import { Button, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useWeatherContext } from "../context/weatherProvider";
import WeatherCard from "../components/WeatherCard";

const FavoriteCitiesPage: React.FC = () => {
  const { favoriteCities } = useWeatherContext();
  const navigate = useNavigate();

  const handleViewDetails = (city: string) => {
    navigate(`/weather/${city}`);
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Favorites cities
      </Typography>

      {favoriteCities.length === 0 ? (
        <Stack direction="column" spacing={2} justifyContent="center">
          <Typography variant="body1">
            There is no favorites cities yet.
          </Typography>
          <Button
            variant="outlined"
            onClick={handleBackToHome}
            style={{ marginBottom: "1rem" }}
          >
            Back to home
          </Button>
        </Stack>
      ) : (
        <Stack
          spacing={4}
          justifyContent="center"
          alignItems="center"
          marginTop="2rem"
        >
          <Button
            variant="outlined"
            onClick={handleBackToHome}
            style={{ marginBottom: "1rem" }}
          >
            Back to home
          </Button>
          {favoriteCities.map((city, index) => (
            <WeatherCard
              key={`${city.name}-${index}`}
              cityName={city.name}
              addFavoriteCity={() => {}}
              onDetailsClick={() => handleViewDetails(city.name)}
              weatherData={city?.data}
            />
          ))}
        </Stack>
      )}
    </div>
  );
};

export default FavoriteCitiesPage;
