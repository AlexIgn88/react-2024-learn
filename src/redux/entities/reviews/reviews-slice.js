import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurantReviews } from "./get-restaurant-reviews.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewsIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
    selectAllReviews: (state) => Object.values(state.entities),
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurantReviews.fulfilled, (state, { payload }) => {
      entityAdapter.upsertMany(state, payload);
    }),
});

export const { selectReviewsIds, selectReviewById, selectAllReviews } =
  reviewsSlice.selectors;
