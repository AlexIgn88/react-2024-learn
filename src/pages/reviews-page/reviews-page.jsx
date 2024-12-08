import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantReviews } from "../../redux/entities/restaurants/restaurants-slice.js";
import Reviews from "../../components/reviews/reviews.jsx";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getRestaurantReviews } from "../../redux/entities/reviews/get-restaurant-reviews.js";
import { getUsers } from "../../redux/entities/users/get-users.js";
import Loader from "../../components/loader/loader.jsx";
import DownloadError from "../../components/download-error/download-error.jsx";
import { selectUsersIds } from "../../redux/entities/users/users-slice.js";

const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const requestStatusReviews = useRequest(getRestaurantReviews, restaurantId);

  // const requestStatusUsers = useRequest(getUsers);

  // статус загрузки пользователей тут не использую,
  // просто загружаю сразу при первом рендере сразу всех пользователей с сервера
  useRequest(getUsers);

  const reviews = useSelector((state) =>
    selectRestaurantReviews(state, restaurantId),
  );
  const users = useSelector((state) => selectUsersIds(state));

  if (requestStatusReviews === "pending") {
    return <Loader />;
  }

  if (requestStatusReviews === "rejected" || users.length === 0) {
    return <DownloadError />;
  }

  return <Reviews reviews={reviews} />;
};

export default ReviewsPage;
