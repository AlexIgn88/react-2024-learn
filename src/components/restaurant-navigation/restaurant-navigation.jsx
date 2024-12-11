// import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
// import { useSelector } from "react-redux";
import NavigationTab from "../navigation-tab/navigation-tab.jsx";

// const RestaurantNavigation = ({ restaurantId }) => {
const RestaurantNavigation = ({ restaurant }) => {
  // const restaurant = useSelector((state) =>
  //   selectRestaurantById(state, restaurantId),
  // );
  const { id, name } = restaurant;

  return <NavigationTab path={id} title={name} />;
};

export default RestaurantNavigation;
