import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantMenu } from "./restaurants-slice.js";
import { selectDishesIds } from "../dishes/dishes-slice.js";
import { isContainsAllElements } from "../../../utils/utils.js";

export const getRestaurantMenu = createAsyncThunk(
  "restaurants/getRestaurantMenu",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${id}`,
    );
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("restaurants/getRestaurantMenu no data");
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      const restaurantDishesIds = selectRestaurantMenu(getState(), id);
      const allDishesIds = selectDishesIds(getState());
      return !isContainsAllElements(restaurantDishesIds, allDishesIds);
    },
  },
);
