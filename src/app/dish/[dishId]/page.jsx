import Dish from "../../../components/dish/dish.jsx";

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return (
    <main>
      <Dish dishId={dishId} showIngredients />
    </main>
  );
};

export default DishPage;
