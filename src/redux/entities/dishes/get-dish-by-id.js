import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishes-slice.js";

export const getDishById = createAsyncThunk(
  "dishes/getDishById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);
    const result = await response.json();

    if (!result && typeof result === "object") {
      return rejectWithValue("dishes/getDishById no data");
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      return !selectDishById(getState(), id);
    },
  },
);
