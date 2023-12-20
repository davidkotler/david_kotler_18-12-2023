import React from "react";
import { apiUrl, apiKey } from "../settings";
import { useHistory } from "react-router-dom";

export async function fetchAllData(path, locationId) {
  try {
    const response = await fetch(
      `${apiUrl}/${path}${locationId}?apikey=${apiKey}`,
      {
        method: "GET",
        headers: {
          "Sec-Fetch-Mode": "cors",
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    localStorage.setItem("error", JSON.stringify(error));
    window.location.href = "/error";
  }
}

export async function fetchAutoCompleteData(path, locationName) {
  try {
    const response = await fetch(
      `${apiUrl}/${path}?apikey=${apiKey}&q=${locationName}`,
      {
        method: "GET",
        headers: {
          "Sec-Fetch-Mode": "cors",
        },
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    window.location.href = "/error";
  }
}
