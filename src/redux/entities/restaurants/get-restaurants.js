import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from "./restaurants-slice.js";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("restaurants/getRestaurants no data");
    }
    return result;
  },
  {
    condition: (_, { getState, dispatch }) => {
      return selectRestaurantsIds(getState()).length === 0;
    },
  },
);
