import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedReviews.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
    selectAllReviews: (state) => Object.values(state.entities),
  },
});

export const { selectReviewsIds, selectReviewById, selectAllReviews } =
  reviewsSlice.selectors;
