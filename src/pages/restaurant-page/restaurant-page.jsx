import Restaurant from "../../components/restaurant/restaurant.jsx";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <Restaurant restaurantId={restaurantId} />;
};

export default RestaurantPage;
