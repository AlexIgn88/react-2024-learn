import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/restaurants-slice.js";
import { dishesSlice } from "./entities/dishes/dishes-slice.js";
import { reviewsSlice } from "./entities/reviews/reviews-slice.js";
import { usersSlice } from "./entities/users/users-slice.js";
import { cartSlice } from "./ui/cart/cart-slice";
import loggerMiddleware from "./middlewares/loggerMiddleware.js";
import { requestSlice } from "./ui/request/request-slice.js";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
