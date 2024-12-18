import Restaurant from "../../../components/restaurant/restaurant.jsx";
import { getRestaurantById } from "../../../services/get-restaurant-by-id.js";

const LayoutRestaurantPage = async ({ params, children }) => {
  const { restaurantId } = await params;

  const restaurant = await getRestaurantById(restaurantId);

  return (
    <>
      <Restaurant restaurant={restaurant} />
      {children}
    </>
  );
};

export default LayoutRestaurantPage;
