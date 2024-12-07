import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviews } from "../restaurants/restaurants-slice.js";
import { selectReviewsIds } from "./reviews-slice.js";
import { checkItems } from "../../../utils/utils.js";

export const getRestaurantReviews = createAsyncThunk(
  "reviews/getRestaurantReviews",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${id}`,
    );
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("reviews/getRestaurantReviews no data");
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      const restaurantReviewsIds = selectRestaurantReviews(getState(), id);
      const allReviewsIds = selectReviewsIds(getState());
      return !checkItems(restaurantReviewsIds, allReviewsIds);
    },
  },
);
