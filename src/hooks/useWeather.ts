import { useQuery } from "@tanstack/react-query";
import {
  fetchCitySuggestions,
  fetchWeatherByCity,
  fetchWeatherForecast,
} from "../services/index.ts";
import { WeatherData } from "../models/index.ts";

export const useWeather = (city: string) =>
  useQuery<WeatherData>({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherByCity(city),
    enabled: !!city,
    retry: 2,
    refetchOnWindowFocus: false,
  });

export const useCitySuggestions = (query: string) =>
  useQuery({
    queryKey: ["citySuggestions", query],
    queryFn: () => fetchCitySuggestions(query),
    enabled: !!query,
    retry: 2,
    refetchOnWindowFocus: false,
  });

export const useWeatherForecast = (city: string) =>
  useQuery({
    queryKey: ["weatherForecast", city],
    queryFn: () => fetchWeatherForecast(city),
    enabled: !!city,
  });
