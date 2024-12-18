import Menu from "../../../../components/menu/menu.jsx";
import { getDishesByRestaurantId } from "../../../../services/get-dishes-by-restaurant-id.js";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  const dishes = await getDishesByRestaurantId(restaurantId);

  return <Menu menu={dishes} />;
};

export default MenuPage;
