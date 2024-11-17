import { restaurants } from "../../../materials/mock.js";
import {
  restaurantsNavigation,
  restaurantButton,
} from "./restaurants-navigation.module.scss";

const RestaurantsNavigation = ({ onRestaurantChange }) => {
  return (
    <div className={restaurantsNavigation}>
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          className={restaurantButton}
          onClick={() => onRestaurantChange(restaurant)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

export default RestaurantsNavigation;
