import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getDishByDishId: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (restaurantId) => [{ type: "Reviews", restaurantId }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: ({ restaurantId }) => [
        { type: "Reviews", restaurantId },
      ],
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getReviewsByRestaurantId",
            args.restaurantId,
            (draft) => {
              draft.push(args.review); // Добавляем новый отзыв в draft
            },
          ),
        );
        try {
          await queryFulfilled;
        } catch (err) {
          patchResult.undo(); // Отменяем оптимистичное обновление при ошибке
        }
      },
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `/review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: ({ reviewId }) => [{ type: "Reviews", reviewId }],
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getReviewsByRestaurantId",
            args.review.restaurantId, // Используем restaurantId из обновленного отзыва
            (draft) => {
              const index = draft.findIndex(
                (review) => review.id === args.reviewId,
              );
              if (index !== -1) {
                draft[index] = args.review; // Обновляем отзыв в draft
              }
            },
          ),
        );
        try {
          await queryFulfilled;
        } catch (err) {
          patchResult.undo(); // Отменяем оптимистичное обновление при ошибке
        }
      },
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByDishIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useGetUsersQuery,
} = apiSlice;
