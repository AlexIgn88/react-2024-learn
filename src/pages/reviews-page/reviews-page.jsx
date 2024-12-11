// import { useSelector } from "react-redux";
// import { selectRestaurantReviews } from "../../redux/entities/restaurants/restaurants-slice.js";
// import { useRequest } from "../../redux/hooks/use-request.js";
// import { getRestaurantReviews } from "../../redux/entities/reviews/get-restaurant-reviews.js";
// import { getUsers } from "../../redux/entities/users/get-users.js";
// import { selectUsersIds } from "../../redux/entities/users/users-slice.js";
import { useParams } from "react-router-dom";
import Reviews from "../../components/reviews/reviews.jsx";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "../../redux/services/api/index.js";
import LoadErrorDisplay from "../../components/load-error-display/load-error-display.jsx";
import { useCallback } from "react";

const ReviewsPage = () => {
  const { restaurantId } = useParams();
  // const requestStatusReviews = useRequest(getRestaurantReviews, restaurantId);
  // const requestStatusUsers = useRequest(getUsers);
  // статус загрузки пользователей тут не использую,
  // просто загружаю сразу при первом рендере сразу всех пользователей с сервера
  // useRequest(getUsers);
  // const reviews = useSelector((state) =>
  //   selectRestaurantReviews(state, restaurantId),
  // );
  // const users = useSelector((state) => selectUsersIds(state));
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
