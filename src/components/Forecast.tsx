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
        flexWrap="wrap"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        {data.forecast.forecastday.map((day: ForecastDay) => (
          <Card
            key={day.date}
            sx={{ margin: { xs: "10px 0", sm: "0 10px" }, width: 200 }}
          >
            <CardContent>
              <Typography variant="h6">{day.date}</Typography>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <Typography variant="body1">{day.day.condition.text}</Typography>
              <Typography variant="body2">
                Máx: {day.day.maxtemp_c}°C
              </Typography>
              <Typography variant="body2">
                Mín: {day.day.mintemp_c}°C
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Forecast;
