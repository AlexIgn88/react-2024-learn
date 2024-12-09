import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getDishById } from "./get-dish-by-id.js";
import { getRestaurantMenu } from "../restaurants/get-restaurant-menu.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishes: (state) => state.entities,
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurantMenu.fulfilled, (state, { payload }) => {
        entityAdapter.addMany(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
      }),
});

export const { selectDishes, selectDishesIds, selectDishById } =
  dishesSlice.selectors;

export const selectRestaurantDishes = createSelector(
  [selectDishes, (state, menu) => menu],
  (dishes, menu) => {
    if (!menu || !dishes) return [];
    return menu
      .map((dishId) => dishes[dishId])
      .filter((dish) => dish !== undefined);
  },
);
