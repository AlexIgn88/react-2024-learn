import Menu from "../menu/menu.jsx";
import Reviews from "../reviews/reviews.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import { useAuth } from "../auth-context/use-auth.js";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { restaurantTitle } from "./restaurant.module.scss";

const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const {
    user: { isAuthorized },
  } = useAuth();

  if (!restaurant) {
    return;
  }

  return (
    <>
      <h2 className={restaurantTitle}>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
      {isAuthorized && <ReviewForm />}
    </>
  );
};

export default Restaurant;
