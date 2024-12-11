// import { useRequest } from "../../redux/hooks/use-request.js";
// import { getDishById } from "../../redux/entities/dishes/get-dish-by-id.js";
import { useParams } from "react-router-dom";
import Dish from "../../components/dish/dish.jsx";

const DishPage = () => {
  const { dishId } = useParams();
  // const requestStatus = useRequest(getDishById, dishId);

  return (
    <main>
      <Dish dishId={dishId} showIngredients />
    </main>
  );
};

export default DishPage;
