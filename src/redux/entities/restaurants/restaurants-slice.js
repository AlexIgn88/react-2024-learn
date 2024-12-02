import { createSelector, createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurants: (state) => state.entities,
    selectRestaurantsIds: (state) => state.ids,
  },
});

export const { selectRestaurants } = restaurantsSlice.selectors;

export const selectAllRestaurants = createSelector(
  [selectRestaurants],
  (restaurants) => Object.values(restaurants),
);
