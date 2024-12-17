import Reviews from "../../../../components/reviews/reviews.jsx";
import { GetReviewsByRestaurantId } from "../../../../services/get-reviews-by-restaurant-id.js";
import { getUsers } from "../../../../services/get-users.js";
import { Suspense } from "react";
import Loader from "../../../../components/loader/loader.jsx";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  const reviews = await GetReviewsByRestaurantId(restaurantId);
  const users = await getUsers();

  return (
    <Suspense fallback={<Loader />}>
      <Reviews restaurantId={restaurantId} reviews={reviews} users={users} />
    </Suspense>
  );
};

export default ReviewsPage;
