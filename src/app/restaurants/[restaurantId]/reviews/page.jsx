"use client";

import { useParams } from "next/navigation";
import Reviews from "../../../../components/reviews/reviews.jsx";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "../../../../redux/services/api/index.js";
import LoadErrorDisplay from "../../../../components/load-error-display/load-error-display.jsx";
import { useCallback } from "react";

const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const {
    data: reviews,
    isLoading: isReviewsLoading,
    isFetching: isReviewsFetching,
    isError: isReviewsError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);
  const { data: users } = useGetUsersQuery();

  const [addReview] = useAddReviewMutation();
  const [updateReview] = useUpdateReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ restaurantId, review });
    },
    [addReview, restaurantId],
  );
  const handleUpdateReview = useCallback((reviewId, review) => {
    updateReview({ reviewId, review });
  }, []);

  return (
    <LoadErrorDisplay
      data={reviews}
      isLoading={isReviewsLoading}
      // isFetching={isReviewsFetching} //отключил, чтобы не крутил спиннер при при rtk query optimistic update
      isError={isReviewsError}
      requestStatus={users?.length === 0}
    >
      <Reviews
        reviews={reviews}
        onAddReview={handleAddReview}
        onUpdateReview={handleUpdateReview}
      />
    </LoadErrorDisplay>
  );
};

export default ReviewsPage;
