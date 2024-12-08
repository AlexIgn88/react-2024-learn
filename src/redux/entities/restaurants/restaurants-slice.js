import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";
import { getRestaurantById } from "./get-restaurant-by-id.js";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurants: (state) => state.entities,
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantMenu: (state, id) => state.entities[id].menu,
    selectRestaurantReviews: (state, id) => state.entities[id].reviews,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      }),
});

export const {
  selectRestaurants,
  selectRestaurantsIds,
  selectRestaurantById,
  selectRestaurantMenu,
  selectRestaurantReviews,
} = restaurantsSlice.selectors;
