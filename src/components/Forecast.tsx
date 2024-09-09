import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { useWeatherForecast } from "../hooks/useWeather";
import { ForecastDay, ForecastProps } from "../models";

const Forecast: React.FC<ForecastProps> = ({ city }) => {
  const { data, isLoading, error } = useWeatherForecast(city);

  if (isLoading) return <CircularProgress style={{ marginTop: "1rem" }} />;
  if (error) return <Typography color="error">Forecast error</Typography>;

  return (
    <Box>
      <Typography variant="h5">Forecast</Typography>
      <Box
        display="flex"
        justifyContent="center"
        mt={2}
        gap={2}
        flexWrap="wrap"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "column",
            lg: "column",
            xl: "column",
          },
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        {data.forecast.forecastday.map((day: ForecastDay) => (
          <Card
            key={day.date}
            sx={{
              margin: { xs: "10px 0", sm: "0 10px" },
              width: { xs: 300, sm: 300, md: 300, lg: 350, xl: 350 },
              display: { xs: "flex" },
            }}
          >
            <CardContent
              sx={{
                display: { xs: "flex" },
                alignItems: { xs: "center" },
                justifyContent: { xs: "center" },
                gap: { xs: 4 },
              }}
            >
              <Typography variant="h6">
                {new Date(day.date).toLocaleString("en-US", {
                  weekday: "short",
                })}
              </Typography>
              <Box
                sx={{
                  width: { xs: "24px" },
                  height: { xs: "24px" },
                  display: { xs: "flex" },
                  alignItems: { xs: "center" },
                  justifyContent: { xs: "center" },
                }}
              >
                <img
                  src={day.day.condition.icon}
                  alt={day.day.condition.text}
                />
              </Box>
              <Typography variant="body1" sx={{ display: { xs: "none" } }}>
                {day.day.condition.text}
              </Typography>

              <Typography variant="body2">
                Mín: {day.day.mintemp_c}°C
              </Typography>
              <Typography variant="body2">
                Máx: {day.day.maxtemp_c}°C
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Forecast;
