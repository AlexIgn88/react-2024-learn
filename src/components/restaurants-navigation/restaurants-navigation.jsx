import { restaurantsNavigation } from "./restaurants-navigation.module.scss";
import Button from "../Button/button.jsx";

const RestaurantsNavigation = ({ restaurants, onRestaurantChange }) => {
  return (
    <div className={restaurantsNavigation}>
      {restaurants.map((restaurant) => (
        <Button
          key={restaurant.id}
          text={restaurant.name}
          handler={() => onRestaurantChange(restaurant)}
        />
      ))}
    </div>
  );
};

export default RestaurantsNavigation;
