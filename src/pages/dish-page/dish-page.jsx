import { useParams } from "react-router-dom";
import Dish from "../../components/dish/dish.jsx";
import { useRequest } from "../../redux/hooks/use-request.js";
import { getDishById } from "../../redux/entities/dishes/get-dish-by-id.js";
import Loader from "../../components/loader/loader.jsx";
import DownloadError from "../../components/download-error/download-error.jsx";

const DishPage = () => {
  const { dishId } = useParams();
  const requestStatus = useRequest(getDishById, dishId);

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

  return (
    <main>
      <Dish dishId={dishId} showIngredients />
    </main>
  );
};

export default DishPage;
