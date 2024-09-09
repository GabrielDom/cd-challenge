import React, { useState } from "react";
import { Button, Typography, CircularProgress, Stack } from "@mui/material";
import { useCitySuggestions, useWeather } from "../hooks/useWeather";
import { useWeatherContext } from "../context/weatherProvider";
import { useDebounceFn } from "ahooks";
import CityAutocomplete from "./CityAutocomplete";
import WeatherCard from "./WeatherCard";
import { useNavigate } from "react-router-dom";

const CitySearch: React.FC = () => {
  const { addFavoriteCity, favoriteCities } = useWeatherContext();

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const {
    data: weatherData,
    error,
    isLoading,
  } = useWeather(selectedCity || "");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const { data: citySuggestions, isLoading: loadingSuggestions } =
    useCitySuggestions(query);

  const { run: debounceQuery } = useDebounceFn(
    (inputValue) => {
      setQuery(inputValue);
    },
    {
      wait: 300,
    }
  );

  const handleGoToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <CityAutocomplete
          citySuggestions={citySuggestions}
          loading={loadingSuggestions}
          debounceQuery={debounceQuery}
          setSelectedCity={setSelectedCity}
        />
      </Stack>

      {isLoading && <CircularProgress style={{ marginTop: "1rem" }} />}

      {error && (
        <Typography color="error" style={{ marginTop: "1rem" }}>
          {error?.message}
        </Typography>
      )}

      {favoriteCities.length > 0 ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoToFavorites}
          style={{ marginTop: "2rem" }}
        >
          See favorite cities
        </Button>
      ) : null}

      {weatherData && (
        <>
          <WeatherCard
            weatherData={weatherData}
            addFavoriteCity={addFavoriteCity}
          />
        </>
      )}
    </div>
  );
};

export default CitySearch;
