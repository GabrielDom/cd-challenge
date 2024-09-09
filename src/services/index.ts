import axios from "axios";
import { API_HOST, API_KEY, URL_BASE } from "../constants";
import { WeatherData } from "../models";

const weatherApiClient = axios.create({
  baseURL: URL_BASE,
  headers: {
    "X-RapidAPI-Host": API_HOST,
    "X-RapidAPI-Key": API_KEY,
  },
});

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherData> => {
  const response = await weatherApiClient.get("/current.json?", {
    params: { q: city },
  });
  return response.data;
};

export const fetchCitySuggestions = async (query: string) => {
  const response = await weatherApiClient.get(`/search.json?q=${query}`);
  return response.data;
};

export const fetchWeatherForecast = async (city: string, days: number = 3) => {
  const response = await weatherApiClient.get("forecast.json?", {
    params: { q: city, days },
  });
  return response.data;
};
