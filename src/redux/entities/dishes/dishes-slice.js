import { createSelector, createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectDishes: (state) => state.entities,
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishes, selectDishesIds, selectDishById } =
  dishesSlice.selectors;
