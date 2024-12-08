import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "./users-slice.js";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users`);
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("users/getUsers no data");
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUsersIds(getState()).length === 0;
    },
  },
);
