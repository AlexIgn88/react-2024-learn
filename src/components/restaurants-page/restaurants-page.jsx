import { restaurants } from "../../../materials/mock.js";
import { useCallback, useState } from "react";
import RestaurantsNavigation from "../restaurants-navigation/restaurants-navigation.jsx";
import Restaurant from "../restaurant/restaurant.jsx";

const RestaurantsPage = () => {
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
