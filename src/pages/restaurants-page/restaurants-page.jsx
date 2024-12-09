import RestaurantNavigation from "../../components/restaurant-navigation/restaurant-navigation.jsx";
import { restaurantNavigation } from "./restaurants-page.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
import { Navigate, Outlet } from "react-router-dom";

import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants.js";
import Loader from "../../components/loader/loader.jsx";
import DownloadError from "../../components/download-error/download-error.jsx";
import { useRequest } from "../../redux/hooks/use-request.js";

const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector((state) => selectRestaurantsIds(state));

  if (requestStatus === "pending") {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (requestStatus === "rejected") {
    return (
      <main>
        <DownloadError />
      </main>
    );
  }

  if (!restaurantsIds.length) {
    return <main></main>;
  }

  return (
    <>
      <nav className={restaurantNavigation}>
        {restaurantsIds.map((restaurantId) => (
          <RestaurantNavigation
            key={restaurantId}
            restaurantId={restaurantId}
          />
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RestaurantsPage;
