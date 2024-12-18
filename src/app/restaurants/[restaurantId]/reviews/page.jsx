import Reviews from "../../../../components/reviews/reviews.jsx";
import { GetReviewsByRestaurantId } from "../../../../services/get-reviews-by-restaurant-id.js";
import { getUsers } from "../../../../services/get-users.js";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  const reviews = await GetReviewsByRestaurantId(restaurantId);
  const users = await getUsers();

  return (
    <Reviews restaurantId={restaurantId} reviews={reviews} users={users} />
  );
};

export default ReviewsPage;
