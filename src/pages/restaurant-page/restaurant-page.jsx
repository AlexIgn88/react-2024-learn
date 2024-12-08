import Restaurant from "../../components/restaurant/restaurant.jsx";
import { useParams } from "react-router-dom";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id.js";
import Loader from "../../components/loader/loader.jsx";
import DownloadError from "../../components/download-error/download-error.jsx";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getRestaurantById, restaurantId);

  if (requestStatus === "pending") {
    return <Loader />;
  }
  if (requestStatus === "rejected") {
    return <DownloadError />;
  }
  return <Restaurant restaurantId={restaurantId} />;
};

export default RestaurantPage;
