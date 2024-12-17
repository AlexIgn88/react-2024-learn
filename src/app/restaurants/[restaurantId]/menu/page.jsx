import Menu from "../../../../components/menu/menu.jsx";
import { getDishesByRestaurantId } from "../../../../services/get-dishes-by-restaurant-id.js";
import { Suspense } from "react";
import Loader from "../../../../components/loader/loader.jsx";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  const dishes = await getDishesByRestaurantId(restaurantId);

  return (
    <Suspense fallback={<Loader />}>
      <Menu menu={dishes} />
    </Suspense>
  );
};

export default MenuPage;
