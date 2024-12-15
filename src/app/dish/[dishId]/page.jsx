"use client";

import { useParams } from "next/navigation";
import Dish from "../../../components/dish/dish.jsx";

const DishPage = () => {
  const { dishId } = useParams();

  return (
    <main>
      <Dish dishId={dishId} showIngredients />
    </main>
  );
};

export default DishPage;
