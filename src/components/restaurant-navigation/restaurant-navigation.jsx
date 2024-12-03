import Button from "../Button/button.jsx";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { useSelector } from "react-redux";

const RestaurantNavigation = ({ restaurantId, onRestaurantIdChange }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <Button
      text={restaurant.name}
      handler={() => onRestaurantIdChange(restaurantId)}
    />
  );
};

export default RestaurantNavigation;
