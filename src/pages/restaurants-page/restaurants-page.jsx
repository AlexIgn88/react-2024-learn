import RestaurantNavigation from "../../components/restaurant-navigation/restaurant-navigation.jsx";
import { restaurantNavigation } from "./restaurants-page.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/restaurants-slice.js";
import { Outlet } from "react-router-dom";

const RestaurantsPage = () => {
  const restaurantsIds = useSelector((state) => selectRestaurantsIds(state));

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
