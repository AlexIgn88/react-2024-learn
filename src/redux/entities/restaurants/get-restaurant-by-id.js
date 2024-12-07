import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurants-slice.js";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);
    const result = await response.json();

    if (!result && typeof result === "object") {
      return rejectWithValue("restaurants/getRestaurantById no data");
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      return !selectRestaurantById(getState(), id);
    },
  },
);
