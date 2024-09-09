import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import FavoriteButton from "./FavoriteButton";
import { WeatherCardProps } from "../models";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { useLocation, useNavigate } from "react-router-dom";

const WeatherCard: React.FC<WeatherCardProps> = ({
  weatherData,
  addFavoriteCity,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isOnDetailsPage = location.pathname.includes("/weather/");

  const handleButtonClick = () => {
    if (isOnDetailsPage) {
      navigate("/");
    } else {
      navigate(`/weather/${weatherData?.location.name}`);
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "2rem auto",
        borderRadius: 4,
        boxShadow: 3,
      }}
      variant="outlined"
    >
      <CardContent sx={{ padding: 3 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "start",
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {weatherData.location.name}, {weatherData.location.country}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {new Date(weatherData.location.localtime).toLocaleString(
                "en-US",
                {
                  weekday: "short",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }
              )}
              , {weatherData.current.condition.text}
            </Typography>
          </Box>
          <CardActions>
            <FavoriteButton
              cityName={weatherData.location.name}
              addFavoriteCity={addFavoriteCity}
              weatherData={weatherData}
            />
          </CardActions>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Typography variant="h1" fontWeight="light">
            {Math.round(weatherData.current.temp_c)}°C
          </Typography>
          <img
            src={weatherData.current.condition.icon}
            alt="Weather icon"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <WaterDropIcon color="primary" />
            <Typography variant="body2">
              Humidity: {weatherData.current.humidity}%
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <AirIcon color="disabled" />
            <Typography variant="body2">
              Wind: {weatherData.current.wind_kph} kph
            </Typography>
          </div>
        </div>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleButtonClick}
            style={{ marginTop: "1rem" }}
          >
            {isOnDetailsPage ? "Back to home" : "See forecast"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
