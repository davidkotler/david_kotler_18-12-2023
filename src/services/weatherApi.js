import { fetchAllData, fetchAutoCompleteData } from "../api/api";

export async function getAutocompleteSearch(searchValue) {
  const response = await fetchAutoCompleteData(
    "locations/v1/cities/autocomplete",
    searchValue
  );
  return response;
}

export async function getFiveDaysForCast(locationId) {
  const response = await fetchAllData("forecasts/v1/daily/5day/", locationId);
  return response;
}

export async function getCurrentDayWeather(locationId) {
  const response = await fetchAllData("currentconditions/v1/", locationId);
  return response;
}
