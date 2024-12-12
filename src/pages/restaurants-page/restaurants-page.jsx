import RestaurantNavigation from "../../components/restaurant-navigation/restaurant-navigation.jsx";
import { restaurantNavigation } from "./restaurants-page.module.scss";
import { Outlet } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import LoadErrorDisplay from "../../components/load-error-display/load-error-display.jsx";

const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

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
