import React from "react";
import { TextField, Autocomplete, CircularProgress } from "@mui/material";
import { City } from "../models";

interface CityAutocompleteProps {
  citySuggestions: City[] | undefined;
  loading: boolean;
  debounceQuery: (inputValue: string) => void;
  setSelectedCity: (cityName: string | null) => void;
}

const CityAutocomplete: React.FC<CityAutocompleteProps> = ({
  citySuggestions,
  loading,
  debounceQuery,
  setSelectedCity,
}) => {
  return (
    <Autocomplete<City>
      options={citySuggestions || []}
      getOptionLabel={(option) => `${option.name} - ${option.country}`}
      style={{ width: 300, backgroundColor: "#fff", borderRadius: "4px" }}
      loading={loading}
      onInputChange={(event, newInputValue) => {
        debounceQuery(newInputValue);
      }}
      onChange={(event, newValue) => {
        setSelectedCity(newValue ? newValue.name : null);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search city"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default CityAutocomplete;
