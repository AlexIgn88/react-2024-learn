// import { useRequest } from "../../redux/hooks/use-request.js";
// import { getRestaurantById } from "../../redux/entities/restaurants/get-restaurant-by-id.js";
// import Loader from "../../components/loader/loader.jsx";
// import DownloadError from "../../components/download-error/download-error.jsx";
import Restaurant from "../../components/restaurant/restaurant.jsx";
import { useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/index.js";
import LoadErrorDisplay from "../../components/load-error-display/load-error-display.jsx";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  // const requestStatus = useRequest(getRestaurantById, restaurantId);
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId);

  return (
    <LoadErrorDisplay data={data} isLoading={isLoading} isError={isError}>
      <Restaurant restaurant={data} />
    </LoadErrorDisplay>
  );
};

export default RestaurantPage;
