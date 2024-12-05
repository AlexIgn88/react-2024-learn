import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { useSelector } from "react-redux";
import NavigationTab from "../navigation-tab/navigation-tab.jsx";

const RestaurantNavigation = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { name } = restaurant;

  return <NavigationTab path={restaurantId} title={name} />;
};

export default RestaurantNavigation;
