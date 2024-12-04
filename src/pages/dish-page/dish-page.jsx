import { useParams } from "react-router-dom";
import Dish from "../../components/dish/dish.jsx";

const DishPage = () => {
  const { dishId } = useParams();

  return (
    <main>
      <Dish dishId={dishId} />
    </main>
  );
};

export default DishPage;
