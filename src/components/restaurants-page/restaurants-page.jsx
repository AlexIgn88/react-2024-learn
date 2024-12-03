import { useCallback, useState } from "react";
import RestaurantNavigation from "../restaurant-navigation/restaurant-navigation.jsx";
import Restaurant from "../restaurant/restaurant.jsx";
import { main, restaurantNavigation } from "./restaurants-page.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";

const RestaurantsPage = () => {
  const restaurantsIds = useSelector((state) => selectRestaurantsIds(state));

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0],
  );

  const handlerRestaurantIdChange = useCallback(
    (restaurantId) => {
      if (restaurantId !== activeRestaurantId)
        setActiveRestaurantId(restaurantId);
    },
    [activeRestaurantId],
  );

  return (
    <>
      <div className={restaurantNavigation}>
        {restaurantsIds.map((restaurantId) => (
          <RestaurantNavigation
            key={restaurantId}
            restaurantId={restaurantId}
            onRestaurantIdChange={handlerRestaurantIdChange}
          />
        ))}
      </div>

      <main className={main}>
        {activeRestaurantId && (
          <Restaurant
            key={activeRestaurantId}
            restaurantId={activeRestaurantId}
          />
        )}
      </main>
    </>
  );
};

export default RestaurantsPage;
