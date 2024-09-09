import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherProvider } from "./context/weatherProvider.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeatherDetailsPage from "./pages/WeatherDetailsPage.tsx";
import FavoriteCitiesPage from "./pages/FavoriteCitiesPage.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/weather/:city",
    element: <WeatherDetailsPage />,
  },
  {
    path: "/favorites",
    element: <FavoriteCitiesPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </WeatherProvider>
    </QueryClientProvider>
  </StrictMode>
);
