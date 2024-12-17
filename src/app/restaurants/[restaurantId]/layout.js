import Restaurant from "../../../components/restaurant/restaurant.jsx";
import { getRestaurantById } from "../../../services/get-restaurant-by-id.js";
import { Suspense } from "react";
import Loader from "../../../components/loader/loader.jsx";

const LayoutRestaurantPage = async ({ params, children }) => {
  const { restaurantId } = await params;

  const restaurant = await getRestaurantById(restaurantId);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Restaurant restaurant={restaurant} />
      </Suspense>
      {children}
    </>
  );
};

export default LayoutRestaurantPage;
