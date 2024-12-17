import RestaurantNavigation from "../restaurant-navigation/restaurant-navigation.jsx";
import { getRestaurants } from "../../services/get-restaurants.js";
import { restaurantNavigation } from "./restaurants-tabs-container.module.scss";

const RestaurantsTabsContainer = async () => {
  const restaurants = await getRestaurants();

  if (!restaurants.length) {
    return null;
  }

  return (
    <nav className={restaurantNavigation}>
      {restaurants.map((restaurant) => (
        <RestaurantNavigation key={restaurant.id} restaurant={restaurant} />
      ))}
    </nav>
  );
};

export default RestaurantsTabsContainer;
