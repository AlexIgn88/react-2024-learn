import Dish from "../../../components/dish/dish.jsx";
import getDishByDishId from "../../../services/get-dish-by-dish-id.js";

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  const dish = await getDishByDishId(dishId);

  return (
    <main>
      <Dish dish={dish} showIngredients />
    </main>
  );
};

export default DishPage;
