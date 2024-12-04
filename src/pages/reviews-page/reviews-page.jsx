import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import Reviews from "../../components/reviews/reviews.jsx";

const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { reviews } = restaurant;

  return <Reviews reviews={reviews} />;
};

export default ReviewsPage;
