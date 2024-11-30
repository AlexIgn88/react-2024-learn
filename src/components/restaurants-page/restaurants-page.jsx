import { useCallback, useState } from "react";
import RestaurantsNavigation from "../restaurants-navigation/restaurants-navigation.jsx";
import Restaurant from "../restaurant/restaurant.jsx";
import { useSelector } from "react-redux";
import { selectAllRestaurants } from "../../redux/entities/restaurants/restaurants-slice.js";

const RestaurantsPage = () => {
  const restaurants = useSelector((state) => selectAllRestaurants(state));

  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const handlerRestaurantChange = useCallback(
    (restaurant) => {
      if (restaurant.id !== activeRestaurant.id)
        setActiveRestaurant(restaurant);
    },
    [activeRestaurant.id],
  );
  return (
    <>
      <RestaurantsNavigation
        restaurants={restaurants}
        onRestaurantChange={handlerRestaurantChange}
      />
      <Restaurant restaurant={activeRestaurant} />
    </>
  );
};

export default RestaurantsPage;
