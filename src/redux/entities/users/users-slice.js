import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedUsers.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUsersIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
    selectAllUsers: (state) => Object.values(state.entities),
  },
});

export const { selectUsersIds, selectUserById, selectAllUsers } =
  usersSlice.selectors;
