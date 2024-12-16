"use client";

import RestaurantNavigation from "../../components/restaurant-navigation/restaurant-navigation.jsx";
import { restaurantNavigation } from "./restaurants-page.module.scss";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import LoadErrorDisplay from "../../components/load-error-display/load-error-display.jsx";
import { useAuth } from "../../components/auth-context/use-auth.js";
import Cart from "../../components/cart/cart.jsx";

const LayoutRestaurantsPage = ({ children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  const {
    user: { isAuthorized },
  } = useAuth();

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
          <main>{children}</main>
          {isAuthorized && <Cart />}
        </>
      )}
    </LoadErrorDisplay>
  );
};

export default LayoutRestaurantsPage;
