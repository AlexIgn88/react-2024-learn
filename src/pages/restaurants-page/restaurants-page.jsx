// import { useSelector } from "react-redux";
// import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
// import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js";
// import { useRequest } from "../../redux/hooks/use-request.js";
import RestaurantNavigation from "../../components/restaurant-navigation/restaurant-navigation.jsx";
import { restaurantNavigation } from "./restaurants-page.module.scss";
import { Outlet } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import LoadErrorDisplay from "../../components/load-error-display/load-error-display.jsx";

const RestaurantsPage = () => {
  // const requestStatus = useRequest(getRestaurants);
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  // const restaurantsIds = useSelector((state) => selectRestaurantsIds(state));
  // if (!restaurantsIds.length) {
  //   return <main></main>;
  // }

  return (
    <LoadErrorDisplay data={data} isLoading={isLoading} isError={isError}>
      {data && (
        <>
          <nav className={restaurantNavigation}>
            {data.map((restaurant) => (
              <RestaurantNavigation
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </nav>
          <main>
            <Outlet />
          </main>
        </>
      )}
      )
    </LoadErrorDisplay>
  );
};

export default RestaurantsPage;
